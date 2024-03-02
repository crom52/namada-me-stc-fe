<template>
  <ADrawer
    :width="300"
    placement="left"
    :open="open"
    :closable="false"
    :bodyStyle="{ padding: '1.2rem 0' }"
    @close="$emit('update:open', false)"
  >
    <AsideMainLayout @select="$emit('update:open', false)" />
  </ADrawer>
</template>

<script lang="ts" setup>
import AsideMainLayout from './AsideMainLayout.vue';

defineProps<{
  open: boolean;
}>();

defineEmits<{
  'update:open': [v: boolean];
}>();
</script>
