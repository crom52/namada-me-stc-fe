<template>
  <div class="page">
    <div class="base-container">
      <div class="text-center bg-gray-100 p-16 ">
        <p class="text-16 font-700">
          Wallet
        </p>
      </div>
      <div class="p-16">
        <AButton
          type="primary"
          block
          size="large"
        >
          Click to download the extension
        </AButton>
        <p class="mt-16">
          You have no token balances to display on Namada!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { validatorApis } from '@/apis/validator/testGet';

const responseVal = ref<any>();
const onCallApis = async () => {
  const rs = await validatorApis.search2({ count: '10' });
  responseVal.value = rs;
};
</script>
