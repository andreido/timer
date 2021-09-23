import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TimerProvider from './contexts/Timer/provider'

ReactDOM.render(
	<React.StrictMode>
		<TimerProvider>
			<App />
		</TimerProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
