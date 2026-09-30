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
  20 |     
> 21 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |     expect(response.statusText()).toBe('Created')
  23 |     console.log(`Status code ${response.status()}`)
  24 |     console.log(`Status message ${response.statusText()}`)
  25 |     //parse into json
  26 |     const userdata = await response.json()
  27 |     const userid = await userdata.id
  28 |     const username = await userdata.name
  29 |     const useremail = await userdata.email
  30 |     console.log(`new user created ${username}`)
  31 |     console.log(`new email created ${useremail}`)
  32 |     console.log(`new UserID created ${userid}`)
  33 |     console.log('-------------------------------------')
  34 |     console.log(userdata)
  35 | 
  36 | })
  37 | 
  38 | test('Create new User in gorest server',async({request})=>{
  39 | const resp = await request.post('https://gorest.co.in/public/v2/users',{
  40 | headers:{
  41 | //'Accept': 'application/json',
  42 | 'Content-Type': 'application/json', 
  43 | 'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
  44 | },
  45 | data:{
  46 | "name":"Akhilesh",
  47 | "email":"Ak678@test2.com",
  48 | "gender":"male",
  49 | "status":"active"
  50 | }
  51 | 
  52 | })
  53 | console.log(`status code is ${resp.status()}`)
  54 | console.log(`status Message is ${resp.statusText()}`)
  55 | expect(resp.status()).toBe(201)
  56 | expect(resp.statusText()).toBe('Created')
  57 | // console.log(`status code is ${resp.status()}`)
  58 | // console.log(`status Message is ${resp.statusText()}`)
  59 | const newUser =  await resp.json()
  60 | const userId = await newUser.id
  61 | const useremail = await newUser.email
  62 | const name = await newUser.name
  63 |   console.log(`Created User with ID: ${userId}`)
  64 |    console.log(`Created User with email: ${useremail}`)
  65 |    console.log(`Created User with name: ${name}`)
  66 |    console.log(newUser)
  67 | })
```