
import {test, expect} from "@playwright/test"

test ("Handling assertions" , async function ({page}) {

    // browser launch

    await page.goto("https://www.saucedemo.com/")

    // username

    await page.locator('[id="user-name"]').fill('standard_user')

    //assertion

    await expect (page.locator('[id="user-name"]')).toBeVisible()
    await expect (page.locator('[id="user-name"]')).toBeEnabled()
    await expect.soft (page.locator('[id="user-name"]')).toBeEmpty()
    await expect (page.locator('[id="user-name"]')).toBeEditable()

    //password

    await page.locator('[id="password"]').fill('secret_sauce')

    //assertion

    await expect (page.locator('[id="password"]')).toBeVisible()
    await expect (page.locator('[id="password"]')).toBeEnabled()
    await expect.soft (page.locator('[id="password"]')).toBeEmpty()
    await expect (page.locator('[id="password"]')).toBeEditable()

    //login

    await page.locator('[id="login-button"]').toBeVisible()
    await page.locator('[id="login-button"]').click()
       
       
})