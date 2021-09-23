import React, { useState, useEffect } from 'react'

const formatTime = (timeInMs) => {
	const seconds = Math.floor((timeInMs / 1000) % 60)
	const minutes = Math.floor((timeInMs / (1000 * 60)) % 60)
	const hours = Math.floor(timeInMs / (1000 * 60 * 60))
	const padNum = (num) => num.toString().padStart(2, '0')

	return `${padNum(hours)}:${padNum(minutes)}:${padNum(seconds)}`
}

const calcDuration = (startDate, endDate) => {
	const startDateInMs = startDate.getTime()
	const endDateInMs = endDate ? endDate.getTime() : Date.now()
	return Math.abs(endDateInMs - startDateInMs)
}

const Timer = ({ startDate, endDate }) => {
	const [duration, setDuration] = useState(0) // in ms

	useEffect(() => {
		let intervalId
		if (!endDate) {
			intervalId = window.setInterval(() => {
				setDuration(calcDuration(new Date(startDate)))
			}, 1000)
		} else {
			setDuration(calcDuration(new Date(startDate), new Date(endDate)))
		}

		return () => clearInterval(intervalId)
	}, [startDate, endDate])

	return <div>{formatTime(duration)}</div>
}

export default Timer
