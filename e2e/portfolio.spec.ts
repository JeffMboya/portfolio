import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('renders hero heading', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('shows at least one project card', async ({ page }) => {
    await page.goto('/')
    const cards = page.locator('a[href^="/work/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('contact mailto link is present', async ({ page }) => {
    await page.goto('/')
    const mailto = page.locator('a[href^="mailto:"]').first()
    await expect(mailto).toBeVisible()
  })
})

test.describe('Project case study page', () => {
  test('renders Propeller case study', async ({ page }) => {
    await page.goto('/work/propeller')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Propeller')
    await expect(page.locator('article')).toBeVisible()
  })

  test('has a back link to home', async ({ page }) => {
    await page.goto('/work/propeller')
    await expect(page.locator('a[href="/"]')).toBeVisible()
  })

  test('clicking a project card navigates to its case study', async ({ page }) => {
    await page.goto('/')
    const firstCard = page.locator('a[href^="/work/"]').first()
    const href = await firstCard.getAttribute('href')
    await firstCard.click()
    await expect(page).toHaveURL(href!)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })
})

test.describe('404 handling', () => {
  test('unknown project slug returns 404', async ({ page }) => {
    const response = await page.goto('/work/nonexistent')
    expect(response?.status()).toBe(404)
  })
})
