

import {test , expect  } from "@playwright/test"

test ("Handling actions" , async function ({page}){

//nbrowser launch

await page.goto('https://testautomationpractice.blogspot.com/')

// radio button
//approach 1- using the text content of radio button

await page.locator('[for="female"]').click()
await expect(page.locator('[for="female"]')).toBeChecked()
await page.waitForTimeout(3000)

//approach 2- using the radio button
await page.locator('[id="male"]').check()
await expect(page.locator('[id="male"]').isChecked()).toBeTruthy() // this line checks if the selected radio button is true or not.
await page.waitForTimeout(3000)

//checkbox
// select single checkbox

await page.locator('[value="sunday"]').check()
await expect(page.locator('[value="sunday"]')).toBeChecked()
await page.waitForTimeout(2000)

// select multiple checkboxes

let checkboxes = [await page.locator('#monday'), page.locator("id=tuesday"), page.locator("label:has-text('Friday')")]

for (const element of checkboxes)
{
    await element.check()
    await expect(element).toBeChecked()
}

await page.waitForTimeout(2000)


// de select checkboxes

for (const element of checkboxes)
{
    await element.uncheck()
    await expect(element).not.toBeChecked()
}

await page.waitForTimeout(2000)

})

//dropdown
//test.only allows to run only the below content from this file in browser

 test ("handling dropdown" , async function ({page}){

   // test.setTimeout(12 * 10000)

//browser launch
await page.goto('https://testautomationpractice.blogspot.com/')

//scroll
await page.locator('[id="country"]').scrollIntoViewIfNeeded()

//it can be done in 4 ways
//selectoption is used only when there is an option tag inside a select tag
//1 visible text- same as the text content in option tag

await page.locator('[id="country"]').selectOption("India")
await page.waitForTimeout(3000)

//2 value- give the content of value in option tag

await page.locator('[id="country"]').selectOption({value : "germany" });
await page.waitForTimeout(3000)

//3 label- give the text content in option tag

await page.locator('[id="country"]').selectOption({label : "China" });
await page.waitForTimeout(3000)

//4 index

await page.locator('[id="country"]').selectOption({index : 5});
await page.waitForTimeout(3000)

//assertion- parent tag id and child tag option

await expect (page.locator('[id="country"] option')).toHaveCount(10)
await expect ((await page.$$('[id="country"] option')).length).toBe(10)

 })







