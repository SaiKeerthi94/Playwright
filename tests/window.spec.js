 
 import {test, expect, chromium, webkit, firefox} from "@playwright/test"


 //we are not calling any fixture here
 test("Handling window 1" , async ()=>{

   //browser
    const browser = await chromium.launch({headless : false , channel:"msedge" , slowMo: 1500})

    //window
    //new context will communicate with the browser
    const context = await browser.newContext({permissions : []})

   //tab1
    //new page is a tab
    const page1 = await context.newPage()

   await page1.goto('https://demoblaze.com/')

   await page1.locator('[id="login2"]').click()

   await page1.locator('[id="loginusername"]').fill('keerthisai')

   await page1.locator('[id="loginpassword"]').fill('sai@123')

   await page1.waitForSelector('[onclick="logIn()"]')

   await page1.locator('[onclick="logIn()"]').click()

   await page1.waitForTimeout(2000)

   //tab2

   const page2 = await context.newPage()

   await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page2.getByPlaceholder('Username').fill('Admin')

   await page2.getByPlaceholder('Password').fill('admin123')

   await page2.getByRole("button" , {name : "Login"}).click()


 })

 test.only("Handling single page appliaction" , async({browser})=>{


   // window
   const context = await browser.newContext()

   //tab
   const page = await context.newPage()

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await page.waitForLoadState('load')
   await page.waitForTimeout(3000)

   //click the link

   // approach 1
   //new page is an array as it is storing multiple promises
   //do not use await in line #69 and 70 as we are using await keyword for the entire promise in 66. 
   // It is said that it is waiting for a tab to open in a window in 69 and performing the click action in 70 which is 2 events 
   // otherwise called as promises. Hence, we are handling the event first and then the click action.
   const [newPage] = await Promise.all([
       context.waitForEvent('page'),
       page.locator('text=OrangeHRM, Inc').click()
   ])

   await newPage.locator('text=Allow all').click()
   await newPage.waitForTimeout(2000)

   await newPage.locator('[name="EmailHomePage"]').fill('keerthi@gmail.com')
   await newPage.waitForTimeout(2000)

   await newPage.locator('[value="Start Your 30 Day Free Trial"]').first().click()

   await newPage.waitForLoadState('load')

   await newPage.goBack()
   await newPage.waitForTimeout(2000)

   await newPage.reload()
   await newPage.waitForTimeout(2000)

   await newPage.goForward()
   await newPage.waitForTimeout(2000)



})