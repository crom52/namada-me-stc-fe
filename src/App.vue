<template>
  <AConfigProvider
    :locale="viVN"
    :theme="seedTokenGlobalConfig"
  >
    <RouterView #="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </AConfigProvider>
</template>

<script setup lang="ts">
import viVN from 'ant-design-vue/es/locale/vi_VN';
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

const seedTokenGlobalConfig: ThemeConfig = {
  token: {
    // colorPrimary: '#ffff00',
  },
};
</script>
