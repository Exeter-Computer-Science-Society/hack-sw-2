"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { RegistrationButton } from "../RegistrationButton"

export function TopBar() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<header className={`nav ${scrolled ? "scrolled" : ""}`}>
			<div className="wrap nav-inner">
				<Link
					className="brand"
					href="/"
					aria-label="ExeHacks home"
				>
					<span className="mk" />
					<b>
						Exe<span className="sw">Hacks</span>
					</b>
				</Link>

				<div className="nav-right">
					<nav className="nav-links">
						<Link
							className="nl"
							href="/#about"
						>
							About
						</Link>
						<Link
							className="nl"
							href="/#events"
						>
							Events
						</Link>
						<Link
							className="nl"
							href="/#faq"
						>
							FAQ
						</Link>
					</nav>

					<RegistrationButton label="Register" />
				</div>
			</div>
		</header>
	)
}
