const compareNotificationTime = (notifictionTime) => {
	const currentTime = new Date();
	return currentTime.getTime() > notifictionTime.getTime();
}

module.exports = {
	compareNotificationTime
}