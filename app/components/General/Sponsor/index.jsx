'use client'

import Image from "next/image"
import { useState } from "react"
import { Popup } from "../Popup"

export function Sponsor({ setOpen, level="gray", image, info, cover=false }) {
	return (
		<div className={`drop-shadow-${level}`}>
			<div className={`w-fit h-fit mask mask-hexagon flex justify-center bg-HSWsecondary hover:bg-HSWaccent`} onClick={() => setOpen(info)}>
				<Image src={image} alt="EXCS" className={`h-48 w-48 max-lg:h-32 max-lg:w-32 p-10 self-center cursor-pointer ${cover ? "object-cover" : "object-contain"}`} width={250} height={250} />
			</div>
		</div>
		
	)
}