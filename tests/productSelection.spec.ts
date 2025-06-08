import { expect } from "@playwright/test";
import { loginData } from "../data/loginData";
import { test } from "../fixtures";

test.describe.parallel('Login Test Suite', async() => {
    test('Login - select product ', async({homePage, productsPage, country}) => {
        await homePage.goTo();
        await homePage.loginSwagLabs(loginData.userRoles.standardUser, loginData.password);
        await productsPage.selectProduct('Sauce Labs Backpack');
        await productsPage.selectProduct('Sauce Labs Bike Light');
        await productsPage.selectProduct('Sauce Labs Bolt T-Shirt');
        expect(await productsPage.cartCount).toBe('3');
        await productsPage.unselectProduct('Sauce Labs Bike Light');
        await productsPage.unselectProduct('Sauce Labs Bolt T-Shirt');
        expect(await productsPage.cartCount).toBe('1');
    });

});