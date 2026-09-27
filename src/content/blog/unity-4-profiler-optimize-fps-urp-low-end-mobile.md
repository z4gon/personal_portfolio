---
title: 'Profile and Optimize FPS in low-end devices with the URP (Unity)'
excerpt: 'Disable post processing, SSAO and enable target frame rate to optimize FPS count in the Universal Rende Pipeline, for low end moible devices.'
heroImageUrl: '/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/2.jpg'
heroImageCreditUrl: ''
date: '2023-06-01T00:00:00.000Z'
author: 'z4gon'
---

## References

- [Unity mobile device 30fps locked](https://stackoverflow.com/questions/47031279/unity-mobile-device-30fps-locked)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Connect Devices to the Profiler](#connect-devices-to-the-profiler)
- [SSAO and Post Processing](#ssao-and-post-processing)
- [Target Frame Rate](#target-frame-rate)

---

## Connect Devices to the Profiler

- Enable `Development Build` in the build settings, to allow the profiler to find and connect to running players.

![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/1.jpg)

---

## SSAO and Post Processing

- `Screen Space Ambient Occlussion` and `Bloom Post Processing` were taking a toll on the performance.
- The first step is to disable these.

![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/2.jpg)
![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/3.jpg)
![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/4.jpg)
![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/5.jpg)

---

## Target Frame Rate

- A portion of the frame is still taking long, but there doesn't seem to be anything in particular causing it.
- Profiling the GPU is not available for this device, so that is not of much help.

![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/6.jpg)

- We can try setting the target frame rate to test if the engine can actually achieve the desired fps.

```cs
private const int TARGET_FRAME_RATE = 60;

void Start()
{
    Application.targetFrameRate = TARGET_FRAME_RATE;
    SceneManager.LoadScene(1);
}
```

![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/7.jpg)
![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/8.jpg)

- Finally, the desired 60 FPS goal is reached.
- From now on, profiling early and often will be key to identify changes that could introduce low performance.

![Picture](/res/blog/unity-4-profiler-optimize-fps-urp-low-end-mobile/9.jpg)
