<script setup lang="ts">
import TodoApp from './components/TodoApp.vue'
document.title = 'To-Do App with Vue 3, Pina w/ Local Storage, Vitest and Playwright'
const appStatus = import.meta.env.VITE_APP_STATUS
</script>

<template>
  <TodoApp />
  <div class="env-status">
    Поточний режим: <strong>{{ appStatus }}</strong>
  </div>
</template>
