<template>
  <div class="page">
    <div class="base-container">
      <div class="bg-dark2 p-16 text-center">
        <p class="text-16 font-700">
          Shielded Transfer
        </p>
      </div>
      <div class="h-full p-16">
        <!-- Source chain -->
        <div>
          <p>Source Address</p>
          <AInput
            v-model:value="sourceAddress"
            size="large"
            placeholder="Source Address..."
            class="mt-8"
          />
        </div>

        <!-- Destination chain -->
        <div class="mt-32">
          <p>Destination Address</p>
          <AInput
            v-model:value="destinationAddress"
            size="large"
            placeholder="Destination Address..."
            class="mt-8"
          />
        </div>

        <!-- Amount -->
        <div class="mt-32">
          <p>Amount</p>
          <AInputNumber
            v-model:value="amountInputVal"
            :min="0"
            :max="1000000000000"
            :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
            size="large"
            placeholder="Amount"
            class="mt-8 w-full"
          />
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

const sourceAddress = ref('');
const destinationAddress = ref('');
const amountInputVal = ref();

function onSubmit() {

};

</script>
