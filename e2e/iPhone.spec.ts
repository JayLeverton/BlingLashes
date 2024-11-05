import { test, devices } from '@playwright/test';

test.use(devices['iPhone 12']);

test.use({
  viewport: { width: 390, height: 844 }, // Set a mobile viewport size, e.g., iPhone 6/7/8
  isMobile: true,
  deviceScaleFactor: 1, // Mobile screen density
});

test('view page', async ({ page }) => {
  await page.goto('http://192.168.1.241:5173/BlingLashes/');
});