---
date: '2023-01-01T00:00:00.000Z'
priority: -5
videosNames:
  - 1.mp4
  - 2.mp4
  - 3.mp4
  - 4.mp4
  - 5.mp4
  - 6.mp4
  - 7.mp4
  - 8.mp4
  - 9.mp4
imagesNames:
  - 0.jpg
  - 5.jpg
  - 6.jpg
  - 7.jpg
  - 8.jpg
  - 9.jpg
  - 10.jpg
  - 11.jpg
  - 12.jpg
  - 13.jpg
youtubeVideoIds:
  - ofLYUlhoxAI
title: Water Caustics Shader
subtitle: With HLSL and Shader Graph in Unity URP
description:
  - Water Caustics Shader with dynamic configurations.
implementationDetails:
  - Using HLSL to get the Main Light data, including direction, color and
    distance/shadow attenuations.
  - Triplanar Projection + UVs Rotation + Animated UVs Offset implemented in
    HLSL.
  - Tiling, Offset, Speed and Rotation of the Caustics Texture, using a Custom
    Function Node in Shader Graph.
  - Distortion of the Caustics Texture using a Simple Noise Node, and some
    dynamic configurations.
  - Oclussion of the Caustics using the Distance/Shadow Attenuation from the
    Main Light, also using a basic Lambert Shading.
  - Using Global/Ambient Illumination to incorporate the Scene Ambient Lighting
    into the mix.
  - Masking the Caustics and adding it onto the Albedo Main Texture for the
    surfaces.
tags:
  - Shader Graph
  - HLSL
  - URP
  - Unity
technology: UnityEngine
category: Shaders
---
