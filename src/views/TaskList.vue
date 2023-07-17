<template>
  <div>
    <add-task @add-task="(task: Task) => tasks.push(task)"></add-task>
    <user-task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete="deleteTask"
    ></user-task>
    <router-link :to="{ name: 'HomePage' }">Home page</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import AddTask from '@/components/AddTask.vue'
import UserTask from '@/components/UserTask.vue'

import type { Task } from '@/types/task';

const tasks = ref<Task[]>([])

const deleteTask = (taskId: number) => {
  tasks.value = tasks.value.filter((task) => task.id != taskId)
}

onMounted(async () => {
  const commentQuery = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
  const comments = await commentQuery.json();
  comments.forEach((comment: any) => {
    tasks.value.push({
      id: comment.id,
      title: comment.name,
      content: comment.body
    })
  });
})
</script>

<style scoped></style>
