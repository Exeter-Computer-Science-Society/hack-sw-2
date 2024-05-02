'use client'

import { useHover } from "@uidotdev/usehooks";
import { useEffect } from "react";

export function Flipper({ children }) {
	const [ref, hovering] = useHover();

	useEffect(() => {
		console.log(children.length)
	})

	return (children.length === 2) ? (
		<div ref={ref} className="w-full h-full">
			{
				!hovering ? (
					<div className="w-full h-full">
						{children[0]}
					</div>
				) : (
					<div className="w-full h-full">
						{children[1]}
					</div>
				)
			}
		</div>
	) : (
		<div className="">
			<p className="text-red-500">Incorrect Usage</p>
		</div>
	)
}