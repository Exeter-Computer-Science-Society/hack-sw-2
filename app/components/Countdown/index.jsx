'use client'

import { useEffect, useState } from 'react'

const pad = (n) => (n < 10 ? `0${n}` : `${n}`)

export function Countdown({ registration }) {

	const [counter, setCounter] = useState(registration - new Date().getTime())
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		// Guard against SSR/client hydration mismatch since the value depends on the current time.
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true)
		const intervalId = setInterval(() => setCounter(registration - new Date().getTime()), 500)
		return () => clearInterval(intervalId)
	}, [registration])

	const remaining = Math.max(0, counter)
	const units = [
		{ label: 'Days', value: `${Math.floor(remaining / (1000 * 60 * 60 * 24))}` },
		{ label: 'Hours', value: pad(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) },
		{ label: 'Minutes', value: pad(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))) },
		{ label: 'Seconds', value: pad(Math.floor((remaining % (1000 * 60)) / 1000)) },
	]

	return mounted && (
		<div className="countdown justify-center">
			{units.map((u) => (
				<div key={u.label} className="cd-unit">
					<div className="v">{u.value}</div>
					<div className="l">{u.label}</div>
				</div>
			))}
		</div>
	)
}
