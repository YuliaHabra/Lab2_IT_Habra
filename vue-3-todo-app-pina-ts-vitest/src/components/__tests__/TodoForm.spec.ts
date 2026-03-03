import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from '@/stores/todoList'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, it, expect } from 'vitest'
import TodoForm from '../TodoForm.vue'

describe('TodoForm', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render a form with an input and a button', () => {
    const wrapper = mount(TodoForm)
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })
  it('should add new todo item to the list', async () => {
    const wrapper = mount(TodoForm)
    const input = wrapper.find('input')
    await input.setValue('Todo New Item')
    expect(wrapper.vm.todo).toBe('Todo New Item')
    const form = wrapper.find('form')
    await form.trigger('submit.prevent')
    expect(useTodoListStore().todoList).toHaveLength(1)
    expect(useTodoListStore().todoList[0].title).toBe('Todo New Item')
  })
})
