<template>
  <div :class="bem()">
    <h-form :model="componentMeta" @submit="onSave">
      <h-form-item field="name" label="name" required>
        <h-input v-model="componentMeta.name" placeholder="please enter component name" />
      </h-form-item>
      <h-form-item field="icon" label="icon">
        <h-upload></h-upload>
      </h-form-item>
      <h-form-item field="tag" label="tag" required>
        <h-input v-model="componentMeta.tag" placeholder="please enter component tag" />
      </h-form-item>
      <h-form-item field="slots" label="slots">
        <h-input v-model="componentMeta.slots" placeholder="please enter component slots,separate by comma" />
      </h-form-item>
      <h-form-item field="description" label="description">
        <h-input v-model="componentMeta.description" placeholder="please enter component description" />
      </h-form-item>
      <m-prop-meta-editor :propMetas="componentMeta.propMetas" class="h-m-t-30 h-m-b-35"/>
      <div class="h-f-c-c">
        <h-button html-type="submit" type="primary" size="large" class="h-w-250">保存</h-button>
      </div>
    </h-form>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { createSpaceP } from '@/utils/space'; 
import { onMounted, ref } from 'vue';
import { Message } from '@linker-design/linker';
import { ComponentMeta } from '@/core/view/component-meta';
import { ComponentMetaApi } from '@/api/component-meta-api';

const [ bem ] = createSpaceP('component-meta') 

const route = useRoute();
const componentMetaId = route.params.id as string;

const componentMeta  = ref<ComponentMeta>(ComponentMeta.Create());

const initAsync = async () => {
  if (!componentMetaId) return;
  const resp = await ComponentMetaApi.Detail(componentMetaId);
  componentMeta.value.fromEntity(resp);
}

const onSave = async (res: any)=> {
  if (res.errors || componentMeta.value.hasError) return;
  await ComponentMetaApi.CreateOrUpdate(componentMeta.value);
  Message.success('保存成功');
  await initAsync();
}

onMounted(() => {
  initAsync();
})

</script>

<style lang="scss" scoped>
.p{
  &-component-meta{
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>