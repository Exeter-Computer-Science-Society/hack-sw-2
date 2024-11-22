'use client'

import { useEffect, useState } from 'react'

export function Countdown() {

	const [ counter, setCounter ] = useState(new Date("2024-10-02T09:00:00").getTime() - new Date().getTime())
	const [ mounted, setMounted ] = useState(false)

	useEffect(() => {
		setMounted(true)
		setInterval(() => setCounter(new Date("2025-02-08T09:00:00").getTime() - new Date().getTime()), 1000);
	}, [])
	

	return mounted && (
		<div className="flex flex-col gap-2 items-center">

			{/* days */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-HSWaccent">{Math.floor(counter / (1000 * 60 * 60 * 24))}</p>
				<p>Days</p>
			</div>

			{/* hours */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-HSWaccent">{Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
				<p>Hours</p>
			</div>

			{/* minutes */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-HSWaccent">{Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60))}</p>
				<p>Minutes</p>
			</div>

			{/* seconds */}
			<div className="flex items-center gap-2">
				<p className="text-4xl font-extrabold text-HSWaccent">{Math.floor((counter % (1000 * 60)) / 1000)}</p>
				<p>Seconds</p>
			</div>

			<button className="bg-HSWsecondary px-4 py-2 mt-8 rounded-md border border-HSWaccent text-HSWaccent hover:bg-HSWsecondary-2">Registration Not Released</button>
		</div>
	)
}