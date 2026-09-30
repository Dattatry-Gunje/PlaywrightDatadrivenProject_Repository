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
  7  |             'Accept': 'application/json',
  8  |             "Content-Type": "application/json",
  9  |             "Authorization":"Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb"
  10 |             },
  11 |             data:{
  12 |                 "name":"Rnaga",
  13 |                 "email":"Rana@gmail.com",
  14 |                 "gender":"Male",
  15 |                 "status":"Active"
  16 |             }
  17 |     })
  18 |     
> 19 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |     expect(response.statusText()).toBe('Created')
  21 |     console.log(`Status code ${response.status()}`)
  22 |     console.log(`Status message ${response.statusText()}`)
  23 |     //parse into json
  24 |     const userdata = await response.json()
  25 |     const userid = await userdata.id
  26 |     const username = await userdata.name
  27 |     const useremail = await userdata.email
  28 |     console.log(`new user created ${username}`)
  29 |     console.log(`new email created ${useremail}`)
  30 |     console.log(`new UserID created ${userid}`)
  31 |     console.log('-------------------------------------')
  32 |     console.log(userdata)
  33 | 
  34 | })
  35 | 
  36 | test('Create new User in gorest server',async({request})=>{
  37 | const resp = await request.post('https://gorest.in/public/v2/users',{
  38 | headers:{
  39 | //'Accept': 'application/json',
  40 | 'Content-Type': 'application/json', 
  41 | 'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
  42 | },
  43 | data:{
  44 | "name":"Akhilesh",
  45 | "email":"Ak678@test2.com",
  46 | "gender":"male",
  47 | "status":"active"
  48 | }
  49 | 
  50 | })
  51 | expect(resp.status()).toBe(201)
  52 | expect(resp.statusText()).toBe('Created')
  53 | console.log(`status code is ${resp.status()}`)
  54 | console.log(`status Message is ${resp.statusText()}`)
  55 | const newUser =  await resp.json()
  56 | const userId = await newUser.id
  57 | const useremail = await newUser.email
  58 | const name = await newUser.name
  59 |   console.log(`Created User with ID: ${userId}`)
  60 |    console.log(`Created User with email: ${useremail}`)
  61 |    console.log(`Created User with name: ${name}`)
  62 |    console.log(newUser)
  63 | })
```