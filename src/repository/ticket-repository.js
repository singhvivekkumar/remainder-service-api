const { NotificationTicket } = require('../models/index');
const {Op} = require('sequelize');

class TicketRepository {

	
	async getAll() {
		try {
			const allTicket = await NotificationTicket.findAll();
			return allTicket;
		} catch (error) {
			console.log("something went wrong in ticket repositroy layer");
			throw error;
		}
	}

	async create(data) {
		try {
			console.log(data);
			console.log("noti ticket",NotificationTicket);
			const createNotification = await NotificationTicket.create(data);
			return createNotification;
		} catch (error) {
			console.log("something went wrong in ticket repositroy layer",error);

			throw error;
		}
	}

	async get(fliter) {
		try {
			const ticket = await NotificationTicket.findAll({
				where: {
					status: fliter.status,
					notificationTime: {
						[Op.lte]: new Date()
					}
				}
			});
			return ticket;
		} catch (error) {
			console.log("something went wrong in ticket repositroy layer");
			throw error;
		}
	}
}

module.exports = TicketRepository;