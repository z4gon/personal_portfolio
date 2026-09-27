---
title: 'Input System Package + Raycasting (Unity)'
excerpt: 'Using Input Action events to Raycast points from Screen Space onto a Plane.'
heroImageUrl: '/res/blog/unity-2-input-system-package-raycast/4.jpg'
heroImageSourceUrl: ''
heroVideoUrl: '/res/blog/unity-2-input-system-package-raycast/1.mp4'
date: '2023-05-29T01:00:00.000Z'
author: 'z4gon'
---

## References

- [Input System Interactions Explained](https://www.youtube.com/watch?v=rMlcwtoui4I)
- [GameObject components for input](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Components.html)
- [Responding to Actions](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/Actions.html#started-performed-and-canceled-callbacks)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Input Actions](#input-actions)
- [Raycast](#raycast)

---

## Input Actions

- Install the `Input System Package` and create an `Input Action` asset.
- Define an action for `Move` with action type `Button` and interaction `Press`.
- Add a `Player Input` component to the Game Object, and set its behavior to `Invoke Unity Events`.
- Bind the events to `OnMoveAction` and `OnPointerPosition`

![Picture](/res/blog/unity-2-input-system-package-raycast/1.jpg)
![Picture](/res/blog/unity-2-input-system-package-raycast/2.jpg)
![Picture](/res/blog/unity-2-input-system-package-raycast/3.jpg)

---

## Raycast

- If `isMoving` use the `value` coming from the `PointerPosition` action, and use it as a `Screen Position` vector.
- Use `Camera.ScreenPointToRay` to obtain a ray and raycast it onto the plane.
- Move the player to the hit transform position.

```cs
private Camera mainCamera;
private LayerMask raycastLayerMask;
private float raycastMaxDistance = 40;
private bool isMoving = false;

public void OnMoveAction(InputAction.CallbackContext context)
{
    isMoving = context.performed;
}

public void OnPointerPosition(InputAction.CallbackContext context)
{
    if (!isMoving)
    {
        return;
    }

    var point = context.ReadValue<Vector2>();
    var ray = mainCamera.ScreenPointToRay(point);
    RaycastHit hit;

    if (
        Physics.Raycast(
            ray,
            out hit,
            raycastMaxDistance,
            raycastLayerMask,
            QueryTriggerInteraction.Collide
        )
    )
    {
        transform.position = hit.point;
    }
}
```

![Picture](/res/blog/unity-2-input-system-package-raycast/4.jpg)
