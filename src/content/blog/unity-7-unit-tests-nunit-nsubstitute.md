---
title: 'Writing Unit Tests with NSubstitute (Unity)'
excerpt: 'Use the Unity Test Framework, NUnit and NSubstitute to test your game.'
heroImageUrl: '/res/blog/unity-7-unit-tests-nunit-nsubstitute/0.jpg'
heroImageSourceUrl: ''
# heroVideoUrl: '/res/blog/unity-7-unit-tests-nunit-nsubstitute/1.mp4'
date: '2023-06-06T00:00:00.000Z'
author: 'z4gon'
---

## References

- [About Unity Test Framework](https://docs.unity3d.com/Packages/com.unity.test-framework@1.1/manual/index.html)
- [What Is NUnit](https://nunit.org/)
- [Assert.Greater](https://docs.nunit.org/articles/nunit/writing-tests/assertions/classic-assertions/Assert.Greater.html)
- [NSubstitute](https://nsubstitute.github.io/)
- [Managed plug-ins](https://docs.unity3d.com/Manual/UsingDLL.html)
- [NSubstitute NuGet](https://www.nuget.org/packages/NSubstitute/5.0.0)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Install the Unity Test Framework](#install-the-unity-test-framework)
- [Assembly Definitions](#assembly-definitions)
- [Tests Files](#tests-files)
- [Add NSubstitute](#add-nsubstitute)
- [Tests Examples](#tests-examples)

---

## Install the Unity Test Framework

- Make sure the `Test Framework` package is installed in the project and updated.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/1.jpg)

---

## Assembly Definitions

- Create two `Assembly Definitions`, one for the `Edit Mode` tests and another for the `Play Mode` tests.
- `Edit Mode` tests only run in the `Unity Editor` and have access to the `Editor` code in addition to the game code.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/2.jpg)
![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/3.jpg)
![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/15.jpg)

- Make sure to add a reference to the `Assembly Definition` with the code for your game, so you can tests its classes.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/6.jpg)

---

## Tests Files

- Create test files using the template or write your own from scratch.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/4.jpg)
![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/5.jpg)
![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/7.jpg)
![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/8.jpg)

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/15.jpg)

---

## Add NSubstitute

- You will need to obtain the `.dll` from the `NuGet` registry manually, and add it to the Unity project as a `Managed Plug-in` (Which is a .NET assembly).
- Go to the `NuGet` package for `NSubstitue` and download the `.nupkg`

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/10.jpg)

- Change the extension to `.zip` to be able to extract its contents.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/9.jpg)

- Copy over the `.dll` corresponding to the `Api Compatibility Level` set in the `Player Settings` of your project. (Most likely `.NET Standard 2.1`)
- Repeat the process for any dependency of the library.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/16.jpg)
![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/14.jpg)

- Reference the `Assembly` in the `Assembly Definition` of your tests, to be able to use `NSubstitute`.

![Picture](/res/blog/unity-7-unit-tests-nunit-nsubstitute/11.jpg)

---

## Tests Examples

- `[UnityTest]` tests allow you to skip a frame in the simulation by doing `yield return null`, or skip many doing `yield return new WaitForSeconds()`.
- `[Test]` tests don't run the simulation of the game, you can't skip frames.

```cs
[UnityTest]
public IEnumerator test__on_trigger_enter__invokes_gun_reclaim_bullet()
{
    var gun = Substitute.For<IGun>();

    var bullet = CreateBullet();
    bullet.gun = gun;
    bullet.speed = 20.0f;

    var limits = CreateProjectilesLimit();

    yield return new WaitForSeconds(0.05f);

    gun.Received().ReclaimBullet(bullet);

    GameObject.Destroy(bullet.gameObject);
    GameObject.Destroy(limits.gameObject);
}

public static Bullet CreateBullet()
{
    var obj = new GameObject("Bullet");
    obj.layer = LAYER_PLAYER_PROJECTILES;

    var rigidbody = obj.AddComponent<Rigidbody>();
    rigidbody.useGravity = false;

    var collider = obj.AddComponent<BoxCollider>();
    collider.size = new Vector3(1.0f, 1.0f, 1.0f);
    collider.isTrigger = true;

    var bullet = obj.AddComponent<Bullet>();

    return bullet;
}

private BoxCollider CreateProjectilesLimit()
{
    var obj = new GameObject("ProjectilesLimit");
    obj.layer = Utils.LAYER_PROJECTILES_LIMITS;

    obj.transform.position = new Vector3(0.0f, 0.0f, 1.1f);

    var collider = obj.AddComponent<BoxCollider>();
    collider.size = new Vector3(5.0f, 5.0f, 1.0f);
    collider.isTrigger = true;

    return collider;
}
```
