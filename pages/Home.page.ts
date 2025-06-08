import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { paths } from "../support/paths";

export class HomePage extends BasePage{
    constructor(page: Page){
        super(page,paths.homePage);
    }

    async loginSwagLabs(userName: string, password: string): Promise<void>{
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    
    get userName(): Locator{
        return this.currentPage.locator('#user-name');
    }

    get password(): Locator{
        return this.currentPage.locator('#password');
    }

    get loginButton(): Locator{
        return this.currentPage.locator('#login-button');
    }

    get loginError(): Locator{
        return this.currentPage.locator('//*[@id="login_button_container"]//form/div[3]/h3');
    }
}