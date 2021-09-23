/*
The goal is to build a duration timer that shows elapsed
time between two given dates - startDate and endDate where
the latter is optionally provided.

The output should be in the format of [hh]hh:mm:ss
01:45:08, 00:05:20, 100:00:00, 5000:00:00 and so on.
Hours should be min 2 characters but can be more if needed.

The endDate is optional.
    If not provided the timer should use the current time
    and keep counting up indefinitely
    
    If provided the timer should just show the duration
    between the two dates and exit. It should not count up.

    Sample Times:
    new Date("2020-10-10T00:00:00Z")
    new Date("2020-10-10T10:10:10Z")


    Test Cases:

    1. Only the startDate is provided (no endDate)
        inputs: 
        startDate = 2021-09-23T00:00:00Z
        endDate = current time ( Date.now() ) = 2021-09-23T00:00:00Z

        outputs: 00:00:00, 00:00:01, 00:00:02, 00:00:03, ...

    2. Both the startDate and endDate are provided
        inputs:
        startDate = 2021-09-23T00:00:00Z
        endDate = 2021-09-24T10:15:20Z

        output: 34:15:20

*/

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
