<template>
  <AMenu
    :selectedKeys="selectedMenuItem"
    mode="inline"
    :theme="isDark ? 'dark' : undefined"
    :items="menuItems"
    @update:selectedKeys="handleSelectOtherKey([$event.toString()])"
  />
</template>

<script lang="ts" setup>
import { h, reactive, watch } from 'vue';
import {
  InboxOutlined,
} from '@ant-design/icons-vue';
import { useDark } from '@vueuse/core';
import WalletSvg from '@/components/icon/WalletSvg.vue';
import StackingSvg from '@/components/icon/StackingSvg.vue';
import TransferSvg from '@/components/icon/TransferSvg.vue';

const emits = defineEmits<{
  select: [v: string[]]
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
    key: 'wallet',
    icon: () => h(WalletSvg),
    label: 'Wallet',
  },
  {
    key: 'icb-transfer',
    icon: () => h(TransferSvg),
    label: 'ICB',
  },
  {
    key: 'stacking',
    icon: () => h(StackingSvg),
    label: 'Stacking',
  },
  {
    key: 'proposals',
    icon: () => h(InboxOutlined),
    label: 'Proposals',
  },
];
</script>
