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

import React, { useState } from 'react'
import useTimer from './contexts/Timer/useTimer'
import FormInput from './components/FormInput'
import { TimerContainer, Button, Container } from './App.styles'

const App = () => {
	const [dates, setDates] = useState({
		startDate: '',
		endDate: '',
		useCurrentDate: false
	})
	const { setStartDate, setEndDate, elapsedTime } = useTimer()

	const startTimer = (e) => {
		e.preventDefault()
		const { startDate, endDate } = dates
		if (startDate || dates.useCurrentDate) {
			setStartDate(dates.useCurrentDate ? new Date().toISOString() : startDate)
			setEndDate(endDate)
		}
	}

	const handleInputChange = ({ target }) => {
		setDates({
			...dates,
			[target.name]: target.type === 'checkbox' ? target.checked : target.value
		})
	}

	return (
		<Container>
			<TimerContainer>{elapsedTime}</TimerContainer>
			<form onSubmit={startTimer}>
				<FormInput
					type="text"
					name="startDate"
					id="start_date"
					label="Start Date"
					onChange={handleInputChange}
					value={dates.useCurrentDate ? 'Current Date' : dates.startDate}
					disabled={dates.useCurrentDate}
				/>
				<label>
					Use the current date &nbsp;
					<input
						type="checkbox"
						name="useCurrentDate"
						id="current_date"
						onChange={handleInputChange}
						checked={dates.useCurrentDate}
					/>
				</label>
				<FormInput
					type="text"
					name="endDate"
					id="end_date"
					label="End Date"
					onChange={handleInputChange}
					value={dates.endDate}
				/>

				<Button type="submit">Start</Button>
			</form>
		</Container>
	)
}

export default App
