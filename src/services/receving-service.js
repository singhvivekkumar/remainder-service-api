const EmailService = require('./email-service')

const services = async (data) => {
	try {
		const emailService = new EmailService();
		await emailService.createNotification(data);
	} catch (error) {
		throw { error: " error in service "}
	}
}

module.exports = services;