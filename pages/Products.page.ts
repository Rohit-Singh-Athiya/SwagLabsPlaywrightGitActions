import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { paths } from "../support/paths";

export class ProductsPage extends BasePage{
    constructor(page: Page){
        super(page,paths.products);
    }

    async selectProduct(productName: string): Promise<void> {
        const locator = productName.toLowerCase().replace(/\s+/g, '-');  // Regex for replacing space by hyphen
        await this.currentPage.locator(`#add-to-cart-${locator}`).click();
    }

    async unselectProduct(productName: string): Promise<void> {
        const locator = productName.toLowerCase().replace(/\s+/g, '-');  // Regex for replacing space by hyphen
        await this.currentPage.locator(`#remove-${locator}`).click();
    }

    get password(): Locator{
        return this.currentPage.locator('#password');
    }

    get loginButton(): Locator{
        return this.currentPage.locator('#login-button');
    }

    get inventoryContainer(): Locator{
        return this.currentPage.locator('#inventory_container');
    }

    get cartCount(): Promise<string> {
        return this.currentPage.locator("//*[@id='shopping_cart_container']//span").innerText();
    }

    get shoppingCart(): Locator {
        return this.currentPage.locator('#shopping_cart_container');
    }
}