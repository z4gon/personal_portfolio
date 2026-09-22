---
date: '2022-10-01T00:00:00.000Z'
videosNames:
  - 9.mp4
  - 8a.mp4
  - 8b.mp4
  - 5.mp4
  - 4.mp4
  - 3.mp4
  - 7.mp4
  - 6.mp4
  - 2.mp4
  - 1.mp4
  - 10.mp4
imagesNames:
  - 11.jpg
youtubeVideoIds:
  - QF2svyMgkRQ
title: Standard Surface Shaders
subtitle: Written in the Cg programming language for Unity Built-In RP
implementationDetails:
  - Lambert Lighting, Blinn-Phong Lighting and Custom Lighting models.
  - 'Standard Surface Shaders in Unity using the #pragma directive to define the
    surface function and the lighting model.'
  - Setting the Albedo property from a texture.
  - Normals implemented using a Normal Map or "Bump Map".
  - Fresnel shader implemented doing the dot scalar multiplication between the
    Normal and the IN.viewDir.
  - Environment Mapping using a SkyBox or Cube Map, then using the Unity
    provided worldRefl vector to derive the texel using texCUBE.
  - Combine Normal Maps and Environment Mapping, using the Unity provided
    INTERNAL_DATA macro and the WorldReflectionVector()
  - Using the Binn-Phong lighting model in a Standard Surface Shader.
  - Implementing a Custom Lambert Lighting model.
  - Toon Shading implemented with a ramped Lambert lighting model and an Outline
    shader implemented in a second Pass.
  - Utilizing the Standard, physically correct lighting model.
  - Writing a custom unlit shader for manual implementation of Lambert Lighting,
    Ambient Illumination and Shadow Casting/Receiving.
tags:
  - Cg
  - Built-in RP
  - ShaderLab
  - Unity
  - Surface Shader
  - Lighting
technology: UnityEngine
category: Shaders
---
