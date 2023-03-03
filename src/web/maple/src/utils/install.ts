
import type { App, Component } from "vue";

export const withInstall = (component: Component) => {
  return Object.assign(component, {
    install: (app: App) => {
      app.component(component.name!, component);
    }
  });
}