---
date: '2022-11-01T00:00:00.000Z'
gitHubUrl: https://github.com/z4gon/gamedev/tree/main/black-hole-vfx-unity
thumbnailUrl: /res/projects/black-hole-vfx-unity/thumbnail.mp4
metaImageUrl: /res/projects/black-hole-vfx-unity/thumbnail.gif
priority: -6
videosUrls:
  - /res/projects/black-hole-vfx-unity/1.mp4
  - /res/projects/black-hole-vfx-unity/2.mp4
imagesUrls:
  - /res/projects/black-hole-vfx-unity/21.jpg
  - /res/projects/black-hole-vfx-unity/20.jpg
  - /res/projects/black-hole-vfx-unity/19.jpg
  - /res/projects/black-hole-vfx-unity/18.jpg
  - /res/projects/black-hole-vfx-unity/17.jpg
  - /res/projects/black-hole-vfx-unity/16.jpg
  - /res/projects/black-hole-vfx-unity/15.jpg
  - /res/projects/black-hole-vfx-unity/10.jpg
  - /res/projects/black-hole-vfx-unity/9.jpg
  - /res/projects/black-hole-vfx-unity/8.jpg
  - /res/projects/black-hole-vfx-unity/7.jpg
  - /res/projects/black-hole-vfx-unity/6.jpg
  - /res/projects/black-hole-vfx-unity/5.jpg
  - /res/projects/black-hole-vfx-unity/4.jpg
  - /res/projects/black-hole-vfx-unity/3.jpg
  - /res/projects/black-hole-vfx-unity/2.jpg
  - /res/projects/black-hole-vfx-unity/1.jpg
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
