export const formatTime = (timeInMs) => {
	const seconds = Math.floor((timeInMs / 1000) % 60)
	const minutes = Math.floor((timeInMs / (1000 * 60)) % 60)
	const hours = Math.floor(timeInMs / (1000 * 60 * 60))
	const padNum = (num) => num.toString().padStart(2, '0')

	return `${padNum(hours)}:${padNum(minutes)}:${padNum(seconds)}`
}

export const calcDuration = (startDate, endDate) => {
	const startDateInMs = startDate.getTime()
	const endDateInMs = endDate ? endDate.getTime() : Date.now()
	return Math.abs(endDateInMs - startDateInMs)
}
