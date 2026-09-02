'use client'

import { useEffect, useRef, useState } from "react";

export function Question({ info }) {

	const [open, setOpen] = useState(false)
	const [height, setHeight] = useState(0)
	const innerRef = useRef(null)

	// The design animates the answer open with a max-height transition, which
	// needs the measured content height rather than a guessed constant.
	useEffect(() => {
		const measure = () => {
			setHeight(open && innerRef.current ? innerRef.current.scrollHeight : 0)
		}
		measure()
		window.addEventListener("resize", measure)
		return () => window.removeEventListener("resize", measure)
	}, [open])

	return (
		<div className={`faq-item ${open ? "open" : ""}`}>
			<button
				className="faq-q"
				type="button"
				aria-expanded={open}
				onClick={() => setOpen(!open)}
			>
				{info.question}
				<span className="ic" aria-hidden="true" />
			</button>

			<div className="faq-a" style={{ maxHeight: height ? `${height}px` : 0 }}>
				<div className="faq-a-inner" ref={innerRef}>{info.answer}</div>
			</div>
		</div>
	)
}
