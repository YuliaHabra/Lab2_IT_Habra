import { test } from '@playwright/test'

test.describe('form component', () => {
  test('visits the app root url and add a todo', async ({ page }) => {
    await page.goto('/')
    await page.getByLabel('todo').fill('New To-Do from Playwright')
    await page.getByRole('button', { name: 'Add To-Do' }).click()
    await page.waitForSelector('text=New To-Do from Playwright')
  })
})
