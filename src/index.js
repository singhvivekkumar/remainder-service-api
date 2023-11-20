const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiV1Router = require('./routes/index');
const { EmailService } = require('./services/index');
const { job } = require('./utils/scheduleJob');

const startServer = () => {
	
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api',apiV1Router);

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
		const job2min = await job();
		console.log(job2min);


		
	})
}

startServer();