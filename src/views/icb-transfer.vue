<template>
  <div class="page">
    <div class="base-container">
      <div class="text-center bg-gray-100 p-16 ">
        <p class="text-16 font-700">
          IBC Transfer
        </p>
      </div>
      <!-- Source chain -->
      <div class="p-16">
        <p>Source chain</p>
        <ASelect
          :value="selectedSourceChain"
          size="large"
          block
          :options="sourceChainOptions"
          class="mt-8"
          @update:value="handleSelectSourceChain($event?.toString() || '')"
        />
        <AButton
          type="primary"
          block
          size="large"
          class="mt-8"
        >
          Click to download the extension
        </AButton>
      </div>
      <!-- Destination chain -->
      <div class="p-16">
        <p>Destination Chain</p>
        <ASelect
          v-model:value="selectedDestinationChain"
          labelInValue
          size="large"
          block
          :options="destinationChainOptions"
          class="mt-8"
        />
        <AButton
          type="primary"
          block
          size="large"
          class="mt-8"
        >
          Click to download the extension
        </AButton>
      </div>

      <!-- Recipient -->
      <div class="p-16">
        <p>Recipient</p>
        <AInput
          v-model:value="recipientInputVal"
          size="large"
          placeholder="Recipient"
          class="mt-8"
        />
      </div>

      <!-- Amount -->
      <div class="p-16">
        <p>Amount</p>
        <AInput
          v-model:value="amountInputVal"
          size="large"
          placeholder="Amount"
          class="mt-8"
        />
      </div>

      <AButton
        type="primary"
        block
        size="large"
        class="mt-auto"
      >
        Submit
      </AButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SelectProps } from 'ant-design-vue';

const selectedSourceChain = ref('NAMADA');
const selectedDestinationChain = ref('COSMOS');
const recipientInputVal = ref('');
const amountInputVal = ref('');
const sourceChainOptions: SelectProps['options'] = [
  {
    value: 'COSMOS',
    label: 'Cosmos Testnet',
  },
  {
    value: 'NAMADA',
    label: 'Namada',
  },
];

const destinationChainOptions = computed(() =>
  sourceChainOptions.filter(i => i.value !== selectedSourceChain.value),
);

const handleSelectSourceChain = (v: string) => {
  if (!v || selectedSourceChain.value === v) {
    return;
  }
  selectedSourceChain.value = v;
  selectedDestinationChain.value = destinationChainOptions.value[0].value?.toString() || '';
};
</script>
