# invetoryAPP

## Application Features

invetoryAPP is an inventory management application, where an admin create, update, view and delete inventory. Registered users can also add inventory to thier cart.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Development](#development)

### API Deployment (Non-Persistent)

API is deployed at [https://inventory-app-v1.herokuapp.com/](https://inventory-app-v1.herokuapp.com/)

## Technologies

- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework
- [MongoDB](https://www.mongodb.com/) - Database

## Features

### Users

- Signup and Login
- Create inventory
- Modify inventory
- Delete inventory
- Add inventory to cart
- View all inventory
- View a single inventory

## API Endpoints

###

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>api/register</td> <td>User registers and enabled by default</td></tr>

<tr><td>POST</td> <td>api/login</td> <td>User login</td></tr>

<tr><td>GET</td> <td>api/users</td> <td>Get All Users</td></tr>

<tr><td>GET</td> <td>api/users/:userId</td> <td>Get a single user</td></tr>

<tr><td>PATCH</td> <td>api/editprofile</td> <td>User update profile</td></tr>

<tr><td>PATCH</td> <td>api/disableuser/:userId</td> <td>Only admin can  disable a user</td></tr>

<tr><td>PATCH</td> <td>api/enableuser/:userId</td> <td>Only admin can  enable a user</td></tr>

<tr><td>PATCH</td> <td>api/users/:userId</td> <td>Only admin can delete a user</td></tr>

<tr><td>POST</td> <td>api/inventory/</td> <td>Only admin can create an inventory</td></tr>

<tr><td>PATCH</td> <td>api/inventory/:inventoryId</td> <td>Only admin can update an inventory</td></tr>

<tr><td>DELETE</td> <td>api/inventory/:inventoryId</td> <td>Only admin can delete an inventory</td></tr>

<tr><td>POST</td> <td>/api/cart/:inventoryId</td><td> Only enabled userd can add inventory to cart</td></tr>

</table>

## Getting Started

### Installation

- git clone
  [InventoryAPP]https://github.com/marufdeen/inventoryAPP)
- Run `yarn install` or `npm install` to install packages
- Run `yarn run seed` or `npm run seed` to automatically seed admin into the database
- Run `yarn run dev` or `npm run dev` to start the server
- Navigate to [localhost:8080](http://localhost:8080/api) in browser to access the application

## Testing

#### Data

* User 

```sh
 {
 fullName: String,
 email: String,
 password: String,
 cinfirmPassword: String
}
```

* inventory

```sh
{
 name: String,
 price: Number,
 quantity: Number
}
```

* cart

```sh
 {
 quantity: Number
 }
```

#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:8080](http://localhost:8080/api) in
  [Postman](https://getpostman.com/) to access the application

- admin login details ( {email: favour@gmail.com, password: admin} )
