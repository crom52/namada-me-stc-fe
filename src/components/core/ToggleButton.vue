<template>
  <label
    role="checkbox"
    :tabindex="disabled ? -1 : 0"
    class="relative box-content inline-block h-1em min-w-30 cursor-pointer select-none overflow-hidden b b-4 b-current rounded-full b-solid bg-current px-[calc(0.5em+2px)] vertical-middle transition-color duration-400"
    :class="[modelValue ? checkedClasses : unCheckedClasses, disabled ? disabledClasses : null]"
    @keydown.space.prevent="handleToggle"
  >
    <!-- hidden checkbox -->
    <input
      type="checkbox"
      class="pointer-events-none absolute h-1 w-1 opacity-0"
      :name="name"
      :checked="!!modelValue"
      :disabled="disabled"
      tabindex="-1"
      @change.stop="handleToggle"
    >
    <!-- hidden labels -->
    <div class="h-0 flex flex-col overflow-y-hidden opacity-0">
      <div :class="[labelClasses, modelValue ? checkedLabelClasses : unCheckedLabelClasses]">
        {{ checkedLabel }}
      </div>
      <div :class="[labelClasses, modelValue ? checkedLabelClasses : unCheckedLabelClasses]">
        {{ unCheckedLabel }}
      </div>
    </div>
    <!-- checked label -->
    <div
      class="absolute-l-center w-full flex-center whitespace-nowrap pr-[calc(1em+2px)] transition-transform duration-400 delay-50"
      :class="modelValue ? '' : 'translate-x--1/1'"
    >
      <span :class="[labelClasses, modelValue ? checkedLabelClasses : unCheckedLabelClasses]">{{
        checkedLabel
      }}</span>
    </div>
    <!-- unchecked label -->
    <div
      class="absolute-r-center w-full flex-center whitespace-nowrap pl-[calc(1em+2px)] transition-transform duration-400 delay-50"
      :class="modelValue ? 'translate-x-1/1' : ''"
    >
      <span :class="[labelClasses, modelValue ? checkedLabelClasses : unCheckedLabelClasses]">{{
        unCheckedLabel
      }}</span>
    </div>
    <!-- slide track -->
    <div
      class="absolute-tl box-border h-full max-w-[calc(100%-1em)] w-full w-full rounded-full transition-transform duration-400"
      :class="{ 'translate-x-1/1': modelValue }"
    >
      <!-- handle -->
      <div
        class="absolute-tl h-full w-1em rounded-full bg-current transition-color duration-400"
        :class="handleClasses"
      />
    </div>
  </label>
</template>

<script setup lang="ts">
type Nullish = null | undefined;
type CssClasses = string | string[] | Record<string, boolean> | Nullish;

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    name?: string;
    disabled?: boolean;
    disabledClasses?: CssClasses;
    checkedClasses?: CssClasses;
    unCheckedClasses?: CssClasses;

    labelClasses?: CssClasses;
    checkedLabel?: string;
    checkedLabelClasses?: CssClasses;
    unCheckedLabel?: string;
    unCheckedLabelClasses?: CssClasses;

    handleClasses?: CssClasses;
    checkedHandleClasses?: CssClasses;
    unCheckedHandleClasses?: CssClasses;
  }>(),
  {
    name: undefined,
    disabled: false,
    disabledClasses: undefined,
    checkedClasses: undefined,
    unCheckedClasses: undefined,

    labelClasses: undefined,
    checkedLabel: '',
    checkedLabelClasses: undefined,
    unCheckedLabel: '',
    unCheckedLabelClasses: undefined,

    handleClasses: undefined,
    checkedHandleClasses: undefined,
    unCheckedHandleClasses: undefined,
  },
);

const emits = defineEmits<{
  'update:modelValue': [v: boolean];
}>();

const checkedClasses = computed(() => {
  return props.checkedClasses || 'text-primary';
});

const unCheckedClasses = computed(() => {
  return props.unCheckedClasses || 'text-gray';
});

const disabledClasses = computed(() => {
  return props.disabledClasses || 'opacity-50 pointer-events-none';
});

const labelClasses = computed(() => {
  return props.labelClasses || 'text-14';
});

const checkedLabelClasses = computed(() => {
  return ['transition-color duration-400', props.checkedLabelClasses || 'text-white'];
});

const unCheckedLabelClasses = computed(() => {
  return props.unCheckedLabelClasses || 'text-white';
});

const checkedHandleClasses = computed(() => {
  return props.checkedHandleClasses;
});

const unCheckedHandleClasses = computed(() => {
  return props.unCheckedHandleClasses;
});

const handleClasses = computed(() => {
  return (
    (props.modelValue ? checkedHandleClasses.value : unCheckedHandleClasses.value)
    || props.handleClasses
    || 'text-white'
  );
});

const handleToggle = () => {
  if (props.disabled) {
    return;
  }

  emits('update:modelValue', !props.modelValue);
};
</script>
