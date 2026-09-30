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
  5  |     const response = await request.post('https://gorest.co.in/public/v2/users',{
  6  |         headers:{
  7  |             'Accept': 'application/json',
  8  |             "Content-Type": "application/json",
  9  |             "Authorization":"Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb"
  10 |             },
  11 |             data:{
  12 |                 "name":"Rnaga",
  13 |                 "email":"Rana1@gmail.com",
  14 |                 // "gender":"Male",
  15 |                 // "status":"Active"
  16 |                 "gender":"male",
  17 |                  "status":"active"
  18 |             }
  19 |     })
  20 |     console.log(`Status code ${response.status()}`)
  21 |     console.log(`Status message ${response.statusText()}`)
> 22 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |     expect(response.statusText()).toBe('Created')
  24 |     // console.log(`Status code ${response.status()}`)
  25 |     // console.log(`Status message ${response.statusText()}`)
  26 |     //parse into json
  27 |     const userdata = await response.json()
  28 |     const userid = await userdata.id
  29 |     const username = await userdata.name
  30 |     const useremail = await userdata.email
  31 |     console.log(`new user created ${username}`)
  32 |     console.log(`new email created ${useremail}`)
  33 |     console.log(`new UserID created ${userid}`)
  34 |     console.log('-------------------------------------')
  35 |     console.log(userdata)
  36 | 
  37 | })
  38 | 
  39 | test('Create new User in gorest server',async({request})=>{
  40 | const resp = await request.post('https://gorest.co.in/public/v2/users',{
  41 | headers:{
  42 | //'Accept': 'application/json',
  43 | 'Content-Type': 'application/json', 
  44 | 'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
  45 | },
  46 | data:{
  47 | "name":"Akhilesh",
  48 | "email":"Ak678@test2.com",
  49 | "gender":"male",
  50 | "status":"active"
  51 | }
  52 | 
  53 | })
  54 | console.log(`status code is ${resp.status()}`)
  55 | console.log(`status Message is ${resp.statusText()}`)
  56 | expect(resp.status()).toBe(201)
  57 | expect(resp.statusText()).toBe('Created')
  58 | // console.log(`status code is ${resp.status()}`)
  59 | // console.log(`status Message is ${resp.statusText()}`)
  60 | const newUser =  await resp.json()
  61 | const userId = await newUser.id
  62 | const useremail = await newUser.email
  63 | const name = await newUser.name
  64 |   console.log(`Created User with ID: ${userId}`)
  65 |    console.log(`Created User with email: ${useremail}`)
  66 |    console.log(`Created User with name: ${name}`)
  67 |    console.log(newUser)
  68 | })
```