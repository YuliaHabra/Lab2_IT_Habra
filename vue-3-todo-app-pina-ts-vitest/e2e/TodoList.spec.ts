import { test } from '@playwright/test'

test.describe('list component', () => {
  test('visits the app root url and check if new todo has print on screen', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('todo').fill('New To-Do from Playwright')
    await page.getByRole('button', { name: 'Add To-Do' }).click()
    await page.waitForSelector('text=New To-Do from Playwright')
    await page.waitForSelector('text=Toggle All Complete')
    await page.waitForSelector("text=Remove All To-do's")
  })
})
