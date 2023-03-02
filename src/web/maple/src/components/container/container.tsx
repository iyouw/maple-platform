import  { defineComponent } from "vue";

export default defineComponent({
  name: `container`,
  setup(_,{ slots }){
    return () => (
      <div class="m-container" draggable="true">
        { slots.default?.() }
      </div>
    )
  }
})