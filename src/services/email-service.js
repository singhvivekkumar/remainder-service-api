const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
	try {
		const composeMail = {
			from: mailFrom,
			to: mailTo,
			subject: mailSubject,
			text: mailBody,
		}
		const response = await sender.sendMail(composeMail, (error, info)=> {
			if (error) {
				throw error;
			}
			if (info) {
				console.log( info);
			}
			console.log("nothing",error);
		})
		console.log(response);
		return response
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	sendBasicEmail,
}

/**
 * SMPT -> a@borrows.com
*/