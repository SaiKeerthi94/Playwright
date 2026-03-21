 
 import { test , expect } from "@playwright/test";

 test ("Handling multi dropdown" , async function ({page}){

    //browser launch

    await page.goto('https://testautomationpractice.blogspot.com/')

    // scroll

    await page.locator('[id="colors"]').scrollIntoViewIfNeeded()

    //select multiple values

    await page.locator('[id="colors"]').selectOption(["Red" , "Green" , "Yellow" , "Red" , "Green"])
    await page.waitForTimeout(5000)

    //de select the values
    await page.locator('[id="colors"]').selectOption([])
     await page.waitForTimeout(5000)
    
    //select duplicate values

    await page.locator('[id="colors"]').selectOption([{label : "Red"} , {value : "blue"} , {index : 4}])
     await page.waitForTimeout(5000)



 })


 //dynamic dropdown

 test.only("Handling dynamic dropdown" , async function ({page}){

    // browser launch
    await page.goto("https://ticketnew.com/movies/chennai")

    // search click
    await page.locator('//div[text()="Search for movies, cinemas and more"][1]').click()
    //(//div[text()="Search for movies, cinemas and more"])[1]
    //await page.locator().first- need not pass any index. It fetches the first one.(last,nth mentods)
    await page.waitForTimeout(3000)

    //search movie

    await page.locator('//div[@class="dds-flex dds-flex-col dds-gap-1 dds-w-full"]//input').fill("man")
    await page.waitForTimeout(5000)

    //click movie

    let multimovies = await page.$$('//div[contains(@class,"dds-flex dds-flex-col dds-gap-[4px]")]//h5')

    for (const element of multimovies){

        let text = await element.textContent()

        if (text == "Vasool Mannan"){

            await element.click()
            break
        }
            

    }

        
 })