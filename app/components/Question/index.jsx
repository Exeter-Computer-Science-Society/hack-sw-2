'use client'

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export function Question({ info }) {

	const [open, setOpen] = useState(false)

	return (
		<div className="flex flex-col transition-all duration-500 hover:bg-HSWsecondary cursor-pointer px-4 py-2" onClick={() => setOpen(!open)}>
			<div className="flex justify-between">
				<p className="text-xl font-light text-HSWtext">{info.question}</p>
				{ open ? <IoIosArrowDown className="text-HSWtext w-8 h-8 cursor-pointer transition-all duration-200" /> : <IoIosArrowDown className="text-HSWtext w-8 h-8 cursor-pointer transform rotate-180 transition-all duration-200" /> }
			</div>

			{
				open && (
					<div className="pl-4 text-sm font-extralight select-none">
						<p className="text-lg font-extralight text-HSWtext">{info.answer}</p>
					</div>
				)
			}

			{/* <p className="text-lg font-light text-HSWtext">{q.answer}</p> */}
			<div className="border-b border-gray-200" />
		</div>
	)
}