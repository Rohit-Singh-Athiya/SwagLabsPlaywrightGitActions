import '@playwright/test';
import { Country } from './support/enums/constants';

declare module '@playwright/test' {
  interface ProjectUseOptions {
    country: Country;
  }
}
