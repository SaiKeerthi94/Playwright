 
 import {expect} from "@playwright/test"

 import {demoblaze} from "../testdata/testData1"

export class loginpage{

    constructor (page){

        this.page = page
        this.logintxt = '[id="login2"]'
        this.name = '[id="loginusername"]'
        this.pwd = '[id="loginpassword"]'
        this.loginbtn = '[onclick="logIn()"]'


        }

        async navigatebrowser(){

            await this.page.goto('')

            // add the url into playwright.config.js file under use:  
            // baseURL : 'https://demoblaze.com/' , 
        }

        async logincreds(){

            await this.page.locator(this.logintxt).click()
            await this.page.locator(this.name).fill(demoblaze.username)
            await this.page.locator(this.pwd).fill(demoblaze.password)
            await this.page.locator(this.loginbtn).click()

            await expect(this.page.locator(this.loginbtn)).toBeVisible()
           // await this.page.waitFortimeout(2000)

        }
    }
 
    
