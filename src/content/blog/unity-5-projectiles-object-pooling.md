---
title: 'Physics Projectiles, Coroutines and Object Pooling (Unity)'
excerpt: 'Using Corotuines and Object Pools to instantiate projectiles, and Ribidbodies for simple physics.'
heroImageUrl: '/res/blog/unity-5-projectiles-object-pooling/3.jpg'
heroImageCreditUrl: ''
heroVideoUrl: '/res/blog/unity-5-projectiles-object-pooling/1.mp4'
date: '2023-06-03T00:00:00.000Z'
author: 'z4gon'
visible: false
---

## References

- [ObjectPool](https://docs.unity3d.com/ScriptReference/Pool.ObjectPool_1.html)
- [ObjectPool Constructor](https://docs.unity3d.com/ScriptReference/Pool.ObjectPool_1-ctor.html)
- [OnDestroy](https://docs.unity3d.com/2017.1/Documentation/ScriptReference/MonoBehaviour.OnDestroy.html)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Projectile: Bullet](#projectile-bullet)
- [ObjectPool: Gun](#objectpool-gun)
  - [Properties](#properties)
  - [Initialize Object Pool](#initialize-object-pool)
  - [Object Pool Event Handlers](#object-pool-event-handlers)
  - [Shoot Projectiles](#shoot-projectiles)
- [Player](#player)
- [All the Pieces Together](#all-the-pieces-together)
- [Correcting Projectile Trajectory](#correcting-projectile-trajectory)

---

## Projectile: Bullet

- For now, a simple component that has a `Collider` and a `Rigidbody`.
- The `Rigidbody` will not be kinematic, to be able to use `Velocity`. And will ignore gravity, to follow a straight line.

```cs
public float speed
{
    get { return rigidBody.velocity.z; }
    set { rigidBody.AddForce(transform.forward * value, ForceMode.VelocityChange); }
}
private Rigidbody rigidBody;

private void Awake()
{
    rigidBody = GetComponent<Rigidbody>();
}
```

---

## ObjectPool: Gun

- This component will use the `ObjectPool` to store the `Bullet` game objects.
- It will also define a `Coroutine` to periodically fire the gun, and shoot projectiles.

### Properties

```cs
public Bullet bulletPrefab;
public float bulletsPerSecond;
public float bulletSpeed;
public int defaultBulletsPoolCapacity = 10;
public int maxBulletsPoolSize = 20;
private ObjectPool<Bullet> bulletsPool;
private Coroutine shootCoroutine;
```

### Initialize Object Pool

```cs
void Awake()
{
    bulletsPool = new ObjectPool<Bullet>(
        createFunc: CreatePooledBullet,
        actionOnGet: OnGetBulletFromPool,
        actionOnRelease: OnReleaseBulletToPool,
        actionOnDestroy: OnDestroyBulletFromPool,
        collectionCheck: true,
        defaultCapacity: defaultBulletsPoolCapacity,
        maxSize: maxBulletsPoolSize
    );
}
```

### Object Pool Event Handlers

```cs
private Bullet CreatePooledBullet() => Object.Instantiate(bulletPrefab, transform.position, transform.rotation);
private void OnGetBulletFromPool(Bullet bullet) => bullet.gameObject.SetActive(true);
private void OnReleaseBulletToPool(Bullet bullet) => bullet.gameObject.SetActive(false);
void OnDestroyBulletFromPool(Bullet bullet) => Destroy(bullet.gameObject);
```

### Shoot Projectiles

```cs
public void StartShooting()
{
    shootCoroutine = StartCoroutine(Shoot());
}

public void StopShooting() => StopCoroutine(shootCoroutine);

private IEnumerator Shoot()
{
    while (true)
    {
        var bullet = bulletsPool.Get();

        if (bullet != null)
        {
            bullet.transform.position = transform.position;
            bullet.transform.rotation = transform.rotation;
            bullet.speed = bulletSpeed;
        }

        yield return new WaitForSeconds(1.0f / bulletsPerSecond);
    }
}
```

---

## Player

- The `Player` game object will react to player input, and shoot projectiles.

```cs
public List<Gun> guns = new List<Gun>();

public void OnShootAction(InputAction.CallbackContext context)
{
    if (context.performed)
        StartShooting();
    else if (context.canceled)
        StopShooting();
}

private void StartShooting()
{
    foreach (var gun in guns)
        gun.StartShooting();
}

private void StopShooting()
{
    foreach (var gun in guns)
        gun.StopShooting();
}
```

---

## All the Pieces Together

![Picture](/res/blog/unity-5-projectiles-object-pooling/1.jpg)

---

## Correcting Projectile Trajectory

- Given the perspective of the camera, projectiles that are aligned to the direction of the player do not follow a straight line in the viewport.
- This is a problem since the player won't be able to aim for enemies in the top left and right corners.

![Picture](/res/blog/unity-5-projectiles-object-pooling/2.jpg)

- Using a `Raycast` again, to get the corresponding point at the top edge, we can make the `Player` to `LookAt` it.
- This effectively makes the aiming dynamic, and keeps a straight like of projectiles in the viewport.

```cs
public void OnPointerPosition(InputAction.CallbackContext context)
{
    ...

    // look at
    point = new Vector2(point.x, Screen.height);
    ray = mainCamera.ScreenPointToRay(point);
    if (boundaries.plane.Raycast(ray, out distance))
    {
        transform.LookAt(ray.GetPoint(distance), Vector3.up);
    }
}
```

![Picture](/res/blog/unity-5-projectiles-object-pooling/3.jpg)
