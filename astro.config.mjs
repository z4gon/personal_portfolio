import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://z4gon.github.io',
  integrations: [
    preact({
      compat: true, // render React components
    }),
  ],
})
