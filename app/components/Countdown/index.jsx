'use client'

import { useEffect, useState } from 'react'

export function Countdown() {

	const [counter, setCounter] = useState(new Date("2024-10-02T09:00:00").getTime() - new Date().getTime())
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		setInterval(() => setCounter(new Date("2025-02-08T09:00:00").getTime() - new Date().getTime()), 500);
	}, [])


	return mounted && (
		<div className='flex flex-col gap-8 w-full justify-center items-center'>
			<div className="flex gap-2 items-center justify-center w-full">

				{/* days */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent ">{Math.floor(counter / (1000 * 60 * 60 * 24))}</p>
				</div>

				{/* hours */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent ">{Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
				</div>

				{/* minutes */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent ">{Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60))}</p>
				</div>

				{/* seconds */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent ">{Math.floor((counter % (1000 * 60)) / 1000)}</p>
				</div>




			</div>

			<button className="bg-HSWsecondary px-4 py-2 mt-8 rounded-md border border-HSWaccent text-HSWaccent hover:bg-HSWsecondary-2 w-fit">Registration Not Released</button>
		</div>

	)
}