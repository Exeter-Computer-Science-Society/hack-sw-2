'use client'

import Image from "next/image"
import { useState } from "react"
import { Popup } from "../Popup"

export function Sponsor({ setOpen, level="gray", image }) {

	return (
		<div className={`drop-shadow-${level}`}>

			<div className={`w-fit h-fit mask mask-hexagon flex justify-center bg-HSWsecondary hover:bg-HSWaccent`} onClick={() => setOpen(true)}>
				<Image src={image} alt="EXCS" className="h-48 w-48 p-8 self-center  cursor-pointer" width={500} height={500} />
			</div>
		</div>
		
	)
}