<template>
  <div :class="bem()">
    <div :class="bem('search')">
    </div>
    <div :class="bem('list')">
      <div class="h-m-b-15">
        <h-button type="primary" size="medium" @click="onAddComponentMeta">
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
            <h-button type="text" size="small" @click="()=>onDeleteComponentMeta(record)">delete</h-button>
          </h-space>
        </template>
      </h-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ComponentMeta } from '@/core/view/component-meta';
import { createSpaceP } from '@/utils/space';
import { onMounted, ref } from 'vue';
import { ComponentMetaApi } from '@/api/component-meta-api';
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

const data = ref<Array<ComponentMeta>>([]);

const getComponentMetaList = async () => {
  const entities = await ComponentMetaApi.List();
  data.value = ComponentMeta.FromEntityList(entities);
}

const router = useRouter();

const onAddComponentMeta = () => {
  router.push("/component-meta/add");
}

const onEditComponentMeta = (componentMeta:ComponentMeta) => {
  router.push(`/component-meta/edit/${componentMeta.id}`)
}

const onDeleteComponentMeta = async (componentMeta: ComponentMeta) => {
  await ComponentMetaApi.Delete(componentMeta.id);
  await getComponentMetaList();
}

onMounted(()=>{
  getComponentMetaList();
})

</script>
<style lang="scss" scoped>
.p{
  &-component-meta-list{
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;

    &__search{
      min-height: 200px;
    }

    &__list {

    }
  }
}
</style>