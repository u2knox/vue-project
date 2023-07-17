<template>
  <div>
    <h1>Task page</h1>
    <table>
      <tbody>
        <tr>
          <td>ID</td>
          <td>{{ task.id }}</td>
        </tr>
        <tr>
          <td>title</td>
          <td>{{ task.title }}</td>
        </tr>
        <tr>
          <td>ID</td>
          <td>{{ task.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useJsonPlaceholder } from '@/services/api/jsonPlaceholder.service';

import type { Task } from '@/types/task';

interface Props {
  id: string;
}
const props = defineProps<Props>();

const jsonPlaceholderComments = useJsonPlaceholder('comments');

const task = ref<Task>({} as Task);

onMounted(async () => {
  const comment = await jsonPlaceholderComments.getItem(Number(props.id));

  task.value = {
    id: comment.id,
    title: comment.name,
    content: comment.body
  }
})
</script>

<style scoped>

</style>