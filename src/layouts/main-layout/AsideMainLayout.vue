<template>
  <AMenu
    :selectedKeys="selectedMenuItem"
    :theme="isDark ? 'dark' : undefined"
    :items="menuItems"
    class="h-full"
    @update:selectedKeys="handleSelectOtherKey([$event.toString()])"
  />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import {
  InboxOutlined,
} from '@ant-design/icons-vue';
import { useDark } from '@vueuse/core';
import ValidatorSvg from '@/components/icon/ValidatorSvg.vue';

const emits = defineEmits<{
  select: [v: string[]];
}>();

const isDark = useDark();
const route = useRoute();
const router = useRouter();
const selectedMenuItem = ref(['wallet']);

const handleSelectOtherKey = (keys: string[]) => {
  selectedMenuItem.value = keys;
  emits('select', keys);

  if (!router.hasRoute(keys[0])) {
    return;
  }
  router.push({ name: keys[0] });
};

watchEffect(() => {
  const routeName = route.name;
  if (!routeName) {
    return;
  }
  selectedMenuItem.value = [routeName.toString()];
});

const menuItems = [
  {
    key: 'shielded-transfer',
    icon: () => h(InboxOutlined),
    label: 'Shielded transferring',
  },
  // {
  //   key: 'wallet',
  //   icon: () => h(WalletSvg),
  //   label: 'Wallet',
  // },
  // {
  //   key: 'icb-transfer',
  //   icon: () => h(TransferSvg),
  //   label: 'IBC',
  // },
  {
    key: 'validator-management',
    icon: () => h(ValidatorSvg),
    label: 'Validator',
  },
  // {
  //   key: 'stacking',
  //   icon: () => h(StackingSvg),
  //   label: 'Stacking',
  // },
  // {
  //   key: 'proposals',
  //   icon: () => h(InboxOutlined),
  //   label: 'Proposals',
  // },

];
</script>
