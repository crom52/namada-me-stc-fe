<template>
  <header>
    <HeaderMainLayout />
  </header>
  <main>
    <PageContentMainLayout />
  </main>
</template>

<script lang="ts" setup>
import HeaderMainLayout from '../main-layout/HeaderMainLayout.vue';
import PageContentMainLayout from '../main-layout/PageContentMainLayout.vue';
</script>

<style scoped lang="scss">
.page-padding {
  @apply p-32
}
</style>
