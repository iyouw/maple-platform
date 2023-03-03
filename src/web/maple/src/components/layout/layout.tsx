import { createSpaceM } from "@/utils/space";
import { defineComponent } from "vue";

const [bem, name] = createSpaceM(`layout`);

export default defineComponent({
  name,
  setup(_, { slots }){
    return () => (
      <div class={ bem() }>
        <div class={ bem(`header`)}></div>
        <div class={ bem(`body`)}>
          { slots.default?.() }
        </div>
      </div>
    )
  }
})