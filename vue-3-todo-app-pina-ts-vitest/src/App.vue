<script setup lang="ts">
import TodoApp from './components/TodoApp.vue'
document.title = 'To-Do App with Vue 3, Pina w/ Local Storage, Vitest and Playwright'
const appStatus = import.meta.env.VITE_APP_STATUS
// Функція для симуляції помилки для Sentry [cite: 130]
const throwError = () => {
  throw new Error("Sentry Test Error: Something went wrong in Lab 6!"); 
};
</script>

<template>
  <TodoApp />
  <div class="env-status">
    Поточний режим: <strong>{{ appStatus }}</strong>

    <button 
      @click="throwError" 
      style="background-color: #e74c3c; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"
    >
      Break the world (Sentry Test)
    </button>

  </div>
</template>
