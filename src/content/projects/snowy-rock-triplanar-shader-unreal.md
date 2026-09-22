---
date: '2022-11-01T00:00:00.000Z'
priority: -2
videosNames:
  - 1.mp4
imagesNames:
  - 24.jpg
  - 23.jpg
  - 22.jpg
  - 18.jpg
  - 17.jpg
  - 16.jpg
  - 15.jpg
  - 14.jpg
  - 13.jpg
  - 12.jpg
  - 11.jpg
  - 9.jpg
  - 25.jpg
  - 3.jpg
  - 1.jpg
youtubeVideoIds:
  - fqMgDGAgQY8
title: Snowy Rock Shader
subtitle: Implemented with Triplanar Projection and Normals Orientation in Unreal Engine
implementationDetails:
  - Modeling a Canyon and Rocks in Blender.
  - Importing FBX Static Meshes in Unreal Engine.
  - Setting up the Scene in Unreal Engine.
  - Directional Light, Exponential Height Fog, Sky Atmosphere and Sky Light.
  - Post Processing Volume to tweak down the Auto Exposure limits.
  - Implementing a basic material using Base Color, Roughness, Normal,
    Displacement and Ambient Occlusion.
  - Triplanar Projection using two channels at a time from the current Vertex
    Normal.
  - Blending Triplanar Projections by masking with the Absolute Magnitude of the
    corresponding Normal Coordinate.
  - Material Function to extract the Sub Graph for the Triplanar Projection, to
    reuse in the rest of the textures of the Material.
  - Material Instances to have different instances of Rocks, using the same base
    Material.
  - Subsurface Scattering Material for the Snow.
  - Using the Make Material Attributes Node to output whole Material attributes
    from the Material Functions for Rock and Snow.
  - Masking the Snow using a Texture and Normal Orientation, to just render snow
    on the top of the meshes.
  - Height Lerp to make the mask more natural.
  - Blend Material Attributes to blend whole material attributes given the
    current mask value between Rock and Snow.
tags:
  - Shader
  - Material
  - Unreal Engine
technology: UnrealEngine
category: Shaders
---
