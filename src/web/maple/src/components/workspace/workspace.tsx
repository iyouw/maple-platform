import { createSpaceM } from "@/utils/space";
import { defineComponent } from "vue";

const [bem, name] = createSpaceM(`workspace`);

export default defineComponent({
  name,
  setup(_, { slots }){
    return () => (
      <div class={bem()}>
        <div class={bem(`left`)}>
          { slots.left?.() }
        </div>
        <div class={bem(`middle`)}>
          { slots.default?.() }
        </div>
        <div class={bem(`right`)}>
          { slots.right?.() }
        </div>
      </div>
    )
  }
})