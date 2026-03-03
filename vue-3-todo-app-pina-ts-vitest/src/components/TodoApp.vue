<template>
  <div class="container mx-auto px-4">
    <div class="mx-auto my-5 max-w-lg">
      <div role="banner" className="mb-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mx-auto h-10 w-10 text-center"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
          />
        </svg>
        <h1 className="text-3xl text-gray-800 font-bold">To-Do App</h1>
        <p className="text-gray-800 px-8 leading-relaxed">
          To-Do App with Vue 3, Pina w/ Local Storage, Tailwind, Vitest and Playwright
        </p>
      </div>
      <main role="main" class="main">
        <div class="mb-10">
          <TodoForm />
        </div>
        <div class="mb-5">
          <TodoList />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
export default defineComponent({
  components: { TodoForm, TodoList },
  setup() {
    return {}
  }
})
</script>
