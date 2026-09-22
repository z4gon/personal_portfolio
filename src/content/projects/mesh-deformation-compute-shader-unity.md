---
date: '2022-10-01T00:00:00.000Z'
heroVideoName: 1.mp4
title: Mesh deformation Compute Shader
subtitle: Written in HLSL, for the Built-in RP in Unity
implementationDetails:
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
