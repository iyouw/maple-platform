<template>
  <m-workspace>
    <template #left>
      <m-component-meta-board :component-metas="componentMetas"/>
    </template>
    <m-designer :page="page"/>
    <template #right>
      <m-component-data-board  />
    </template>
  </m-workspace>
</template>
<script setup lang="ts">

import { Page } from '@/core/view/page';
import type { ComponentMeta } from '@/core/view/component-meta';
import { onMounted, ref } from 'vue';

const componentMetas = ref<Array<ComponentMeta>>([]);
const page = ref<Page>(Page.Create());


const initComponentMetas = async () => {

}

const initPage = async () => {

}

const initAsync = () => {
  Promise.all([
    initComponentMetas(),
    initPage()
  ]);
}

onMounted(() => {
  initAsync();
})
</script>
