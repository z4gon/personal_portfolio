---
date: '2022-11-01T00:00:00.000Z'
priority: -3
videosNames:
  - 1.mp4
  - 2.mp4
imagesNames:
  - 21.jpg
  - 20.jpg
  - 16.jpg
  - 15.jpg
  - 14.jpg
  - 13.jpg
  - 12.jpg
  - 11.jpg
  - 10.jpg
  - 9.jpg
  - 7.jpg
  - 6.jpg
  - 5.jpg
  - 4.jpg
youtubeVideoIds:
  - yD-qgkpHubs
title: Sci-Fi Shield Shader
subtitle: Polyhedral sci-fi shield Shader implemented with HLSL/ShaderGraph and
  VFX Graph for the URP in Unity
implementationDetails:
  - Modeling the 3D Mesh in Blender and UV Mapping overlapped faces.
  - Creating Textures in Affinity Photo.
  - Integrating the Spaceship Asset from the Assets Store into the Project.
  - Implementing the same Shader with pure HLSL and also with Shader Graph.
  - Displacing vertices along the normal in Object Space.
  - Animating the displacement with the sinusoidal function of _Time.
  - Using Perlin Noise to pseudo randomize the different displacements of the
    faces.
  - Implementing the Fresnel effect by doing the dot product between the view
    direction and the normal, in world space.
  - Using the VFACE Semantics to determine if the face is facing the camera.
  - Defining a color for the inner faces of the shield, and a color for the
    Fresnel effect.
  - Parametrizing the two colors of the shield, and also the Fresnel power.
  - Parametrizing the displacement amount, and the animation speed for the
    displacement.
  - Implementing the same Shader using Shader Graph, with support for VFX Graph.
  - Custom Function Node to implement the custom Perlin Noise.
  - Simple Animations for the scene objects.
  - VFX Graph object to animate the fade in and fade out of the shield.
tags:
  - HLSL
  - Shader Graph
  - URP
  - VFX
  - VFX Graph
technology: UnityEngine
category: Shaders
---
