<template>
  <div class="page">
    <div class="base-container">
      <div class="bg-dark2 p-16 text-center">
        <h3 class="text-16 font-700">
          Shielded Transfer
        </h3>
      </div>
      <div class="h-full p-16">
        <!-- Source chain -->
        <div>
          <p class="font-500">
            Source Address
          </p>
          <AInput
            v-model:value="sourceAddress"
            size="large"
            :status="!sourceAddress && shouldToggleValidate ? 'error' : undefined"
            placeholder="Source Address..."
            class="mt-8"
          />
          <p
            v-show="!sourceAddress && shouldToggleValidate"
            class="mt-4 text-danger"
          >
            Source Address can not be empty
          </p>
        </div>

        <!-- Destination chain -->
        <div class="mt-32">
          <p class="font-500">
            Destination Address
          </p>
          <AInput
            v-model:value="destinationAddress"
            size="large"
            :status="!destinationAddress && shouldToggleValidate ? 'error' : undefined"
            placeholder="Destination Address..."
            class="mt-8"
          />
          <p
            v-show="!destinationAddress && shouldToggleValidate"
            class="mt-4 text-danger"
          >
            Destination Address can not be empty
          </p>
        </div>

        <!-- Amount -->
        <div class="mt-32">
          <p class="font-500">
            Amount
          </p>
          <AInputNumber
            v-model:value="amountInputVal"
            :min="0"
            :max="1000000000000"
            :status="!amountInputVal && shouldToggleValidate ? 'error' : undefined"
            :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
            size="large"
            placeholder="Amount"
            class="mt-8 w-full"
          />
          <p
            v-show="!amountInputVal && shouldToggleValidate"
            class="mt-4 text-danger"
          >
            Please input transfer amount
          </p>
        </div>

        <!-- Submit button -->
        <AButton
          type="primary"
          block
          size="large"
          class="mt-32"
          @click="onSubmit"
        >
          Submit
        </AButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { transferApis } from '@/apis/transfer/transfer-apis';

const sourceAddress = ref('');
const destinationAddress = ref('');
const amountInputVal = ref();
const shouldToggleValidate = ref(false);

function validateCheck() {
  const failed = [sourceAddress.value, destinationAddress.value, amountInputVal.value].some(i => !i);
  if (!failed) {
    return true;
  }
  shouldToggleValidate.value = true;
  return false;
};

function resetForm() {
  sourceAddress.value = '';
  destinationAddress.value = '';
  amountInputVal.value = undefined;
  shouldToggleValidate.value = false;
};

async function onSubmit() {
  if (!validateCheck()) {
    return;
  }

  const rs = await transferApis.transfer({
    amount: amountInputVal.value || 0,
    source: sourceAddress.value,
    target: destinationAddress.value
  });

  if (!rs) {
    message.error('Failed to transfer! try again');
    return;
  }

  message.info(rs);
};

</script>
