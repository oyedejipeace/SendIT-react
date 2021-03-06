# SendIT

 [![Build Status](https://travis-ci.org/oyedejipeace/SendIT-react.svg?branch=develop)](https://travis-ci.org/oyedejipeace/SendIT-react)[![Coverage Status](https://coveralls.io/repos/github/oyedejipeace/SendIT-react/badge.svg?branch=develop)](https://coveralls.io/github/oyedejipeace/SendIT-react?branch=develop)



## Table of Contents

* [Project Overview](#Project-Overview)
* [Features](#Features)
* [Demo](#demo)
* [Built with](#built-with)
* [Known Issues](#Known-issues)
* [Installation](#Installation)
* [Testing the app](#Testing-the-app)
* [Contributing](#contributing)
* [License](#License)

## Project Overview
**SendIT** is a courier service that helps users deliver parcels to different destinations. SendIT  provides courier quotes based on weight categories. it was built from scratch using `Html` , `Css` , `react` and `Node.js`

## Features

- Users can create an account and log in,
- A user can create parcel delivery order,
- A user can see history of Parcel delivery orders,
- A user can see the details of a parcel delivery order such as the pickup location, destination, and price.e.t.c  
- A user can cancel a parcel delivery order,
- A user can change the destination of a parcel delivery order is yet to be delivered
- The admin can see list of parcel delivery orders,
- The admin change present location of parcel delivery orders,
- The admin can mark orders as pending (in transit) or delivered.

## Demo

Visit [Repo on Github](https://github.com/oyedejipeace/SendIT-react)

## Built with
- `HTML 5`
- `CSS`
- `react`
- `Node.js`
- `Express framework`

##### Middle Wares
- `body-parser`
- `morgan`

 
 ## Known issues
Everything works as expected; However:
- Data structures were used to save data instead of a database, hence data gets
   erased once the server is restarted

## Installation

- $ git clone `https://github.com/oyedejipeace/SendIT-react.git`
- $ cd SendIT-react
- $ npm i , to install dependencies
- $ npm start, to start the server
Once the server starts-up, you can query the api at `http://localhost:5000/api/v1`.

## Testing the app

- $ git clone `https://github.com/oyedejipeace/SendIT-react.git`
- $ cd SendIT-react
- $ npm i , to install dependencies
- $ npm test, to test the app

## Contributing
>  Feel free to 🍴 fork this repository

>  👯 Clone this repository to your local machine using `https://github.com/oyedejipeace/SendIT-react.git`

> Make Contributions

> 🔃 Create a new pull request using `https://github.com/oyedejipeace/SendIT-react./compare`

## License
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

- **[MIT license](https://oyedejipeace.github.io/SendIT/UI/LICENSE.md)**
- Copyright 2018 © <a href="https://oyedejipeace.github.io/SendIT/UI" target="_blank">SendIT</a>

