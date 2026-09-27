---
date: '2022-11-01T00:00:00.000Z'
gitHubUrl: https://github.com/z4gon/gamedev/tree/main/character-skin-transition-shader-unity
thumbnailUrl: /res/projects/character-skin-transition-shader-unity/thumbnail.mp4
metaImageUrl: /res/projects/character-skin-transition-shader-unity/thumbnail.gif
priority: -2
videosUrls:
  - /res/projects/character-skin-transition-shader-unity/12.mp4
imagesUrls:
  - /res/projects/character-skin-transition-shader-unity/11.jpg
  - /res/projects/character-skin-transition-shader-unity/10.jpg
  - /res/projects/character-skin-transition-shader-unity/9.jpg
  - /res/projects/character-skin-transition-shader-unity/8.jpg
  - /res/projects/character-skin-transition-shader-unity/7.jpg
  - /res/projects/character-skin-transition-shader-unity/6.jpg
  - /res/projects/character-skin-transition-shader-unity/5.jpg
  - /res/projects/character-skin-transition-shader-unity/4.jpg
  - /res/projects/character-skin-transition-shader-unity/3.jpg
  - /res/projects/character-skin-transition-shader-unity/2.jpg
  - /res/projects/character-skin-transition-shader-unity/1.jpg
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
