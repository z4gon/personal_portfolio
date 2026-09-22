---
date: '2022-07-01T00:00:00.000Z'
priority: -2
videosNames:
  - cliff.mp4
  - lake.mp4
  - water_waves.mp4
  - water_depth_colored.mp4
  - water_depth_refracted.mp4
  - water_refraction.mp4
  - water_foam.mp4
  - water_depth.mp4
  - water_colors.mp4
youtubeVideoIds:
  - ag5X-ObzOY8
  - 0AfmcD5DlXs
  - S920GVHesBM
title: Water Shader
subtitle: With Shader Graph in Unity URP
description:
  - Water shader with dynamic configurations, which can simulate several
    environmental effects.
implementationDetails:
  - Water depth effect using Scene Depth node (Camera Depth Buffer) and Screen
    Position node (Fragment Position)
  - Refractions using Screen Color node to render distorted objects behind the
    water, using Normals generated from height from a gradient noise.
  - Foam generated using the Scene Depth node and a gradient noise.
  - Waves achieved with geometry displacement, adding Normals multiplied by a
    gradient noise, effectively deforming the fragment geometry.
tags:
  - Shader Graph
  - URP
  - VFX
  - Unity
technology: UnityEngine
category: Shaders
---
