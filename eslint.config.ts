import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
}, {
  settings: {
    'import/core-modules': ['vue-router/auto-routes'],
  },
})
