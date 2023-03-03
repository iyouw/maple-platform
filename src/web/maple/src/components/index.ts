import type { App, Component } from 'vue';
import { withInstall } from '@/utils/install';

const modules = import.meta.glob<{ default: Component}>('./**/index.ts', {
  eager: true
});

export const useComponents = (app: App,) => {
  for (const key in modules) {
    const component = withInstall(modules[key].default);
    app.use(component);
  }
}

