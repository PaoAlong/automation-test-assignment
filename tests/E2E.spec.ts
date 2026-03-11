import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();


test('End-to-End Scenario: Place an Order Successfully', async ({ page }) => {

  // 1. Login         
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', process.env.USERNAME_TEST!)
  await page.fill('#password', process.env.PASSWORD_TEST!)
  await page.locator('#login-button').click();

  // Expected Result: product page displayed
  await expect(page).toHaveURL(/inventory/);

  // 2. Select Products (add at least 2 products)
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#add-to-cart-sauce-labs-bike-light');

  // Expected Result: cart reflects selected items
  await page.locator('.shopping_cart_link').click();
  await expect(page.locator('.cart_item')).toHaveCount(2);

  // 3. Review Cart
  await expect(page.locator('.inventory_item_name')).toContainText([
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light'
  ]);

  // 4. Checkout
  await page.click('#checkout');

  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '10110');

  await page.click('#continue');
  
  // Expected Result: checkout overview page
  await expect(page).toHaveURL(/checkout-step-two/);

  // 5. Verify Pricing
  await expect(page.locator('.summary_total_label')).toBeVisible();

  // 6. Complete Order
  await page.click('#finish');

  // Expected Result: order completion confirmation
  await expect(page.locator('.complete-header')).toContainText('Thank you');

  // 7. Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await page.pause();

  // Expected Result: returned to login page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

