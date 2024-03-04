<template>
  <ATag
    :color="dynamicTag.color"
    :bordered="!noBorder"
    class="rounded-7"
  >
    <div
      v-if="dynamicTag.icon"
      class="flex items-center gap-5"
    >
      <i
        class="inline-block text-14"
        :class="dynamicTag.icon"
      />
      <span>
        {{ dynamicTag.statusText }}
      </span>
    </div>
    <span v-else>{{ dynamicTag.statusText }}</span>
  </ATag>
</template>

<script lang="ts" setup>
const props = defineProps<{
  status: OrNullish<string>;
  noBorder?: boolean;
}>();

const { status } = toRefs(props);

const statusColorMap: Record<string, string[]> = {
  default: [], // plain
  success: ['Decrypted'], // green
  purple: ['Wrapper'], // bg: #f9f0ff || border: #d3adf7
  error: [], // red
  processing: [], // yellow
  geekblue: [], // bg: #f0f5ff || border: #adc6ff
  cyan: [], // bg: #e6fffb || border: #87e8de
  magenta: [], // bg: #fff0f6 || border: #ffadd2
};

const statusIconMap: Record<string, string> = {
  'active': 'i-material-symbols:verified-user-rounded',
  'Decrypted': 'i-material-symbols:verified-user-rounded',
  'in-active': 'i-fluent:plug-disconnected-20-filled',
  'unknown': 'i-pajamas:severity-unknown',
  'Wrapper': 'i-simple-icons:warp',
};

const findColor = (status: OrNullish<string>) => {
  if (!status) {
    return 'default';
  }
  for (const [color, statusList] of Object.entries(statusColorMap)) {
    if (statusList.includes(status)) {
      return color;
    }
  }
};

const dynamicTag = computed(() => {
  const statusText = status.value;
  return {
    statusText: status.value,
    color: findColor(statusText),
    icon: statusIconMap[statusText || 'unknown'],
  };
});
</script>
