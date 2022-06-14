
# Online Ecommerce App

This is an online ecommece shop build with Node, Express and MongoDB.
It has following features. 


## Features

- Login and signup
- Reset Password
- Session and Cookies
- Adding and deleting products
- Validation on input fields
- Sending automatic email on signup
- Stripe payment gateway
- Automatic invoice generation after order
- Pagination on products list page
- File uploads and downloads
- And many more ....

## Main technologies and framework used

- Node.js
- Express
- MongoDB
- Mongoose


## Requirements

If you want to run this app in your project then following things must be installed in your system

- Node.js
- MongoDB


## Installation

Follow the steps below to run the app in your system

1. Clone the repository
`https://github.com/afzalimamias/complete-node-ecommerce.git`

2. Open the project in VS code or any other code editor.
3. Run `npm intall` in terminal to download all the dependencies
4. Get Mongodb atlas url or use your local database
4. Create a `.env` file in the root directory
5. Run command `npm start` to run the code.

### .env file should contain the following data

1. SENDGRID_API_KEY=(Add your sendgrid api key for email sending)
2. SESSION_SECRET_KEY=(Put any session secret string you want)
3. STRIPE_API_KEY=(Add Your Stripe API Key)

If you are using Mongodb atlas then also put 

4. MONGO_USERID=(Atlas user id)
5. MONGO_PASSWORD=(atlas password)

If you are using local database then replace MONGODB_URI in `app.js` file with `mongodb://localhost:27017/shop`

## This app is live on Heroku

This app is hosted on heroku. You can check this app here 
https://node-shop-afzal.herokuapp.com/
