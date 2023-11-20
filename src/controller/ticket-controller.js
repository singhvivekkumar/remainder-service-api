const { EmailService } = require('../services/index');

const emailService = new EmailService();
const create = async (req, res) => {
	try {
		const response = await emailService.createNotification(req.body);
		return res.status(201).json({
			data: response,
			success: true,
			message: "successfully create a email notification reminder",
			err: {}
		})
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to register a email notification reminder",
			err: {error}
		})
	}
}

module.exports = {
	create
}