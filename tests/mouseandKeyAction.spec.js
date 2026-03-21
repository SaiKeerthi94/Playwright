 

 import { test , expect } from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

 test ("Handling mouse actions" , async function ({page}){


    // browser launch

    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll

    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // hover

    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)

    // laptop

    await page.locator('//a[text()="Laptops"]').click()
    await page.waitForTimeout(2000)


 })


 // doubleclick

 test ("Handling double click" , async function ({page}){

    //browser launch

   await page.goto('https://testautomationpractice.blogspot.com/')

    // scroll

    await page.locator('//div//h2[text()="Double Click"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //field1 to clear text

    await page.locator('[id="field1"]').clear()
    await page.waitForTimeout(2000)

    // fill text

    await page.locator('[id="field1"]').fill("Keerthi")
    await page.waitForTimeout(2000)

    // double click action

    await page.locator('//button[text()="Copy Text"]').dblclick()
    await page.waitForTimeout(2000)
 })

 // drag and drop

 test ("Handling drag and drop " ,  async function ({page}){

    // browser launch

    await page.goto('https://testautomationpractice.blogspot.com/')

    // scroll

    await page.locator("text=Drag and Drop").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //source
    let src = await page.locator('[id="draggable"]')

    // target

    let tar = await page.locator('[id="droppable"]')

    // approach 1

    //await page.dragAndDrop('[id="draggable"]' , '[id="droppable"]')
    //await page.waitForTimeout(2000)

    //approach 2

    //await src.dragTo(tar)
    //await page.waitForTimeout(2000)

    //approach 3

    await src.hover()
    await page.mouse.down()
    await tar.hover()
    await page.mouse.up()
    await page.waitForTimeout(2000)

 })

 // right click

 test("Handling right click" , async function ({page}){

    // browser launch
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    //right click- specify the click action

    await page.locator('//span[text()="right click me"]').click({button:'right'})

    //events handling

    await page.once('dialog' , async (a)=> {

        await expect(a.type()).toEqual('alert')
        await expect(a.message()).toContain('clicked: quit')
        await page.waitForTimeout(2000)
        await a.accept()
   })

        // click quit

        await page.click('//span[text()="Quit"]')
          await page.waitForTimeout(2000)
 


 })

 //keyboard actions

 test("Handling keyboard actions" , async function({page}){

    // browser launch

    await page.goto('https://gotranscript.com/text-compare')

    // scroll

    await page.mouse.wheel(0,250)

    // fill

    await page.locator('[name="text1"]').fill("Keerthi")

    //control+KeyA

    await page.keyboard.press('Control+A')

    //control C

    await page.keyboard.press('Control+KeyC')

    //Tab

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Control V

    await page.keyboard.press('Control+V')

    //compare button

    await page.locator('[id="recaptcha"]').press('Enter')

    //pause- since captach cannot be automated, we are using debug and performing the action manually in the browser

    await page.pause()

 })

//slider
 
  
test('Simple slider automation', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/')

  //scroll
  await page.locator('//div//h2[text()="Slider"]').scrollIntoViewIfNeeded()

  
  //get slider x and y position using boundingbox
  const box = await page.locator('[id="slider-range"]').boundingBox();
  await page.waitForTimeout(3000)

  await page.mouse.move(box.x + 30, box.y + box.height/2);
  await page.waitForTimeout(3000)
  await page.mouse.down();
  await page.waitForTimeout(3000)
  await page.mouse.move(box.x + 120, box.y + box.height/2);
  await page.waitForTimeout(3000)
  await page.mouse.up();
  await page.waitForTimeout(3000)
});

test.only('Move range from 150 to 200', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // scroll to slider section
  await page.locator('//div//h2[text()="Slider"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  const leftHandle = page.locator('[class="ui-slider-handle ui-corner-all ui-state-default ui-state-hover"]').nth(0);
  const rightHandle = page.locator('[class="ui-slider-handle ui-corner-all ui-state-default ui-state-hover"]').nth(1);

  // Move left handle (150 → little right)
  await leftHandle.hover();
  await page.waitForTimeout(3000);

  await page.mouse.down();
  await page.waitForTimeout(3000);

  await page.mouse.move(450, 500);   // drag slightly right
  await page.waitForTimeout(3000);

  await page.mouse.up();


  // Move right handle (300 → 200)
  await rightHandle.hover();
  await page.waitForTimeout(2000);

  await page.mouse.down();
  await page.waitForTimeout(2000);

  await page.mouse.move(380, 500);   // drag left
  await page.waitForTimeout(2000);

  await page.mouse.up();

});