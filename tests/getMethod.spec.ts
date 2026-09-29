import test, { expect } from "@playwright/test";
import { request } from "http";

test('Fetch all Users from gorest Server',async({request})=>{
    //create obejct for rquest
    const response = await request.get('https://gorest.in/public/v2/users',
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
            }

        })
        //get status code
        console.log(`status Code is ${response.status()}`)
        console.log(`status message ${response.statusText()}`)
        await expect(response.status()).toBe(200)
        await expect(response.statusText()).toBe('OK')
        // Parse JSON response body
        const users = await response.json();
        expect(Array.isArray(users)).toBeTruthy();
        console.log('Total Users Fetched:', users.length);
        console.log(users)




})