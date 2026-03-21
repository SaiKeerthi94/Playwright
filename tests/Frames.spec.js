 
 import { test, expect } from "@playwright/test";

 test (" Handling Frames" , async function ({page}){

//browser launch

await page.goto("https://ui.vision/demo/webtest/frames/")

//Frame count

let framecount = await page.frames()
console.log(framecount.length)

//approach 1 - to handle frames

await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})


 })