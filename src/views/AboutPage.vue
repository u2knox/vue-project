<template>
  <div>
    <h1>About page</h1>
    <router-view></router-view>
    <router-link :to="{ name: 'HomePage' }">Home page</router-link>

    <div class="block" @click="start" :class="{ rotate: isAnime }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isAnime = ref<boolean>(false)

const start = () => {
  isAnime.value = true
  setTimeout(() => {
    isAnime.value = false
    const names = ['AboutUs', 'AboutYou', 'AboutWe'].filter((el) => el !== router.currentRoute.value.name);
    router.push({ name: names[Math.floor(Math.random() * names.length)] })
  }, 3000)
}
</script>

<style scoped>
.block {
  height: 50px;
  width: 50px;
  background: teal;
  transition: all 3s;
}
.rotate {
  transform: rotate(135deg);
}
</style>
