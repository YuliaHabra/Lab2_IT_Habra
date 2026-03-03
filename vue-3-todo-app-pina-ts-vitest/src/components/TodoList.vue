<template>
  <div v-if="!todoListLength">
    <div class="todo-options">
      <button @click.stop="toggleAllTodoItems" class="todo-options__button button__toggle-all">
        Toggle All Complete
      </button>
      <button @click.stop="removeAllTodoItems" class="todo-options__button button__remove-all">
        Remove All To-do's
      </button>
    </div>
    <div>
      <ul>
        <li v-for="todo in todoList" :key="todo.id" class="todo-list__item">
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
          <div class="buttons">
            <button
              @click.stop="toggleTodoItem(todo.id)"
              class="buttons__item button__complete"
              :class="{ completed: todo.completed }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="buttons__item--svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
                />
              </svg>
            </button>
            <button @click="removeTodoItem(todo.id)" class="buttons__item button__remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="buttons__item--svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="text-center leading-relaxed text-gray-600">
    <h2 class="no-todos-found">No To-Do found</h2>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useTodoListStore } from '../stores/todoList'
import { storeToRefs } from 'pinia'
export default defineComponent({
  name: 'TodoList',
  setup() {
    const store = useTodoListStore()
    const { todoList } = storeToRefs(store)
    const { toggleTodoItem, removeTodoItem } = store
    return {
      todoList,
      toggleTodoItem,
      removeTodoItem,
      toggleAllTodoItems: () => store.toggleAllTodoItems(),
      removeAllTodoItems: () => store.removeAllTodoItems(),
      todoListLength: computed(() => store.todoListLength)
    }
  }
})
</script>

<style lang="postcss" scoped>
.todo-options {
  @apply mb-4 flex items-center justify-between;
}
.todo-options__button {
  @apply rounded px-4 py-2 text-sm text-gray-500;
}
.todo-list__item {
  @apply mb-4 flex items-center justify-between rounded bg-white px-8 pt-6 pb-8 shadow-sm;
}
.completed {
  @apply text-gray-400 line-through;
}
.buttons {
  @apply flex items-center gap-x-2;
}
.buttons__item {
  @apply mx-auto h-10 w-10 rounded-lg text-center text-sm font-medium text-white;
}
.buttons__item.completed {
  @apply bg-gray-400;
}
.buttons__item--svg {
  @apply mx-auto h-6 w-6;
}
.button__complete {
  @apply bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none;
}
.button__remove {
  @apply bg-red-600 text-center text-sm font-medium text-white shadow hover:bg-red-500 active:bg-red-700 active:shadow-none;
}
</style>
