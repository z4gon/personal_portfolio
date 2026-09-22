---
date: '2022-11-01T00:00:00.000Z'
priority: -6
videosNames:
  - 1.mp4
  - 2.mp4
imagesNames:
  - 21.jpg
  - 20.jpg
  - 19.jpg
  - 18.jpg
  - 17.jpg
  - 16.jpg
  - 15.jpg
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
  - -5LGCh8JF5g
title: Black Hole VFX
subtitle: Implemented with Shader Graph, Shuriken Particle System and VFX Graph
  for the URP in Unity
implementationDetails:
  - Grabbing the pixels from the Color Buffer from the Opaque Texture using the
    Scene Color node.
  - Noise texture to distort the Screen Position and then use it to sample the
    Scene Color texture, generating an effect similar to a Heat distortion.
  - Twirl distortion and 2D rotation to make the Noise texture have a rotation
    twirl shape.
  - Implementing a basic Fresnel Shader to draw the core of the Black Hole.
  - Using HDR color and intensity to generate Glow effects, using the Bloom post
    processing effect.
  - Creating a twirl texture to add color to the twirl distortion effect.
  - Shuriken Particle System to spawn some additive twirl textures on the
    accretion disc.
  - VFX Graph to render small particles that rotate and collapse into the center
    of the black hole.
tags:
  - Shader Graph
  - VFX Graph
  - URP
  - VFX
  - Particle System
technology: UnityEngine
category: Visual Effects
---
