---
date: '2022-10-01T00:00:00.000Z'
gitHubUrl: https://github.com/z4gon/gamedev/tree/main/mesh-deformation-compute-shader-unity
thumbnailUrl: /res/projects/mesh-deformation-compute-shader-unity/thumbnail.mp4
metaImageUrl: /res/projects/mesh-deformation-compute-shader-unity/thumbnail.gif
heroVideoUrl: /res/projects/mesh-deformation-compute-shader-unity/1.mp4
title: Mesh deformation Compute Shader
subtitle: Written in HLSL, for the Built-in RP in Unity
details:
  - Extracting vertices and normals information from a Mesh.
  - Using Compute Buffers to store the vertices position and normal information.
  - Setting the Compute Buffer to Compute Shader and the Material.
  - ComputeBufferType.IndirectArguments for the arguments compute buffer.
  - Dispatching the Compute Shader with thread groups count equal to the total
    vertices count.
  - Using Graphics.DrawMeshInstancedIndirect to draw the mesh using GPU
    instancing.
  - Lerping the position and normal of vertices in a compute shader with
    [numthreads(1,1,1)].
  - 'Accessing the GPU instancing data using uint vertex_id: SV_VERTEXID, uint
    instance_id: SV_INSTANCEID.'
tags:
  - Compute Shader
  - HLSL
  - Built-in RP
  - Unity
technology: UnityEngine
category: Compute Shaders
---
