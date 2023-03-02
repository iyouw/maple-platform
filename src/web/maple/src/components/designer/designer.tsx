import type { Component } from "@/core/component";
import { Page } from "@/core/page";
import { defineComponent, resolveComponent } from "vue";

import Container from '../container';

export default defineComponent({
  name: `designer`,
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
        <Container>
          <comp {...props } style={ style }>
            { renderComponents(component.children) }
          </comp> 
        </Container>
      ) 
    }

    return () => (
      <div>
        {renderComponents(props.page?.components ?? [])}
      </div>
    );
  }
})