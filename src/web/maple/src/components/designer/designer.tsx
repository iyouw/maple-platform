import type { Component } from "@/core/component";
import { Page } from "@/core/page";
import { defineComponent, resolveComponent } from "vue";

import { createSpaceM } from "@/utils/space";

const [bem, name] = createSpaceM(`designer`);

export default defineComponent({
  name,
  props: {
    page: Page
  },
  setup(props) {
    const renderComponents = (components: Array<Component>) => components.map(component => renderComponent(component));

    const renderComponent = (component: Component) => {
      const { tag } = component.meta;
      const comp = resolveComponent(tag);
      const { props = {}, style = {} } = component;
      return (
        <m-container>
          <comp {...props } style={ style }>
            { renderComponents(component.children) }
          </comp> 
        </m-container>
      ) 
    }

    return () => (
      <div class={ bem() }>
        {renderComponents(props.page?.components ?? [])}
      </div>
    );
  }
})