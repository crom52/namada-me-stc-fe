<template>
  <div class="p-32 flex-btw-center">
    <div class="md:hidden block">
      <i class="i-mingcute:menu-fill block text-30" @click="isOpen = true" />
      <CollapsedMenu v-model:open="isOpen" />
    </div>

    <ul class="flex-center gap-8">
      <NamadaLogoSvg />
    </ul>

    <ul class="flex-center gap-8">
      <li class="hidden md:block">
        <i class="i-lets-icons:setting-fill inline-block text-30" />
      </li>
      <li>
        <ASwitch
          :checked="isDark"
          checkedChildren="Dark"
          unCheckedChildren="Light"
          @update:checked="toggleDark()"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import CollapsedMenu from './CollapsedMenu.vue';

const isOpen = ref<boolean>(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
