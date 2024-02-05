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

      <br>
      <AButton type="primary">
        click
      </AButton>
      <hr class="my-32">
      <AButton>
        click
      </AButton>
      <strong>{{ isDark }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { validatorApis } from '@/apis/validator/testGet';

const responseVal = ref<any>();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const onCallApis = async () => {
  const rs = await validatorApis.search2({ count: '10' });
  responseVal.value = rs;
};
</script>
