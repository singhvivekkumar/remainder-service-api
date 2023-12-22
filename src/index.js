const express = require('express');
const bodyParser = require('body-parser');

const { PORT, BINDING_KEY } = require('./config/serverConfig');
const apiV1Router = require('./routes/index');
const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const { RecevingService } = require('./services');

const startServer = async () => {
	
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api',apiV1Router);

	// this right place to create channel object for easy route 
	const channel = await createChannel();
	await subscribeMessage(channel, RecevingService, BINDING_KEY);

	app.listen(PORT, async ()=> {
		console.log(`server started on PORT : ${PORT}`);

		// sendBasicEmail(
		// 	'Support <support@gmail.com>',
		// 	'309singhvivekkumar@gmail.com',
		// 	'testing service',
		// 	'testing reminder service for airline booking system'
		// );

		// const response = new EmailService();
		// const res = await response.fetchPendingEmail();
		// const job2min = await job();
		// console.log(job2min);


		
	})
}

startServer();