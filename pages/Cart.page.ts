import { Locator, Page } from "@playwright/test";
import { paths } from "../support/paths";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    constructor(page: Page){
        super(page,paths.cart);
    }

    async continueCheckout(): Promise<void>{
        await this.checkout.click();
        await this.checkout2ndButton.click();
    }
    
    get continueShopping(): Locator{
        return this.currentPage.locator('#continue-shopping');
    }

    get checkout(): Locator{
        return this.currentPage.locator('#shopping_cart_container');
    }

    get checkout2ndButton(): Locator{
        return this.currentPage.locator('#checkout')
    }

}