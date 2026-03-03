import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTodoListStore } from './todoList' 

describe('Тестування бізнес-логіки TodoList Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('1. Повинен додавати нове завдання (addTodoItem)', () => {
    const store = useTodoListStore()
    
    store.addTodoItem('Розібратися з помилками Git') 
    
    expect(store.todoList.length).toBe(1)
    expect(store.todoList[0].title).toBe('Розібратися з помилками Git')
    expect(store.todoList[0].completed).toBe(false) 
  })

  it('2. Повинен змінювати статус завдання (toggleTodoItem)', () => {
    const store = useTodoListStore()
    store.addTodoItem('Завдання 1')
    
    const id = store.todoList[0].id
    store.toggleTodoItem(id)
    
    expect(store.todoList[0].completed).toBe(true)
  })

  it('3. Повинен видаляти завдання за ID (removeTodoItem)', () => {
    const store = useTodoListStore()
    store.addTodoItem('Завдання для видалення')
    
    const id = store.todoList[0].id
    store.removeTodoItem(id) 
    
    expect(store.todoList.length).toBe(0)
  })

  it('4. Повинен очищати весь список (removeAllTodoItems)', () => {
    const store = useTodoListStore()
    store.addTodoItem('Перше')
    store.addTodoItem('Друге')
    
    store.removeAllTodoItems()
    
    expect(store.todoList.length).toBe(0)
  })

  it('5. Геттер todoListLength повинен правильно показувати, чи порожній список', () => {
    const store = useTodoListStore()
    
    expect(store.todoListLength).toBe(true)

    store.addTodoItem('Нове завдання')
    
    expect(store.todoListLength).toBe(false)
  })
})