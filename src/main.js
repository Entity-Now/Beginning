import { createSSRApp } from 'vue'
import App from './App.vue'
import { _createRouter } from './router'
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const router  = _createRouter();
  app.use(router);
  return { app, router }
}
