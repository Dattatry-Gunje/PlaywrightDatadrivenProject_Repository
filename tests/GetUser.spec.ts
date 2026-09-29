import test, { expect } from "@playwright/test";
import { request } from "http";

test('Fetch Specific User from go rest server',async({request})=>{
    const response = await request.get('https://gorest.in/public/v2/users/1003',{
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
        }
    })
    console.log(`status code ${response.status()}`)
    console.log(`status code ${response.statusText()}`)
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    //parse into json
    const user = await response.json()
    console.log(user)
})