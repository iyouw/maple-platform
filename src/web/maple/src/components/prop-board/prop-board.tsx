import { ComponentMeta } from "@/core/view/component-meta";
import { createSpaceM } from "@/utils/space";
import { toRefs, defineComponent } from "vue";

const [bem, name] = createSpaceM('prop-board');

export default defineComponent({
  name,
  props:{
    componentMeta: {
      required: true,
      type: ComponentMeta
    },
    propData: {
      required: true,
      type: Object
    }
  },
  setup(props){
    const { componentMeta, propData } = toRefs(props);
    return () => (
      <div class={bem()}>

      </div>
    )
  }
})