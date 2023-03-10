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
      <m-prop-meta-editor class="h-m-t-30 h-m-b-35"/>
      <div class="h-f-c-c">
        <h-button html-type="submit" type="primary" size="large" class="h-w-250">保存</h-button>
      </div>
    </h-form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { createSpaceP } from '@/utils/space'; 
import { onMounted } from 'vue';
import { useComponentMetaStore } from '@/stores/component-meta';
import { storeToRefs } from 'pinia';
import { Message } from '@linker-design/linker';

const [ bem ] = createSpaceP('component-meta') 

const route = useRoute();
const componentId = route.params.id as string;

const componentMetaStore = useComponentMetaStore();
const { componentMeta } = storeToRefs(componentMetaStore);
const { initAsync, saveAsync } = componentMetaStore;

const router = useRouter();

const onSave = async (res: any)=> {
  if(res.errors || componentMeta.value.hasError) return;
  await saveAsync();
  Message.success('保存成功');
  router.push('/component-meta');
}

onMounted(() => {
  initAsync(componentId);
})

</script>

<style lang="less" scoped>
.p{
  &-component-meta{
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>