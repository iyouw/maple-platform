<template>
  <designer :page="p"/>
</template>
<script setup lang="ts">
import Designer from '@/components/designer';
import { Page } from '@/core/page';
import { ComponentMeta } from '@/core/component-meta';
import { Component } from '@/core/component';
import { ref } from 'vue';

const p = ref<Page>();

const page = new Page(`TestPage`, `IconUrl`, 800, 600)
let meta = new ComponentMeta(`card`, `h-card`);
let component = new Component(meta, { title: `Hello Maple` });
page.add(component);

p.value = page;

</script>
