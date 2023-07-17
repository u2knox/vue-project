<template>
  <div class="task">
    <router-link :to="{
      name: 'TaskPage',
      params: {
        id: props.task.id
      }
    }">
      <h2>{{ props.task.title }}</h2>
    </router-link>
    <p>{{ props.task.content }}</p>
    <button @click="emits('delete', props.task.id)">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/types/task'

interface Props {
  task: Task
}
const props = defineProps<Props>()
interface Emits {
  (e: 'delete', id: number): void
}
const emits = defineEmits<Emits>()
</script>

<style scoped>
.task {
  border: 2px solid teal;
  padding: 12px;
}
</style>
