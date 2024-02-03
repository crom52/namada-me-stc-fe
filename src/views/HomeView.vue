<template>
  <div class="p-32">
    <div class="m-auto w-700 b b-abd p-16 rounded-8 min-h-600">
      <!-- Wallet -->
      <button class="mt-20" @click="onCallApis">
        Click
      </button>
      <br class="my-32">
      <strong>
        <pre>
          {{ responseVal || 'no data' }}
        </pre>
      </strong>
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
