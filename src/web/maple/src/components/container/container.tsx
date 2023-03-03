import  { computed, defineComponent, ref } from "vue";

import { createSpaceM } from "@/utils/space";

const [ bem, name ] = createSpaceM(`container`)

export default defineComponent({
  name,
  setup(_,{ slots, emit }){
    const left = ref<number>(0);
    const top = ref<number>(0);

    const selected = ref<boolean>(false);
    const moving = ref<boolean>(false);

    const style = computed(() => {
      return {
        left: `${left.value}px`,
        top: `${top.value}px`
      };
    });

    const cls = computed(()=> bem({
      selected: selected.value,
      drag: moving.value
    }));

    const onMouseDown = (e: MouseEvent) => {
      const startTime = e.timeStamp;
      const startX = e.pageX - left.value;
      const startY = e.pageY - top.value;

      const onMouseMove = (e: MouseEvent) => {
        if (!moving.value) moving.value = true;
        left.value =  e.pageX - startX;
        top.value = e.pageY - startY;
      }

      const onMouseUp = (e: MouseEvent) => {
        document.removeEventListener(`mousemove`, onMouseMove);
        document.removeEventListener(`mouseup`, onMouseUp);
        
        moving.value = false;
        const duration = e.timeStamp - startTime;
        if (duration > 200) return;
        selected.value = !selected.value;
        emit(`component-selected`);
      }

      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`mouseup`, onMouseUp);
    }

    return () => (
      <div class={ cls.value } style={ style.value } onMousedown={ onMouseDown }>
        { slots.default?.() }
      </div>
    )
  }
})