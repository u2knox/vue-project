<template>
  <div>
    <add-task @add-task="createTask"></add-task>
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

import { useJsonPlaceholder } from '@/services/api/jsonPlaceholder.service';

import type { Task } from '@/types/task';

const jsonPlaceholder = useJsonPlaceholder('comments');

const tasks = ref<Task[]>([])

const getTasks = async () => {
  const comments = await jsonPlaceholder.getItems(10);
  comments.forEach((comment: any) => {
    tasks.value.push({
      id: comment.id,
      title: comment.name,
      content: comment.body
    })
  });
}

const deleteTask = async (taskId: number) => {
  tasks.value = tasks.value.filter((task) => task.id != taskId)
  await getTasks();
}

onMounted(async () => {
  await getTasks();
})

const createTask = async (task: Task) => {
  try {
    await jsonPlaceholder.addItem({
      postId: 1,
      name: task.title,
      email: 'example@gmail.com',
      body: task.content
    });
    await getTasks();
  } catch(e) {
    console.log('error', e);
  }
}
</script>

<style scoped></style>
