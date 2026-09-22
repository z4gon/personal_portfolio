---
date: '2022-10-01T00:00:00.000Z'
videosNames:
  - 11.mp4
  - 10.mp4
  - 8.mp4
  - 7.mp4
  - 6.mp4
  - 5.mp4
  - 4.mp4
  - 3.mp4
  - 2.mp4
  - 1.mp4
title: Transparent Shaders
subtitle: Transparency shaders written in Cg for the Built-in RP in Unity
implementationDetails:
  - Standard Surface Shader using alpha:blend to control the transparency.
  - Setting RenderType and Queue to Transparent, and disabling ZWrite.
  - Writing a second Pass for the Surface Shader with alphatest and addshadow,
    to create shadows that match the transparency.
  - Writing refractions and reflections from scratch in an Unlit shader.
  - Using GrabPass to get a texture with the current pixels in the Frame Buffer.
  - Using ComputeGrabScreenPos, tex2Dproj and UNITY_PROJ_COORD to get the pixel
    from the GrabPass texture.
  - Distorting the GrabPass pixel with the Normal Map, to generate refraction.
  - Using the SkyBox/CubeMap texture to create environmental reflections.
  - Using WorldSpaceViewDir to obtain the direction of the camera to the pixel.
  - Using the built in Cg function reflect(), to get the reflection vector along
    the normal vector in world space (From UnityObjectToWorldNormal).
  - Finally getting the reflection color by sampling the cube texture with
    texCUBE and the reflection vector.
tags:
  - Cg
  - Built-in RP
  - ShaderLab
  - Unity
  - Surface Shader
  - Vertex Shader
  - Fragment Shader
technology: UnityEngine
category: Shaders
---
