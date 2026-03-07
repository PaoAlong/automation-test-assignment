import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
  globalSetup: require.resolve('./global/login'),
  use: {
    baseURL: process.env.saucedemo_TEST,
    storageState: 'storageState.json',
    headless: false,

    viewport: null,

    launchOptions: {
      slowMo: 1000,
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    {
      name: 'E2E',
      testDir: './tests/',
    },
  // {
  //   name: 'girlfriend',
  //   testDir: './tests/girlfriend',
  // }

  ],

  
});

