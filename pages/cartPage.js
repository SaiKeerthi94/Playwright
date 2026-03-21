
 import {expect} from "@playwright/test"

import { demoblaze } from "../testdata/testData1"

 
 export class Cartpage{

    constructor(page){

        this.page = page
        this.products = '//div//h4//a'
        this.addtocartbtn = '[onclick="addToCart(6)"]'

    }

    async Printproducts(){

        let productslist = await this.page.$$(this.products)

        for (const element of productslist) {

            let text = await element.textContent()
            console.log(text)


        }

       await this.page.waitForLoadState('load')
    }

     async selectProduct(){
       let product = await this.page.locator(this.products)
       await product.filter({ hasText : demoblaze.productnew }).click()
       //await this.page.waitForTimeout(3000)

       
       await this.page.once('dialog' , async (a)=>{
       await expect(a.message()).toContain("Product added")
        await a.accept()

       // await this.page.locator(this.addtocartbtn).click()
        
       })

       await this.page.locator(this.addtocartbtn).click()
            
        }


 }