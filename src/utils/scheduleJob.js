const cron = require('node-cron');

const sender = require('../config/emailConfig');
const { EmailService } = require('../services/index');

const emailService = new EmailService();
const job = async () => {

	cron.schedule('*/2 * * * *', async () => {
		const response = await emailService.fetchPendingEmail();
		response.forEach( (email) => {
			sender.sendMail({
				from: "Notification <support@airline.com>",
				to: email.recepientEmail,
				subject: email.subject,
				text: email.content
			}, async (error, data) => {
				if (error) {
					console.log(error);
				} else {
					console.log(data);
					await emailService.updateTicket(email.id, {status: "SUCCESS"});
				}
			}
			);
		});
		console.log('running a task BEFORE two minutes');
		console.log(response);
		console.log('running a task AFTER two minutes');
	});
}

module.exports = {
	job
}