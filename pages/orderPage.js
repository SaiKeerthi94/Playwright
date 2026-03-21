import { demoblaze } from "../testdata/testData1"

 

 export class Order{

    constructor(page){
    
        this.page = page
        this.cartbutton = '//div//li//a[text()="Cart"]'
        this.placeorder = '[class="btn btn-success"]'
        this.name = '[id="name"]'
        this.country = '[id="country"]'
        this.city = '[id="city"]'
        this.creditcard = '[id="card"]'
        this.month = '[id="month"]'
        this.year = '[id="year"]'
        this.purchasebtn = '[onclick="purchaseOrder()"]'

    }

    async cart(){

        await this.page.locator(this.cartbutton).click()
        await this.page.waitForTimeout(3000)
    }

    async placeorderfn(){

        await this.page.locator(this.placeorder).click()
    }

    async filldetails(){

      await  this.page.locator(this.name).fill(demoblaze.name)
        await this.page.locator(this.country).fill(demoblaze.country)
       await this.page.locator(this.city).fill(demoblaze.city)
      await  this.page.locator(this.creditcard).fill(demoblaze.creditcard)
       await this.page.locator(this.month).fill(demoblaze.month)
       await this.page.locator(this.year).fill(demoblaze.year)
       await this.page.click(this.purchasebtn)

        
    
    }
 }