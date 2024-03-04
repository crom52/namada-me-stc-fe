<template>
  <span
    v-bind="$attrs"
    class="clickable"
    @click="onCopy"
  >
    <slot>
      {{ copyContent }}
    </slot>
  </span>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';

const props = defineProps<{
  copyContent: string | number;
  showIcon?: boolean;
}>();

const { copyContent } = toRefs(props);

const onCopy = async () => {
  try {
    await navigator.clipboard.writeText(copyContent.value.toString());
    message.success({ content: `Copied: ${copyContent.value}`, duration: 1.2, key: 'msgKey' });
  }
  catch (e) {
    message.error({ content: 'Copy failed', duration: 1.2, key: 'msgKey' });
  }
};
</script>
