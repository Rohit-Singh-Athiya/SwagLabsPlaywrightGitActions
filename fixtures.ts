import { ConsumerData, countrySpecificData } from "./data/consumerData";
import { CartPage } from "./pages/Cart.page";
import { CheckoutPage } from "./pages/Checkout.page";
import { HomePage } from "./pages/Home.page";
import { ProductsPage } from "./pages/Products.page";
import {test as base} from "@playwright/test";
import { Country } from "./support/enums/constants";

interface Pages {
    homePage: HomePage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
}

interface Data {
    consumerData: ConsumerData;
    country: Country;
}

export const test = base.extend<Pages & Data>({
    country: async ({}, use, testInfo) => {
    await use(testInfo.project.use?.country || Country.IND);
},
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },
    productsPage: async({page}, use) => {
        await use(new ProductsPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async({page}, use) => {
        await use(new CheckoutPage(page));
    },
    consumerData: async ({country}, use) => {
        await use(countrySpecificData[country])
    }
});