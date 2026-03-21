 
import {test, expect} from "@playwright/test"
import { request } from "node:http"

let token
let baseURL="https://dummyjson.com"

test ("Get all users" , async ({request})=>{

const response = await request.get(baseURL+"/users")

const body = await response.json()
console.log(body)

await expect(await response.status()).toBe(200)


})

test ("Handling login user and get tokens" , async ({request})=>{

const response = await request.post(baseURL+"/user/login" , {
    headers : {

        "Content-Type" : "application/json"
    },

    data : {
        "username" : 'emilys',
        password : 'emilyspass',

    }
})

const body = await response.json()
console.log(body)

token = await body.accessToken

await expect(await response.status()).toBe(200)


})

test("get current authenticated user", async ({request})=>{

    const response = await request.get(baseURL+"/user/me" , {

        headers : {

            "Authorization": "Bearer "+token
        }
    })

    const body = await response.json()
    console.log(body)

    await expect(await response.status()).toBe(200)

     
})