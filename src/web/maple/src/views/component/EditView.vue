<template>
  <div :class="bem()">
    <h-space direction="vertical" fill>
      <h-form :model="component">
        <h-form-item field="name" label="name">
          <h-input v-model="component.name" placeholder="please enter component name" />
        </h-form-item>
        <h-form-item field="icon" label="icon">
          <h-upload></h-upload>
        </h-form-item>
        <h-form-item field="tag" label="tag">
          <h-input v-model="component.tag" placeholder="please enter component tag" />
        </h-form-item>
        <h-form-item field="description" label="description">
          <h-input v-model="component.description" placeholder="please enter component description" />
        </h-form-item>
        <h-form-item field="slots" label="slots">
          <h-input-tag v-model="component.slots" placeholder="please enter component description" />
        </h-form-item>
        <h-card title="PropMetas">
          <m-prop-meta-editor v-for="propMeta in component.propMetas" :item="propMeta" :key="propMeta.name" />
        </h-card>
      </h-form>
    </h-space>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { createSpaceP } from '@/utils/space'; 
import { onMounted, ref } from 'vue';
import { ComponentMeta } from '@/core/component-meta';
import { ComponentMetaApi } from '@/api/component-meta';

const [ bem ] = createSpaceP('component-meta') 

const route = useRoute();

const componentId = route.params.id as string;

const component = ref<ComponentMeta>(new ComponentMeta());

const getComponent = async () => {
  if (!componentId) return;
  const comp = await ComponentMetaApi.Detail(componentId);
  component.value = comp;
}

onMounted(() => {
  getComponent();
})

</script>
<style lang="less" scoped>
.p{
  &-component-meta{
    width: 1200px;
    margin: 0 auto;
  }

  &__prop-metas{

  }
}
</style>