import { ComponentMetaApi } from "@/api/component-meta-api";
import { ComponentMeta } from "@/core/view/component-meta";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useComponentMetaStore = defineStore('component-meta',() => {
  const componentMeta = ref<ComponentMeta>(ComponentMeta.Create());

  const initAsync = async (id?: string) => {
    let init = ComponentMeta.Create();
    if (id) {
      const resp = await ComponentMetaApi.Detail(id);
      init = ComponentMeta.FromEntity(resp);
    }
    componentMeta.value = init;
  }

  const saveAsync =  () => {
    if (componentMeta.value.id){
      return ComponentMetaApi.Update(componentMeta.value);
    } else {
      return ComponentMetaApi.Add(componentMeta.value);
    }
  };

  return {
    componentMeta,
    initAsync,
    saveAsync
  }
})