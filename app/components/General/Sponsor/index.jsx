'use client'

import Image from "next/image"
import { useState } from "react"
import { Popup } from "../Popup"

export function Sponsor({ setOpen, level="gray", info=null }) {

	return (
		<div className={`drop-shadow-${level} `}>

			<div className={`w-fit h-fit mask mask-hexagon flex justify-center bg-HSWsecondary hover:bg-HSWaccent`} onClick={() => setOpen(true)}>
				<Image src="/images/sponsors/excs.svg" alt="HSBC" className="h-48 w-48 self-center p-2 cursor-pointer" width={500} height={500} />
			</div>
		</div>
		
	)
}