<template>
  <header class="page-header">
    <HeaderMainLayout />
  </header>
  <main class="page-content relative flex bg-dark">
    <aside class="hidden md:block">
      <AsideMainLayout class="w-200" />
    </aside>
    <article class="flex-grow">
      <PageContentMainLayout />
    </article>
  </main>
  <footer class="page-footer b-t bg-dark px-16 py-8">
    <PageFooter />
  </footer>
</template>

<script lang="ts" setup>
import AsideMainLayout from './AsideMainLayout.vue';
import HeaderMainLayout from './HeaderMainLayout.vue';
import PageContentMainLayout from './PageContentMainLayout.vue';
import PageFooter from './PageFooter.vue';
</script>

<style scoped lang="less">
@header-height: 6.4rem;
@footer-height: 8rem;
.page-header {
  height: @header-height;
  overflow: hidden;
}
.page-content {
  min-height: calc(100vh - @header-height);
}
.page-footer {
  height: @footer-height;
}
</style>
