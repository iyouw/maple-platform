import { Component } from "@/core/view/component";
import { createSpaceM } from "@/utils/space";
import { defineComponent, toRefs } from "vue";

const [ bem, name ] = createSpaceM('component-data-board');

export default defineComponent({
  name,
  props: {
    component: {
      type: Component
    }
  },
  setup(props) {
    return () => (
      <div class={bem()}>

      </div>
    )
  }
})