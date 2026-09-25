# Personal Portfolio

A portfolio of projects + a blog.
Implemented with `Astro` + `Preact`.

## Git LFS

This repo uses Git Large File Storage (LFS) for media resources in `public/res/`.
Install Git LFS before cloning. On macOS:

```sh
brew install git-lfs # binary
git lfs install # git hooks
```

LFS assets download automatically on clone. If missing, run `git lfs pull`.

## Astro

To disable astro telemetry when working locally, do:

```sh
npm exec -- astro telemetry disable
```
