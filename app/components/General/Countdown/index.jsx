'use client'

import { useState } from 'react'

export function Countdown() {

	const [counter, setCounter] = useState(new Date("2024-10-02T09:00:00").getTime() - new Date().getTime())

	setInterval(() => setCounter(new Date("2024-10-02T09:00:00").getTime() - new Date().getTime()), 1000);

	return (
		<div className="flex flex-col gap-2">

			{/* days */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-accent">{Math.floor(counter / (1000 * 60 * 60 * 24))}</p>
				<p>Days</p>
			</div>

			{/* hours */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-accent">{Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
				<p>Hours</p>
			</div>

			{/* minutes */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-accent">{Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60))}</p>
				<p>Minutes</p>
			</div>

			{/* seconds */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-accent">{Math.floor((counter % (1000 * 60)) / 1000)}</p>
				<p>Seconds</p>
			</div>

			<button className="bg-secondary px-4 py-2 rounded-md border border-accent text-accent hover:bg-secondary-2">Enter for Free</button>
		</div>
	)
}