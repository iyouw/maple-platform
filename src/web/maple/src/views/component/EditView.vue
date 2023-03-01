<template>
  <div> {{ isEdit ? `edit` : `add`}} component</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const isEdit = !!route.params.id;
</script>