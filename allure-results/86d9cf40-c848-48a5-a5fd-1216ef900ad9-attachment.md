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
  11 |                 'name':'Akhilesh',
  12 |                 'email':'Akhi@gmail.com',
  13 |                 'gender':'Male',
  14 |                 'status':'Active'
  15 |             }
  16 |     })
  17 |     console.log(`Status code ${response.status()}`)
  18 |     console.log(`Status message ${response.statusText()}`)
> 19 |     expect(response.status()).toBe(201)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |     expect(response.statusText()).toBe('Created')
  21 |     //parse into json
  22 |     const userdata = await response.json()
  23 |     const username = await userdata.name
  24 |     const useremail = await userdata.email
  25 |     console.log(`new user created ${username}`)
  26 |     console.log(`new email created ${useremail}`)
  27 |     console.log('-------------------------------------')
  28 |     console.log(userdata)
  29 | 
  30 | })
```