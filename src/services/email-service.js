const sender = require('../config/emailConfig');
const { TicketReposiotry } = require('../repository/index');

class EmailService {

	constructor() {
		this.ticketRepository = new TicketReposiotry();
	}

	async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
		try {
			const composeMail = {
				from: mailFrom,
				to: mailTo,
				subject: mailSubject,
				text: mailBody,
			}
			const response = await sender.sendMail(composeMail, async (error, data)=> {
				//This callback known as **errorfirstcallback** beacasue it take first parameter as error
				if (error) {
					throw error;
				}
				if (data) {
					console.log(data);
					// await this.updateTicket()
				}
			})
			// console.log(response);
			return response
		} catch (error) {
			console.log("something went wrong in service layer");
			throw(error);
		}
	}

	async fetchPendingEmail( timeStamp ) {
		try {
			const allTicket = this.ticketRepository.get({ status: "PENDING"});
			return allTicket;
		} catch (error) {
			console.log("something went wrong in service layer");
			throw error;
		}
	}

	async createNotification(data) {
		try {
			console.log(data.notificationTime, new Date());
			if (data.notificationTime < new Date()) {
				throw { error : "time should be less than current time"};
			}
			const notification = await this.ticketRepository.create(data);
			return notification;
		} catch (error) {
			console.log("something went wrong in service layer");
			throw error;
		}
	}

	async updateTicket(ticketId, data) {
		try {
			const response = await this.ticketRepository.update(ticketId, data);
			return response;
		} catch (error) {
			console.log("something went wrong in service layer");
			throw error;
		}
	}
}


module.exports = EmailService;

/**
 * SMPT -> a@borrows.com
*/