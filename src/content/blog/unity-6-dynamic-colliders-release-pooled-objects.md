---
title: 'Dynamic Colliders, Releasing Pooled Objects (Unity)'
excerpt: 'Dynamically resizing box collliders to enclose the scene, so when pooled objects reach the limits can be released.'
heroImageUrl: '/res/blog/unity-6-dynamic-colliders-release-pooled-objects/2.jpg'
heroImageCreditUrl: ''
heroVideoUrl: '/res/blog/unity-6-dynamic-colliders-release-pooled-objects/1.mp4'
date: '2023-06-03T01:00:00.000Z'
author: 'z4gon'
---

## References

- [Introduction to collision](https://docs.unity3d.com/Manual/CollidersOverview.html)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Dynamically Resize Colliders](#dynamically-resize-colliders)
- [Release Pooled Objects](#release-pooled-objects)

---

## Dynamically Resize Colliders

- After initializing the boundaries of the scene, position and resize the box colliders.
- Enclose the play area with walls, these `BoxColliders` will belong to the `Projectiles Limit` physics layer.
- Using properties like `padding` and `wall height`, we can control the shape of the enclosing.

```cs
public BoxCollider top;
public BoxCollider bottom;
public BoxCollider left;
public BoxCollider right;
public float padding = 3.0f;
public float wallHeight = 5.0f;
public float wallThickness = 1.0f;
```

```cs
public void Initialize(Boundaries boundaries)
{
    var bottomLeft = boundaries.bottomLeft;
    var topRight = boundaries.topRight;

    // position
    var centerX = 0;
    var avgZ = (topRight.position.z + bottomLeft.position.z) / 2;

    var topZ = topRight.position.z + padding;
    var bottomZ = bottomLeft.position.z - padding;

    var leftX = -topRight.position.x - padding;
    var rightX = topRight.position.x + padding;

    top.transform.position = new Vector3(centerX, 0, topZ);
    bottom.transform.position = new Vector3(centerX, 0, bottomZ);
    left.transform.position = new Vector3(leftX, 0, avgZ);
    right.transform.position = new Vector3(rightX, 0, avgZ);

    // size
    var deltaX = (2 * topRight.position.x) + (2 * padding);
    var deltaZ = topRight.position.z - bottomLeft.position.z + (2 * padding);

    top.size = new Vector3(deltaX, wallHeight, wallThickness);
    bottom.size = new Vector3(deltaX, wallHeight, wallThickness);
    left.size = new Vector3(wallThickness, wallHeight, deltaZ);
    right.size = new Vector3(wallThickness, wallHeight, deltaZ);
}
```

![Picture](/res/blog/unity-6-dynamic-colliders-release-pooled-objects/2.jpg)

---

## Release Pooled Objects

- Make `Bullets` belong to the `Player Projectiles` physics layer.
- In the phyiscs collisions matrix, make sure to enable the interaction between `Player Projectiles` and `Projectiles Limit`.
- Define the `OnTriggerEnter()` message in the projectiles, and make them signal their `Gun` to release the pooled object.

```cs
public class Bullet : MonoBehaviour
{
    public Gun gun; // this is set by the gun, when shooting

    private void OnTriggerEnter(Collider other)
    {
        gun.ReclaimBullet(this);
    }
}
```

```cs
public class Gun : MonoBehaviour
{
    public void ReclaimBullet(Bullet bullet)
    {
        bulletsPool.Release(bullet);
    }
}
```

![Picture](/res/blog/unity-6-dynamic-colliders-release-pooled-objects/3.jpg)
![Picture](/res/blog/unity-6-dynamic-colliders-release-pooled-objects/1.jpg)
