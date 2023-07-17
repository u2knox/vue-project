<template>
  <div>
    <select name="azamat">
      <slot></slot>
    </select>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  console.log("1")
})

console.log("2")
</script>

<style scoped>

</style>