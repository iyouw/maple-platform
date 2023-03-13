<template>
  <div :class="bem()"></div>
</template>

<script setup lang="ts">
import { createSpaceP } from '@/utils/space';
const [bem] = createSpaceP(`app-detail`);
</script>

<style lang="scss" scoped>
.p{
  &-app-detail{
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
  }
}
</style>