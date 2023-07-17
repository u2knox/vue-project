<template>
  <div>
    <button id="test1">test1</button>
    <my-input label="Заголовок" v-model="task.title"></my-input>
    <my-input v-focus label="Описание" v-model="task.content"></my-input>
    <button @click="emits('addTask', Object.assign({ id: new Date().getTime() } as Task, task))">Сохранить</button>
    <!-- <button @click="emits('addTask', {
      title: task.title,
      content: task.content
    })">Сохранить</button> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

import type { Task } from '@/types/task';

interface Emits {
  (e: 'addTask', task: Task): void
}
const emits = defineEmits<Emits>();

onBeforeMount(() => {
  console.log("before mount", document.getElementById("test1"));
});
onMounted(() => {
  console.log("mounted", document.getElementById("test1"));
});

const task = ref({
  title: 'default',
  content: ''
})
</script>

<style scoped></style>
