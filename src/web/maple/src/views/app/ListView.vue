<template>
  <div :class="bem()">
    <h-table :columns="columns" :data="apps">
      <template #action="{record}">
        <h-space>
          <h-button type="text" @click="()=>onModify(record)">modify</h-button>
          <h-button type="text" @click="()=>onDelete(record)">delete</h-button>
        </h-space>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import { createSpaceP } from '@/utils/space';
import { ref } from 'vue';
import type { App } from '@/core/view/app';

const [bem] = createSpaceP(`app-list`);

const apps = ref<Array<App>>([]);

const columns = [
  {
    name: 'name',
    dataIndex: 'name'
  },
  {
    name:'action',
    slotName:'action'
  }
]

const onModify = (app: App) => {

}

const onDelete = (app: App) => {
  
}

</script>

<style lang="scss" scoped>
.p{
  &-app-list{
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>