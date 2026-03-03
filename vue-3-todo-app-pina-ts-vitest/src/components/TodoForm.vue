<template>
  <form
    @submit.prevent="addItemAndClear(todo)"
    class="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0 md:block md:space-y-3"
    role="form"
    aria-label="Add To-Do"
  >
    <label class="sr-only" for="todo">To-Do name</label>
    <input
      v-model="todo"
      type="text"
      aria-label="todo"
      placeholder="To-Do name"
      class="input"
      required
    />
    <button class="button" type="submit">Add To-Do</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useTodoListStore } from '../stores/todoList'
export default defineComponent({
  name: 'TodoForm',
  setup() {
    const todo = ref('')
    const store = useTodoListStore()
    function addItemAndClear(title: string) {
      if (title.length === 0) {
        return
      }
      store.addTodoItem(title)
      todo.value = ''
    }
    return { todo, addItemAndClear }
  }
})
</script>

<style lang="postcss" scoped>
.todo-form {
  @apply mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md;
}
.input {
  @apply block w-full rounded-lg border bg-transparent py-3 px-4 shadow-sm outline-none focus:border-indigo-600;
}
.button {
  @apply block w-full rounded-lg bg-indigo-600 py-3 px-4 text-center text-sm font-medium text-white shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none sm:w-auto md:w-full;
}
</style>
