---
date: '2022-11-01T00:00:00.000Z'
priority: -2
videosNames:
  - 10.mp4
imagesNames:
  - 9.jpg
  - 8.jpg
  - 7.jpg
  - 6.jpg
  - 5.jpg
  - 4.jpg
  - 3.jpg
  - 2.jpg
  - 1.jpg
youtubeVideoIds:
  - 5jiT4pw0tpE
title: Space Portal Shader
subtitle: Written in HLSL using Stencil Buffer, in the Built-in RP for Unity
implementationDetails:
  - Modeling the Meshes and UV Mapping in Blender.
  - Creating the Textures in Affinity, for Masking and doing the Tunnel and Glow
    VFX.
  - Using ZWrite Off to make the shaders not write to the Depth Buffer.
  - Using the Blend command from Shader Lab to implement traditional
    transparency and additive transparency.
  - Portal entrance implemented by writing a custom value to the Stencil Buffer
    to use as a Mask.
  - Masking the Tunnel, Hemisphere and Particles using the Stencil Test,
    checking if the Stencil Buffer has the required value written on.
  - Tunnel implemented animating the texture across the UV.y coordinates using
    _Time.
  - Particle System with custom Shader to also do the Stencil Test to Mask the
    particles inside the portal.
  - Defining the Vertex Color property so Color Over Time works in the Particle
    System.
  - Parametrizing Color, Intensity and Velocity in all the parts of the VFX, for
    full customization.
tags:
  - HLSL
  - Built-in RP
  - ShaderLab
  - Vertex Shader
  - Fragment Shader
  - VFX
technology: UnityEngine
category: Shaders
---
