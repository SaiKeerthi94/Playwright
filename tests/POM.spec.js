

import {test,expect} from "@playwright/test"


//we are importing the classname in the below
import {loginpage} from "../pages/loginPage"

import {Cartpage} from "../pages/cartPage"

import {Order} from "../pages/orderPage"

test ("Page object model" , async ({page})=>{

    const lp= new loginpage(page)

    await lp.navigatebrowser()
    await lp.logincreds()

    const cp = new Cartpage(page)

        await cp.Printproducts()
        await cp.selectProduct()

   const op = new Order(page)

   await op.cart()
   await op.placeorderfn()
   await op.filldetails()

})

// add "test" : "npx playwright test --project=chromium --headed" in package.json file under scripts
// command to run in terminal if the above is mentioned in json file
//npm run test filename