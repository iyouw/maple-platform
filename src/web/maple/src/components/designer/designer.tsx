import type { Component } from "@/core/view/component";
import { Page } from "@/core/view/page";
import { defineComponent, resolveComponent, toRefs } from "vue";

import { createSpaceM } from "@/utils/space";

const [bem, name] = createSpaceM(`designer`);

export default defineComponent({
  name,
  props: {
    page: {
      required: true,
      type: Page
    }
  },
  setup(props) {
    const { page } = toRefs(props);

    const renderComponents = (components: Array<Component>) => components.map(component => renderComponent(component));

    const renderComponent = (component: Component) => {
      const { tag } = component.meta;
      const comp = resolveComponent(tag);
      const { propData = {}, styleData = {} } = component;
      return (
        <m-container>
          <comp {...propData } style={ styleData }>
            { renderComponents(component.children) }
          </comp> 
        </m-container>
      ) 
    }

    return () => (
      <div class={ bem() }>
        {renderComponents(page.value.components)}
      </div>
    );
  }
})