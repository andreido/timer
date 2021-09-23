import { useContext } from 'react'
import TimerContext from './context'

const useTimer = () => {
	const context = useContext(TimerContext)

	if (!context) {
		throw new Error('Timer context must be consumed inside the Timer Provider')
	}

	return context
}

export default useTimer
