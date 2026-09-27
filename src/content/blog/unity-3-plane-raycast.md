---
title: 'Using Plane.Raycast (Unity)'
excerpt: 'Optimizing the Raycast to use pure geometry instead of doing Physics Queries to check collisions with colliders.'
heroImageUrl: '/res/blog/unity-3-plane-raycast/1.jpg'
heroImageSourceUrl: ''
date: '2023-05-31T01:00:00.000Z'
author: 'z4gon'
---

## References

- [Plane](https://docs.unity3d.com/ScriptReference/Plane.html)
- [Plane.Raycast](https://docs.unity3d.com/ScriptReference/Plane.Raycast.html)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Optimization](#optimization)
- [Raycast to the Plane](#raycast-to-the-plane)
- [Using the Input System](#using-the-input-system)

---

## Optimization

- This operation is more efficient than the physics based Raycast with colliders.
- Instead of making Physics Queries, and checking for Colliders in the Scene, this operation is purely geometrical.

---

## Raycast to the Plane

- Define a `Plane` using three points.
- Use `Camera.ViewportPointToRay` to obtain a ray and raycast it onto the plane.
- Obtain the point in space using `ray.getPoint(distance)`.

```cs
public Camera mainCamera;
public Transform bottomLeft;
public Transform topRight;
private Plane plane;

void Awake()
{
    this.plane = new Plane(transform.position, bottomLeft.position, topRight.position);
    PositionCorner(new Vector2(0.0f, 0.0f), bottomLeft);
    PositionCorner(new Vector2(1.0f, 1.0f), topRight);
}

private void PositionCorner(Vector2 viewportPoint, Transform corner)
{
    var distance = 0.0f;
    var ray = mainCamera.ViewportPointToRay(viewportPoint);
    if (this.plane.Raycast(ray, out distance))
    {
        corner.transform.position = ray.GetPoint(distance);
    }
}
```

---

## Using the Input System

- Same as before, but using `Camera.ScreenPointToRay`.

```cs
public Camera mainCamera;
public Plane plane;
private bool isMoving = false;

public void OnMoveAction(InputAction.CallbackContext context)
{
    isMoving = context.performed;
}

public void OnPointerPosition(InputAction.CallbackContext context)
{
    if (!isMoving) { return; }

    var point = context.ReadValue<Vector2>();

    var distance = 0.0f;
    var ray = mainCamera.ScreenPointToRay(point);
    if (this.plane.Raycast(ray, out distance))
    {
        transform.position = ray.GetPoint(distance);
    }
}
```

![Picture](/res/blog/unity-3-plane-raycast/1.jpg)
