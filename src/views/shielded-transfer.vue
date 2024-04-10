<template>
  <div class="page">
    <div class="base-container">
      <div class="bg-dark2 p-16 text-center">
        <h3 class="text-16 font-700">
          Shielded Transfer
        </h3>
      </div>
      <div class="h-full p-16">
        <!-- TOKEN -->
        <div class="mt-16 flex">
          <img
            src="../assets/images/namada-dark.png"
            alt="atom"
            class="h-55 w-55"
          >
          <ul class="grid ml-16 mr-auto gap-4">
            <li class="text-20 font-700">
              NAAN
            </li>
            <li>Namada Token</li>
          </ul>
          <!-- <p class="text-24 font-800 text-gray">
            ≈ 0
          </p> -->
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
          :loading="isLoading"
          class="mt-32"
          @click="onSubmit"
        >
          {{ isLoading ? 'Processing transfer...' : 'Confirm' }}
        </AButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { transferApis } from '@/apis/transfer/transfer-apis';

const destinationAddress = ref('');
const amountInputVal = ref();
const shouldToggleValidate = ref(false);
const isLoading = ref<boolean>(false);

function validateCheck() {
  const failed = [destinationAddress.value, amountInputVal.value].some(i => !i);
  if (!failed) {
    return true;
  }
  shouldToggleValidate.value = true;
  return false;
};

function resetForm() {
  destinationAddress.value = '';
  amountInputVal.value = undefined;
  shouldToggleValidate.value = false;
};

async function onSubmit() {
  if (!validateCheck()) {
    return;
  }

  let rs: any;
  try {
    isLoading.value = true;
    message.loading({
      content: 'Processing...',
      key: 'main',
      duration: 0
    });
    rs = await transferApis.transfer({
      amount: amountInputVal.value || 0,
      target: destinationAddress.value
    });
  }
  catch (error) {
    message.error({
      content: 'Network error! try again',
      key: 'main'
    });
  }
  finally {
    isLoading.value = false;
  }

  if (!rs || rs === 'Transferring has failed') {
    message.error({
      content: 'Transfer has failed.',
      key: 'main'
    });
    return;
  }

  if (rs.toString().toLowerCase().includes('successfully')) {
    message.success({
      content: 'Transfer success!',
      key: 'main'
    });
    resetForm();
    return;
  }

  message.info({
    content: 'Failed, Unknown reason',
    key: 'main'
  });
};

</script>
