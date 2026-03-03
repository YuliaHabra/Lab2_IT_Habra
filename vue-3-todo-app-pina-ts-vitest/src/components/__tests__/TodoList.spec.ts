import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from '@/stores/todoList'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

describe('TodoList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders No To-Do found message when todo list is empty', () => {
    const wrapper = mount(TodoList)
    expect(useTodoListStore().todoList).toHaveLength(0)
    expect(wrapper.find('.no-todos-found').text()).toBe('No To-Do found')
  })
  it('renders a list of todo items', async () => {
    useTodoListStore().addTodoItem('Todo Item 1')
    useTodoListStore().addTodoItem('Todo Item 2')
    useTodoListStore().addTodoItem('Todo Item 3')
    expect(useTodoListStore().todoList).toHaveLength(3)
    const wrapper = mount(TodoList)
    expect(wrapper.findAll('.todo-list__item').length).toBe(3)
  })
})
