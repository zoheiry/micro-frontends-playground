import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if we are in development mode and running as a standalone app (not exposed to the container)
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount }
