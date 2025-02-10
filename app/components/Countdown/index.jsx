'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Countdown({registration}) {

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
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent max-lg:text-sm">{Math.floor(counter / (1000 * 60 * 60 * 24))}</p>
				</div>

				{/* hours */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent max-lg:text-sm">{Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
				</div>

				{/* minutes */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent max-lg:text-sm">{Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60))}</p>
				</div>

				{/* seconds */}
				<div className='relative w-1/6 aspect-[3/4] flex flex-col justify-center items-cente'>
					<div className='h-1/2 w-full bg-[#171616] rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<div className='h-1/2 w-full bg-HSWsecondary2 rounded-2xl flex justify-center items-center max-lg:rounded-lg' />
					<p className="absolute w-full h-full justify-center flex items-center text-6xl font-extrabold text-HSWaccent max-lg:text-sm">{Math.floor((counter % (1000 * 60)) / 1000)}</p>
				</div>
			</div>

			{
				(registration - new Date().getTime() > 0) ? (
					<button className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent hover:bg-HSWsecondary-2 w-fit">Registration Not Released</button>
				) : (
					<div className="bg-HSWsecondary text-red-500 px-4 py-2 rounded-md max-lg:text-sm border border-red-500 flex gap-2 justify-center items-center">
						<Image src="/images/sponsors/dora.png" className="w-7 h-7" width={500} height={500} alt="as" />
						<p className='text-2xl font-extrabold'>Closed</p>
					</div>
				)
			}



		</div>

	)
}