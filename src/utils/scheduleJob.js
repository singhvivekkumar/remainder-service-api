const cron = require('node-cron');

const job = async () => {

	cron.schedule('10 0 * * * *', () => {
		console.log('running a task every two minutes');
	});
}

module.exports = {
	job
}