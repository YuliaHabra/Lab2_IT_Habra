import type { TodoItem } from '../models/todoItem'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: useStorage<TodoItem[]>('todoList', []),
    nextId: 0
  }),
  getters: {
    getTodoList: (state) => state.todoList,
    getTodoItem: (state) => (id: TodoItem['id']) => state.todoList.find((item) => item.id === id),
    todoListLength: (state) => state.todoList.length === 0
  },
  actions: {
    addTodoItem(title: TodoItem['title']) {
      this.todoList.push({
        id: this.nextId++,
        title,
        completed: false
      })
    },
    toggleTodoItem(id: TodoItem['id']) {
      const todoItem = this.getTodoItem(id)
      if (todoItem) {
        todoItem.completed = !todoItem.completed
      }
    },
    toggleAllTodoItems() {
      const allCompleted = this.todoList.every((item) => item.completed)
      this.todoList.forEach((item) => {
        item.completed = !allCompleted
      })
    },
    removeTodoItem(id: TodoItem['id']) {
      this.todoList = this.todoList.filter((item) => item.id !== id)
    },
    removeAllTodoItems() {
      this.todoList = []
    }
  }
})
