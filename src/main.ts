import './assets/main.css'

import { createApp } from 'vue'

import router from '@/plugins/router';

import App from './App.vue'

import MyInput from '@/components/MyInput.vue'

const app = createApp(App);

app.use(router)
app.component('MyInput', MyInput)
app.directive('focus', {
  mounted(element: HTMLElement) {
    element.querySelectorAll("input").forEach((inputEl: HTMLElement) => {
      inputEl.focus();
    });
  }
})
app.mount('#app')
