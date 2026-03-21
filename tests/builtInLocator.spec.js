 
 import {test, expect} from "@playwright/test"

 test ("handling built in locators" , async function ({page}) {

   //to set the time to wait for the actions to perform

   test.setTimeout(12 * 10000)
    
    //browser launch

 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 //ALT text- should have alt inside a tag

 let logo = await page.getByAltText('company-branding')
await expect(logo).toBeVisible()

//placeholder

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder("Password").fill('admin123')

//Role

await page.getByRole("button" , {name : "Login"}).click()
await page.waitForTimeout(5000)

// to check if the user name is visible

let username = await page.locator('[class="oxd-userdropdown-name"]').textContent()
await expect (page.getByText(username)).toBeVisible()

//label- do not take label tag

await expect (page.getByLabel('Sidepanel')).toBeVisible()


//title- do not take tag, instead take attribute value of att name "title"

await page.getByTitle('Help').click()

//test id


 })