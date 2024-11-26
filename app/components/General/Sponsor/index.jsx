'use client'

import Image from "next/image"
import { useState } from "react"
import { Popup } from "../Popup"

export function Sponsor({ setOpen, level="gray", image, info }) {
	return (
		<div className={`drop-shadow-${level}`}>
			<div className={`w-fit h-fit mask mask-hexagon flex justify-center bg-HSWsecondary hover:bg-HSWaccent`} onClick={() => setOpen(info)}>
				<Image src={image} alt="EXCS" className="h-48 w-48 max-lg:h-32 max-lg:w-32 p-8 self-center cursor-pointer object-contain" width={500} height={500} />
			</div>
		</div>
		
	)
}