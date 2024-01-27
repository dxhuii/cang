import antfu from '@antfu/eslint-config'
import dxhuii from '@dxhuii/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    unocss: true,
    formatters: true
  },
  nuxt,
  dxhuii()
)
