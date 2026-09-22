---
date: '2022-11-01T00:00:00.000Z'
priority: -2
videosNames:
  - 12.mp4
imagesNames:
  - 11.jpg
  - 10.jpg
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
  - zwd65lGYHDs
title: Character Skin Transition Shader
subtitle: Implemented with HLSL and ShaderGraph for the URP in Unity
implementationDetails:
  - Creating alternative textures in Affinity Photo.
  - Using Shader Graph to setup a Lit Shader Graph, to benefit from the Lighting
    Model to use Metallic, Smoothness and Emission.
  - Create a reusable Sub Graph in Shader Graph, to transition the Main Texture
    and the Emission Texture.
  - Custom Function node using an HLSL function to transition between two
    textures, given a threshold position and width.
  - Use HDR to be able to define intensity for the threshold band.
  - Post Processing Bloom effect to pick up the threshold band and generate a
    Glow effect.
  - Manual Fresnel effect in a custom Unlit Shader using Cg.
  - Fresnel achieved by doing the dot multiplication between the World Normal of
    the Fragment and the View Dir in World Space.
  - C# Script to pass the position of the Scanner object to the Material holding
    the Shader, so it can move the threshold up and down.
tags:
  - Shader Graph
  - ShaderLab
  - URP
  - Vertex Shader
  - Fragment Shader
technology: UnityEngine
category: Shaders
---
