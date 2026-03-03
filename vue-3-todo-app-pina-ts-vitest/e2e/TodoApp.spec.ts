import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('accessibility', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/')
    page.waitForLoadState('domcontentloaded')
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['definition-list', 'scrollable-region-focusable'])
      .exclude('iframe')
      .analyze()
    console.log(accessibilityScanResults.violations)
    expect(accessibilityScanResults.violations).toEqual([])
  })
})
test.describe('Home Page', () => {
  test('visits the app root url and check if has the elements', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toHaveText('To-Do App')
    await expect(page.locator('form label')).toHaveText('To-Do name')
    await expect(page.locator('form button')).toHaveText('Add To-Do')
    await expect(page.locator('h2')).toHaveText('No To-Do found')
  })
})
