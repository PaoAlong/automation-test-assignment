import { test, expect } from '@playwright/test';

test('TC001 ', async ({ page }) => {

    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory/);

    await page.pause();

  
});
