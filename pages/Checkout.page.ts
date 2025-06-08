import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { paths } from "../support/paths";
import { validationMessages } from "../data/messages";

export class CheckoutPage extends BasePage{
    constructor(page: Page){
        super(page,paths.checkout);
    }

    async fillBasicInformationAndCheckout(contactInfo: any): Promise<void>{
        await this.firstName.fill(contactInfo.firstName);
        await this.lastName.fill(contactInfo.lastName);
        await this.postalCode.fill(contactInfo.postalCode);
        await this.continue.click();
        await this.finalCheckout.click();
    }
    
    async validatePaymentSucessMessage() {
        await expect(this.checkoutSuccessful).toHaveText(validationMessages.checkout.success);
    }

    get firstName(): Locator{
        return this.currentPage.locator('#first-name');
    }

    get lastName(): Locator{
        return this.currentPage.locator('#last-name');
    }

    get postalCode(): Locator{
        return this.currentPage.locator('#postal-code');
    }

    get continue(): Locator{
        return this.currentPage.locator('#continue');
    }

    get cancel(): Locator{
        return this.currentPage.locator('#cancel');
    }

    get finalCheckout(): Locator {
        return this.currentPage.locator('#finish');
    }

    get checkoutSuccessful(): Locator {
        return this.currentPage.locator('#checkout_complete_container"').getByTestId('[data-test="complete-text"]');
    }

}