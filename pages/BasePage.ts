import { Locator, Page } from "@playwright/test";

export class BasePage {
    page: Page;
    currentPage: Locator;
    url: string;

    constructor(page: Page, url: string){
        this.page = page;
        this.url = url;
        this.currentPage = page.locator('body');
    }

    async goTo() {
    await this.page.goto(this.url);
    }
};