---
date: '2022-10-01T00:00:00.000Z'
videosNames:
  - 20.mp4
  - 19.mp4
  - 17.mp4
  - 16b.mp4
  - 15.mp4
  - 14.mp4
  - 13.mp4
  - 12.mp4
  - 11b.mp4
  - 10.mp4
  - 9.mp4
  - 8c.mp4
  - 7.mp4
  - 6b.mp4
  - 4.mp4
youtubeVideoIds:
  - PWh5ksoYrLM
title: Cg Shaping Shaders
subtitle: Written in Cg with ShaderLab, for the Built-in RP in Unity
implementationDetails:
  - Creating simple Unlit Shaders in the Built-in RP in Unity.
  - Using the uniform _Time to define sinusoidal functions.
  - ShaderLab to link the Cg program with the Unity Editor, to expose properties
    to use in the Shader.
  - Defining the Vertex Shader and Fragment Shader functions.
  - Working with interpolated custom data coming from the Vertex Shader Stage.
  - Working with UVs and Object Position coordinates.
  - Using Step, Smoothstep, Saturate and Clamp, from the stdlib in Cg.
  - Implementing shaping functions to test if a pixel belongs to a circle,
    rectangle or polygon.
  - Matrices for Rotation and Scaling, multiplication of matrices and vectors
    for transformation of coordinates.
  - Tracking of the Mouse pointer, then feeding it into the Material, for later
    use in the Cg program code in the Shader.
  - Tiling of the UVs coordinates.
  - Drawing lines using equations such as y = x, y = sin(x).
  - Implementing a SONAR hud with shaping functions, using the vector dot scalar
    multiplication to calculate the magnitude of the projection of a vector onto
    a second vector.
  - SONAR gradient using atan2 and angles subtraction to measure the angle in
    radians from the SONAR line.
  - Using Cg semantics for compatibility with different GPU hardware.
tags:
  - Cg
  - Built-in RP
  - ShaderLab
  - Unity
  - Vertex Shader
  - Fragment Shader
technology: UnityEngine
category: Shaders
---
