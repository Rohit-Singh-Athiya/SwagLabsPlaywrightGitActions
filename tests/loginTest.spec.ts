import { expect } from "@playwright/test";
import { loginData } from "../data/loginData";
import { test } from "../fixtures";
import { validationMessages } from "../data/messages";

test.describe.parallel('Login Test Suite', async() => {
    test('Login with standard user', async({homePage, productsPage}) => {
        await homePage.goTo();
        await homePage.loginSwagLabs(loginData.userRoles.standardUser, loginData.password);
        await expect(productsPage.inventoryContainer.first()).toBeVisible();
    });
    test('Login with locked user', async({homePage}) => {
        await homePage.goTo();
        await homePage.loginSwagLabs(loginData.userRoles.lockedOutUser, loginData.password);
        await expect(homePage.loginError).toBeVisible();
        await expect(homePage.loginError).toHaveText(validationMessages.login.failed);
    });
    test('Login with incorrect user', async({homePage}) => {
        await homePage.goTo();
        await homePage.loginSwagLabs(loginData.userRoles.standardUser, loginData.incorrectPassword);
        await expect(homePage.loginError).toHaveText(validationMessages.login.incorrectPassword);
    });
    
});