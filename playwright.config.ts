import { defineConfig, devices, Project } from '@playwright/test';
import dotenv from 'dotenv';
import { Country } from './support/enums/constants';

dotenv.config();

const envCountry = (process.env.COUNTRY || 'India') as Country;

const createProject = (country: Country): Project => ({
  name: 'Test Project',
  use: {
    ...devices['Desktop Chrome'],
    country,
    screenshot: 'only-on-failure'
  }
});

export default defineConfig({
  testDir: './tests',
  projects: [createProject(envCountry)],
  use: {
    trace: 'on-first-retry'
  }
});
