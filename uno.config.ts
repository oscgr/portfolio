import { defineConfig, presetWebFonts, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({}),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: {
          name: 'Inter',
          weights: [300],
        },
      },
    }),

  ],
})
