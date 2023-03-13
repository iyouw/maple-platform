import { createSpaceM } from "@/utils/space";
import { defineComponent, toRefs } from "vue";

const [ bem, name ] = createSpaceM('style-board');

export default defineComponent({
  name,
  props:{
    styleData: {
      required: true,
      type: Object
    }
  },
  setup(props) {
    const { styleData } = toRefs(props);
    return () => (
      <div class={bem()}>

      </div>
    )
  }
})