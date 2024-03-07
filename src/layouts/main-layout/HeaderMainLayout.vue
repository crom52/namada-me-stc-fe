<template>
  <div class="flex-btw-center b-b b-b-abd px-8 py-16">
    <div class="block md:hidden">
      <i
        class="i-mingcute:menu-fill block text-30"
        @click="isOpen = true"
      />
      <CollapsedMenu v-model:open="isOpen" />
    </div>

    <ul class="flex-center gap-16">
      <img
        class="h-35"
        src="../../assets//images/namada-header-logo.png"
        alt="logo"
      >
      <img
        class="w-220"
        src="../../assets//images/namada-yellow-animation-logo.gif"
        alt="logo-animated"
      >
    </ul>

    <ul class="flex-center gap-8">
      <li class="hidden md:block">
        <i class="i-lets-icons:setting-fill inline-block text-30" />
      </li>
      <!-- <li>
        <ASwitch
          v-model:checked="darkMode"
          checkedChildren="Dark"
          unCheckedChildren="Light"
          @change="onUpdateChecked()"
        />
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import CollapsedMenu from './CollapsedMenu.vue';
import { sleep } from '@/utils/common.util';

const isOpen = ref<boolean>(false);

const isDark = useDark();
const darkMode = ref(isDark.value);

const toggleDark = useToggle(isDark);

const onUpdateChecked = async () => {
  await sleep(180);
  toggleDark();
};
</script>
