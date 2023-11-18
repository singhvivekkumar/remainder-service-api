const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');


const startServer = () => {
	
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.listen(PORT, ()=> {
		console.log(`server started on PORT : ${PORT}`);
		sendBasicEmail(
			'Support <support@gmail.com>',
			'singhvivekkumar309@gmail.com',
			'testing service',
			'testing reminder service for airline booking system'
		);
	})

}

startServer();