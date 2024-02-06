<template>
  <div class="py-16 px-8 flex-btw-center b-b  b-b-abd">
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
          v-model:checked="darkMode"
          checkedChildren="Dark"
          unCheckedChildren="Light"
          @change="onUpdateChecked()"
        />
      </li>
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
