import test, { expect } from "@playwright/test";
import { request } from "http";

test('Create new user in gorest server',async({request})=>{
    const response = await request.post('https://gorest.in/public/v2/users',{
        headers:{
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization":"Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb"
            },
            data:{
                "name":"Rnaga",
                "email":"Rana@gmail.com",
                "gender":"Male",
                "status":"Active"
            }
    })
    
    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe('Created')
    console.log(`Status code ${response.status()}`)
    console.log(`Status message ${response.statusText()}`)
    //parse into json
    const userdata = await response.json()
    const userid = await userdata.id
    const username = await userdata.name
    const useremail = await userdata.email
    console.log(`new user created ${username}`)
    console.log(`new email created ${useremail}`)
    console.log(`new UserID created ${userid}`)
    console.log('-------------------------------------')
    console.log(userdata)

})

test('Create new User in gorest server',async({request})=>{
const resp = await request.post('https://gorest.in/public/v2/users',{
headers:{
//'Accept': 'application/json',
'Content-Type': 'application/json', 
'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
},
data:{
"name":"Akhilesh",
"email":"Ak678@test2.com",
"gender":"male",
"status":"active"
}

})
expect(resp.status()).toBe(201)
expect(resp.statusText()).toBe('Created')
console.log(`status code is ${resp.status()}`)
console.log(`status Message is ${resp.statusText()}`)
const newUser =  await resp.json()
const userId = await newUser.id
const useremail = await newUser.email
const name = await newUser.name
  console.log(`Created User with ID: ${userId}`)
   console.log(`Created User with email: ${useremail}`)
   console.log(`Created User with name: ${name}`)
   console.log(newUser)
})