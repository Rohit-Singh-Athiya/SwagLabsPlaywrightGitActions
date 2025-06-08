import { loginData } from "../data/loginData";
import { test } from "../fixtures";

test.describe.parallel('Login Test Suite', async() => {
    test('Login - select product/ Checkout', async({homePage, productsPage, cartPage, checkoutPage, consumerData}) => {
        await homePage.goTo();
        await homePage.loginSwagLabs(loginData.userRoles.standardUser, loginData.password);
        await productsPage.selectProduct('Sauce Labs Backpack');
        await productsPage.selectProduct('Sauce Labs Bike Light');
        await cartPage.continueCheckout();
        await checkoutPage.fillBasicInformationAndCheckout(consumerData);

    });                     
});