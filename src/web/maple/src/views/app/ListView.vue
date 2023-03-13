<template>
  <div :class="bem()">
    app list
  </div>
</template>

<script setup lang="ts">
import { createSpaceP } from '@/utils/space';
const [bem] = createSpaceP(`app-list`);
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