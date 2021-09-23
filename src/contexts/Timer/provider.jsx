import React, { useEffect, useMemo, useReducer, useCallback } from 'react'
import TimerContext from './context'
import { formatTime, calcDuration } from './utils'

const SET_START_DATE = 'SET_START_DATE'
const SET_END_DATE = 'SET_END_DATE'
const SET_DURATION = 'SET_DURATION'

const initialState = {
	duration: 0,
	startDate: '',
	endDate: ''
}

const reducer = (state, action) => {
	switch (action.type) {
		case SET_START_DATE: {
			return { ...state, startDate: action.startDate }
		}
		case SET_END_DATE: {
			return { ...state, endDate: action.endDate }
		}
		case SET_DURATION: {
			return { ...state, duration: action.duration }
		}
		default:
			throw new Error('Unexpected action type')
	}
}

const TimerProvider = ({ children }) => {
	const [{ duration, startDate, endDate }, dispatch] = useReducer(
		reducer,
		initialState
	)
	const setStartDate = useCallback(
		(sDate) => dispatch({ type: SET_START_DATE, startDate: sDate }),
		[]
	)
	const setEndDate = useCallback(
		(eDate) => dispatch({ type: SET_END_DATE, endDate: eDate }),
		[]
	)
	const setDuration = useCallback(
		(duration) => dispatch({ type: SET_DURATION, duration }),
		[]
	)

	useEffect(() => {
		if (startDate) {
			let intervalId
			if (!endDate) {
				intervalId = window.setInterval(() => {
					setDuration(calcDuration(new Date(startDate)))
				}, 1000)
				return () => clearInterval(intervalId)
			} else {
				clearInterval(intervalId)
				setDuration(calcDuration(new Date(startDate), new Date(endDate)))
			}
		}
	}, [startDate, endDate, setDuration])

	const value = useMemo(
		() => ({
			setStartDate,
			setEndDate,
			elapsedTime: formatTime(duration)
		}),
		[duration, setStartDate, setEndDate]
	)

	return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
}

export default TimerProvider
