<template>
  <div class="page">
    <div class="base-container">
      <div class="bg-gray-100 p-16 text-center">
        <p class="text-16 font-700">
          Wallet
        </p>
      </div>
      <div class="p-16">
        <AButton
          type="primary"
          block
          size="large"
          @click="onClick"
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

// import { validatorApis } from '@/apis/validator/testGet';

// const responseVal = ref<any>();
// const onCallApis = async () => {
//   const rs = await validatorApis.search2({ count: '10' });
//   responseVal.value = rs;
// };

const testExtension = () => {

};
const navigateToExtensionPage = () => {
  window.open(
    'https://chromewebstore.google.com/detail/namada-extension/hnebcbhjpeejiclgbohcijljcnjdofek',
    '_blank', // <- This is what makes it open in a new window.
  );
};

const onClick = () => {
  testExtension();
};
</script>
