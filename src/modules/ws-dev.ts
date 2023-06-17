import { defineNuxtModule } from '@nuxt/kit'

function getCodespaceHostname() {
  const codespaceName = process.env.CODESPACE_NAME
  if (!codespaceName) {
    return null
  }
  return `${codespaceName}-4000.preview-app.github.dev`
}

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('nitro:init', async () => {
      const codespaceHostname = getCodespaceHostname()
      if (!codespaceHostname) {
        return
      }
      nuxt.options.runtimeConfig.public.content.wsUrl = `wss://${codespaceHostname}/ws`
    })
  },
})
