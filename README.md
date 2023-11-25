# Airline - API Gateway

I have built a backend system that support multiple feature of airline company. 


This api gateway is backend for frontend

` FRONT-END => MIDDLE-END => BACK-END `

## Introduction

This project follow microservice architecture and it has four services for specific logic and one api gateway where all repository mention below.

* [API Gateway](https://github.com/singhvivekkumar/api-gateway.git)
* [Authentication Service](https://github.com/singhvivekkumar/auth-service-api)
* [Flights Serivce](https://github.com/singhvivekkumar/flight-service-api)
* [Booking Service](https://github.com/singhvivekkumar/booking-service-api)
* [Reminder Service](https://github.com/singhvivekkumar/reminder-service-api)


### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MySql](https://www.mysql.com/) This is an open-source relational database management system (RDBMS) that is widely used for managing and organizing data.
* [Sequelize ORM](https://sequelize.org/) This is a popular Object-Relational Mapping (ORM) library for Node.js. It provides a way to interact with relational databases such as MySQL, PostgreSQL, SQLite, and MSSQL using JavaScript..
* [Sequelize cli](https://sequelize.org/docs/v7/cli/) The Sequelize Command Line Interface (CLI) is a powerful tool for working with Sequelize, which is a promise-based Node.js ORM (Object-Relational Mapping) for PostgreSQL, MySQL, SQLite, and MSSQL.
<!-- * []() -->

## Environment Setup:

### Prerequisites:

**Please note: You make sure that all the service working properly before initialize `API Gateway`.

1. Clone the repository:

   ```shell
   git clone https://github.com/singhvivekkumar/reminder-service-api
   ```

2. Move to the backend folder:

   ```shell
   cd reminder-service-api
   ```

3. Install and set up Docker.

	```shell
   npm install
   ```

### Create a `.env` file in the project's root directory.

The `.env` file should contain the following environment variables:

```shell
PORT=3003
EMAIL_ID=<USER_EMAIL_ID>
EMAIL_PASS=<USER_PASSWORD>
MESSAGE_BROKER_URL='amqp://localhost' #local server in your machine
EXCHANGE_NAME=AIRLINE_BOOKING
BINDING_KEY=REMINDER_BINDING_KEY
```


### Start the Backend Server:

To start the backend server, run the following command:

```shell
npm start
```

## REST API

### Request to test api gateway

`GET http://localhost:3005/api/home`

### Response
{
  "message": "successfully hitted api gateway"
}

### Request to signup in airline

POST: `http://localhost:3005/auth/api/v1/signup``
body: `{
		email: test@gamil.com,
		password: 13245768
	}`


### Response to signin in airline

    HTTP/1.1 201 Ok
    Status: 404 Not Found
    Connection: keep-alive
    Content-Type: application/json

    {
    	"data": {
			"id": 8,
			"email": "<EMAIL_ID>",
			"password": "<ENCRYPTED_PASSWORD>",
			"updatedAt": "2023-11-24T18:27:28.189Z",
			"createdAt": "2023-11-24T18:27:28.189Z"
		},
    	"success": true,
    	"message": "Successfully user signed in website",
    	"err": {}
	}

### Request to signup in airline

`POST http://localhost:3005/auth/api/v1/signin
body: {
	email: test@gamil.com,
	password: 13245768
}
`

### Response to signin in airline

    HTTP/1.1 200 Ok
    Status: 404 Not Found
    Connection: keep-alive
    Content-Type: application/json

    {
    	"data": <JWT_TOKEN>,
    	"success": true,
    	"message": "Successfully user signed in website",
    	"err": {}
	}


Congratulations! Your backend is now running at http://localhost:3005/.