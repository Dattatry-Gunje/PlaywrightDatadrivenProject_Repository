# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: post.spec.ts >> Create new user in gorest server
- Location: tests\post.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | import { request } from "http";
  3  | 
  4  | test('Create new user in gorest server',async({request})=>{
  5  |     const response = await request.post('https://gorest.in/public/v2/users',{
  6  |         headers:{
  7  |             "Content-Type": "application/json",
  8  |             "Authorization":"Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb"
  9  |             },
  10 |             data:{
  11 |                 "name":"Rnaga",
  12 |                 "email":"Rana@gmail.com",
  13 |                 "gender":"Male",
  14 |                 "status":"Active"
  15 |             }
  16 |     })
  17 |     
> 18 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  19 |     expect(response.statusText()).toBe('Created')
  20 |     console.log(`Status code ${response.status()}`)
  21 |     console.log(`Status message ${response.statusText()}`)
  22 |     //parse into json
  23 |     const userdata = await response.json()
  24 |     const userid = await userdata.id
  25 |     const username = await userdata.name
  26 |     const useremail = await userdata.email
  27 |     console.log(`new user created ${username}`)
  28 |     console.log(`new email created ${useremail}`)
  29 |     console.log(`new UserID created ${userid}`)
  30 |     console.log('-------------------------------------')
  31 |     console.log(userdata)
  32 | 
  33 | })
  34 | 
  35 | test('Create new User in gorest server',async({request})=>{
  36 | const resp = await request.post('https://gorest.in/public/v2/users',{
  37 | headers:{
  38 | //'Accept': 'application/json',
  39 | 'Content-Type': 'application/json', 
  40 | 'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
  41 | },
  42 | data:{
  43 | "name":"Akhilesh",
  44 | "email":"Ak@test2.com",
  45 | "gender":"male",
  46 | "status":"active"
  47 | }
  48 | 
  49 | })
  50 | expect(resp.status()).toBe(201)
  51 | expect(resp.statusText()).toBe('Created')
  52 | console.log(`status code is ${resp.status()}`)
  53 | console.log(`status Message is ${resp.statusText()}`)
  54 | const newUser =  await resp.json()
  55 | const userId = await newUser.id
  56 | const useremail = await newUser.email
  57 | const name = await newUser.name
  58 |   console.log(`Created User with ID: ${userId}`)
  59 |    console.log(`Created User with email: ${useremail}`)
  60 |    console.log(`Created User with name: ${name}`)
  61 |    console.log(newUser)
  62 | })
```