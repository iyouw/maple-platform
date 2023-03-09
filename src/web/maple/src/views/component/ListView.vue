<template>
  <div :class="bem()">
    <div :class="bem('search')">
    </div>
    <div :class="bem('list')">
      <div class="h-m-b-15">
        <h-button type="primary" size="medium" @click="onAddComponent">
          <template #icon>
            <icon-plus />
          </template>
          add
        </h-button>
      </div>
      <h-table :columns="columns" :data="data">
        <template #action="{ record }">
          <h-space>
            <h-button type="text" size="small" @click="()=>onEditComponentMeta(record)">modify</h-button>
            <h-button type="text" size="small">delete</h-button>
          </h-space>
        </template>
      </h-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ComponentMeta } from '@/core/component-meta';
import { createSpaceP } from '@/utils/space';
import { onMounted, ref } from 'vue';
import { ComponentMetaApi } from '@/api/component-meta';
import { useRouter } from 'vue-router';

const [ bem ] = createSpaceP('component-meta-list'); 

const columns = [
  {
    title: "name",
    dataIndex: "name",
  },
  {
    title:"tag",
    dataIndex: "tag"
  },
  {
    title: "slots",
    dataIndex: "slots"
  },
  {
    title:"action",
    slotName: "action"
  }
];

const data = ref<Array<ComponentMeta>>();

const getComponentList = async () => {
  const res = await ComponentMetaApi.List();
  data.value = res;
}

const router = useRouter();

const onAddComponent = () => {
  router.push("/component/add");
}

const onEditComponentMeta = (componentMeta:ComponentMeta) => {
  router.push(`/component/edit/${componentMeta.id}`)
}

onMounted(()=>{
  getComponentList();
})

</script>
<style lang="less" scoped>
.p{
  &-component-meta-list{
    width: 1200px;
    margin: 0 auto;

    &__search{
      min-height: 200px;
    }

    &__list {

    }
  }
}
</style>