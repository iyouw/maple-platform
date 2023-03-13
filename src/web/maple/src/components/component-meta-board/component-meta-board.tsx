import type { ComponentMeta } from "@/core/view/component-meta";
import { createSpaceM } from "@/utils/space";
import { defineComponent, toRefs } from "vue";

const [ bem, name ] = createSpaceM(`component-meta-board`);

export default defineComponent({
  name,
  props:{
    componentMetas: {
      type: Array<ComponentMeta>,
      default: () => []
    }
  },
  setup(props) {
    const { componentMetas } = toRefs(props);
    return () => (
      <div class={bem()}>

      </div>
    )
  }
})