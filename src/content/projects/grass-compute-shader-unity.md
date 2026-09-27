---
date: '2022-10-01T00:00:00.000Z'
gitHubUrl: https://github.com/z4gon/gamedev/tree/main/grass-compute-shader-unity
thumbnailUrl: /res/projects/grass-compute-shader-unity/thumbnail.mp4
metaImageUrl: /res/projects/grass-compute-shader-unity/thumbnail.gif
priority: -5
videosUrls:
  - /res/projects/grass-compute-shader-unity/11.mp4
  - /res/projects/grass-compute-shader-unity/10.mp4
  - /res/projects/grass-compute-shader-unity/12b.mp4
  - /res/projects/grass-compute-shader-unity/12a.mp4
  - /res/projects/grass-compute-shader-unity/9.mp4
  - /res/projects/grass-compute-shader-unity/8.mp4
  - /res/projects/grass-compute-shader-unity/7b.mp4
  - /res/projects/grass-compute-shader-unity/7a.mp4
  - /res/projects/grass-compute-shader-unity/6.mp4
  - /res/projects/grass-compute-shader-unity/5.mp4
  - /res/projects/grass-compute-shader-unity/4.mp4
  - /res/projects/grass-compute-shader-unity/3.mp4
  - /res/projects/grass-compute-shader-unity/2.mp4
  - /res/projects/grass-compute-shader-unity/1.mp4
imagesUrls:
  - /res/projects/grass-compute-shader-unity/blade.jpg
youtubeVideoIds:
  - dsd_pxnuODE
title: Grass Compute Shader
subtitle: Procedural Grass System with Compute Shaders in Unity
implementationDetails:
  - Building a procedural mesh for the Grass Blades, setting vertices, normals
    and indices.
  - Placing randomly generated grass blades given an extent and a density.
  - Raycasting over the terrain to place grass following the uneven surface.
  - Sharing a compute buffer with the grass blades data between the compute
    shader and the material.
  - Using GPU Instancing to render all the grass blades.
  - Parametrizing the wind direction, wind velocity and wind force.
  - Parametrizing colors for young and old grass.
  - Using DrawMeshInstancedIndirect to draw procedurally all the meshes using
    GPU Instancing.
  - Perlin noise to calculate the amount of displacement each grass blade needs
    to have to simulate wind.
  - Using Translation and Rotation Matrices to position the vertices of the mesh
    in World Space and Clip Space.
  - Displacing the vertices of the grass blade proportionally to the UV Y
    coordinate, to make the base stay still.
  - Configuring the grass blades to cast shadows and receive shadows.
tags:
  - Compute Shader
  - HLSL
  - Built-in RP
  - Cg
  - Unity
technology: UnityEngine
category: Compute Shaders
---
