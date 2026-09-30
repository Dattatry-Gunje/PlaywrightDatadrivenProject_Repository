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
  9  |             // "Authorization":"Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb"
  10 |             "Authorization":"Bearer 617ddcd4c46582eff178563583dcf96a1106537a5515a5ea87192040cf17d4c1"    
  11 |         },
  12 |             data:{
  13 |                 "name":"Rnaga",
  14 |                 "email":"Rana@gmail.com",
  15 |                 "gender":"Male",
  16 |                 "status":"Active"
  17 |             }
  18 |     })
  19 |     
> 20 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  21 |     expect(response.statusText()).toBe('Created')
  22 |     console.log(`Status code ${response.status()}`)
  23 |     console.log(`Status message ${response.statusText()}`)
  24 |     //parse into json
  25 |     const userdata = await response.json()
  26 |     const userid = await userdata.id
  27 |     const username = await userdata.name
  28 |     const useremail = await userdata.email
  29 |     console.log(`new user created ${username}`)
  30 |     console.log(`new email created ${useremail}`)
  31 |     console.log(`new UserID created ${userid}`)
  32 |     console.log('-------------------------------------')
  33 |     console.log(userdata)
  34 | 
  35 | })
  36 | 
  37 | test('Create new User in gorest server',async({request})=>{
  38 | const resp = await request.post('https://gorest.in/public/v2/users',{
  39 | headers:{
  40 | //'Accept': 'application/json',
  41 | 'Content-Type': 'application/json', 
  42 | 'Authorization': 'Bearer 81134a7a3ec7dd0418f844b007f1f35480fc75515545d2b9dda77d9df7a44cbb'
  43 | },
  44 | data:{
  45 | "name":"Akhilesh",
  46 | "email":"Ak678@test2.com",
  47 | "gender":"male",
  48 | "status":"active"
  49 | }
  50 | 
  51 | })
  52 | expect(resp.status()).toBe(201)
  53 | expect(resp.statusText()).toBe('Created')
  54 | console.log(`status code is ${resp.status()}`)
  55 | console.log(`status Message is ${resp.statusText()}`)
  56 | const newUser =  await resp.json()
  57 | const userId = await newUser.id
  58 | const useremail = await newUser.email
  59 | const name = await newUser.name
  60 |   console.log(`Created User with ID: ${userId}`)
  61 |    console.log(`Created User with email: ${useremail}`)
  62 |    console.log(`Created User with name: ${name}`)
  63 |    console.log(newUser)
  64 | })
```