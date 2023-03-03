import type { App } from "vue"

import { dragMoveDirect } from './drag-move';

export const useDirectives = (app: App) => {
  app.directive(dragMoveDirect.name, dragMoveDirect.direct)
}