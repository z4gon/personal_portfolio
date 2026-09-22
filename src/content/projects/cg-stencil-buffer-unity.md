---
date: '2022-10-01T00:00:00.000Z'
heroVideoName: 1.mp4
title: X-Ray Stencil Buffer
subtitle: X-Ray shader using the stencil buffer in Unity 2021.3.10f1 Built-in RP
  written in the Cg programming language
implementationDetails:
  - Using the Stencil Buffer to write a reference value for later check in other
    shaders.
  - Culling Front and Back for controlling which faces of the cube should render.
  - Disabling ZWrite in the quad that acts as the xray window.
  - Setting Queue=Geometry-1 in the shader to ensure it renders in front of all
    other objects.
tags:
  - Cg
  - Built-in RP
  - Unity
technology: UnityEngine
category: Shaders
---
