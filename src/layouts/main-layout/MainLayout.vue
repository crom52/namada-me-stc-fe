<template>
  <header>
    <HeaderMainLayout />
  </header>
  <main class="flex">
    <aside class="hidden md:block">
      <AsideMainLayout class="w-200" />
    </aside>
    <article class="flex-grow">
      <PageContentMainLayout />
    </article>
  </main>
</template>

<script lang="ts" setup>
import AsideMainLayout from './AsideMainLayout.vue';
import HeaderMainLayout from './HeaderMainLayout.vue';
import PageContentMainLayout from './PageContentMainLayout.vue';
</script>

<style scoped lang="less"></style>
