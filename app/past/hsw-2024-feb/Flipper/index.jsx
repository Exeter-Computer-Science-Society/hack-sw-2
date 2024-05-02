'use client'

import { useHover } from "@uidotdev/usehooks";
import { useEffect } from "react";

export function Flipper({ children }) {
	const [ref, hovering] = useHover();

	useEffect(() => {
		console.log(children.length)
	})

	return (
		<div ref={ref}>
			{
				hovering ? (
					<div>
						{children[0]}
					</div>
				) : (
					<div>
						{children[1]}
					</div>
				)
			}
		</div>
	)
}