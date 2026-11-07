# Personal Portfolio

A portfolio of projects + a blog.
Implemented with `Astro` + `Preact`.

## Prerequisites

- Node.js 25.x (see `.nvmrc`); run `nvm use` to pick it up.
- Git LFS, for media resources in `public/res/`. Install before cloning, on macOS:
  ```sh
  # binary
  brew install git-lfs
  # git hooks
  git lfs install
  ```
  LFS assets download automatically on clone. If missing, run `git lfs pull`.

## Setup

```sh
# deterministic install from package-lock.json
npm ci
npm run dev
```

Use `npm install` instead of `npm ci` only when adding or upgrading dependencies.

### Astro telemetry

To disable astro telemetry when working locally, do:

```sh
npm exec -- astro telemetry disable
```
