 import {test, expect} from '@playwright/test'

 test ("Firsttestscript" , async function ({page}) {

// browser laumch

await page.goto("https://www.saucedemo.com/")

// title and URL

let pageTitle = await page.title()
console.log("page title :" , pageTitle)
console.log("page url:" , await page.url())


//Assertion

await expect (page).toHaveTitle("Swag Labs")
await expect (page).toHaveURL("https://www.saucedemo.com/")

//Body contect

// validate heading

await expect(page.locator('[class="login_logo"]')).toHaveText('Swag Labs')

// username

await (page.locator('[id="user-name"]')).fill('standard_user')

//password

await page.locator(' [id="password" ]').fill('secret_sauce')

//login

await page.locator('[id="login-button"]').click()
 })