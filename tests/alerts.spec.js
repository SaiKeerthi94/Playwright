 import { test,expect } from "@playwright/test";

 test ("Handling simple alerts" , async function ({page}){

    // browser launch
  await page.goto("https://testautomationpractice.blogspot.com/")

  // scroll

  await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()

  await page.on('dialog' , async (a) => {

    await expect(a.type()).toEqual('alert')
    await expect(a.message()).toContain("I am an alert box!")
    await page.waitForTimeout(1500)
    await a.accept()
  })
  await page.locator('[id="alertBtn"]').click()
 await page.waitForTimeout(3000)
 })


 
 test ("Handling confirmation alerts" , async function ({page}){

    // browser launch
  await page.goto("https://testautomationpractice.blogspot.com/")

  // scroll

  await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()

  await page.on('dialog' , async (a) => {

    await expect(a.type()).toEqual('confirm')
    await expect(a.message()).toContain("Press a button!")
    await page.waitForTimeout(1500)
   // await a.accept()
   await a.dismiss()
  })
  await page.locator('[id="confirmBtn"]').click()
 await page.waitForTimeout(3000)
 })


  test.only ("Handling prompt alerts" , async function ({page}){

    // browser launch
  await page.goto("https://testautomationpractice.blogspot.com/")

  // scroll

  await page.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()

  await page.once('dialog' , async (a) => {

    await expect(a.type()).toEqual('confirm')
    await expect(a.message()).toContain("Press a button!")
    await expect(a.defaultValue()).toContain("Please enter your name:")
    await page.waitForTimeout(1500)
    await a.accept("Keerthi")
   //await a.dismiss()
  })
  await page.locator('[id="promptBtn"]').click()
 await page.waitForTimeout(3000)
 })