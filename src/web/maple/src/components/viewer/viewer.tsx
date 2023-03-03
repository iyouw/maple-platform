import { defineComponent } from 'vue';
import { createSpaceM } from '@/utils/space';

const [bem, name] = createSpaceM(`viewer`);

export default defineComponent({
  name,
  setup(){
    return () => (
      <div class={bem()}>

      </div>
    )
  }
})