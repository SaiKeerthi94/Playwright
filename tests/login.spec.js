 
 import {test, expect} from '@playwright/test'

 test ('handling login' , async function ({page}) {

   // browser launch

    await page.goto("https://demoblaze.com/")

    // title and url

  let titlenew = await page.title()
  console.log("title:" , titlenew)

  let urlnew = await page.url()
  console.log( "url: " , urlnew)

  //assertiom
  await expect(page).toHaveTitle("STORE")
 await expect(page).toHaveURL("https://demoblaze.com/")

 //logo

 await expect(page.locator('[id="nava"]')).toBeVisible()

 //login

 await page.locator('[id="login2"]').click()


//usernsme

await page.locator('[id="loginusername"]').fill('keerthisai')


//password

await page.locator('[id="loginpassword"]').fill('sai@123')


await page.locator('[onclick="logIn()"]').click()
await page.waitForTimeout(12000)

//validate username

let user = await page.locator('[id="nameofuser"]').textContent()
await expect(user).toEqual("Welcome keerthisai")

//multiple web elements

let products = await page.$$('//div//div//div//div//h4//a')
for (const element of products){

  let text = await element.innerText()
  console.log(text)
}

 })



 



    
