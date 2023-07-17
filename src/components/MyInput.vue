<template>
  <div>
    <label v-if="props.label" :for="`input${inputId}`">{{ props.label }}</label>
    <input
      :value="props.modelValue"
      @input="callEvent"
      type="text"
      :id="`input${inputId}`"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  placeholder?: string
  modelValue?: string
}
const props = defineProps<Props>()
interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emits = defineEmits<Emits>();

const callEvent = (event: any) => emits('update:modelValue', event.target?.value);

const inputId = Math.round(Math.random() * 1000000)
</script>

<style scoped>
input {
  border-radius: 4px;
  border: teal solid 2px;
}
</style>
