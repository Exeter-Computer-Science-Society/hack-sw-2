"use client"

import { useEffect, useState } from "react"

// The hero visual under the retro theme: a fake boot sequence that types itself
// out. Ported from the design prototype's app.js typewriter.
const LINES = [
	{ t: "./register --hackathon", cmd: true },
	{ t: "booting ExeHacks 2026 ...", arrow: true },
	{ t: "formerly: Hack South West", ok: true },
	{ t: "location: Innovation Centre, Exeter", ok: true },
	{ t: "run by: EXCS", ok: true },
	{ t: "community: South West Collective", ok: true },
	{ t: "prize pool: £500+ loaded", ok: true },
	{ t: "beginners: WELCOME", ok: true },
	{ t: "food: unlimited pizza", ok: true },
	{ t: "status: REGISTRATION OPENING SOON", hl: true },
]

export function BootTerminal() {
	// One entry per line that has started typing, holding the visible prefix.
	const [typed, setTyped] = useState([])

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		if (reduce) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setTyped(LINES.map((l) => l.t))
			return
		}

		let cancelled = false
		let timer

		const typeLine = (li, ci) => {
			if (cancelled || li >= LINES.length) return
			const line = LINES[li]
			setTyped((prev) => {
				const next = prev.slice(0, li)
				next[li] = line.t.slice(0, ci)
				return next
			})

			if (ci < line.t.length) {
				timer = setTimeout(() => typeLine(li, ci + 1), line.cmd ? 34 : 12)
			} else {
				timer = setTimeout(() => typeLine(li + 1, 0), line.cmd ? 260 : 130)
			}
		}

		timer = setTimeout(() => typeLine(0, 0), 60)
		return () => {
			cancelled = true
			clearTimeout(timer)
		}
	}, [])

	return (
		<div className="term" aria-hidden="true">
			<div className="term-bar">
				<span className="term-dot" />
				<span className="term-dot" />
				<span className="term-dot" />
				<span className="term-title">exehacks@exeter — bash</span>
			</div>

			<div className="term-body">
				<div className="term-out">
					{typed.map((text, i) => {
						const line = LINES[i]
						return (
							<div key={i} className={`tl ${line.hl ? "tl-hl" : ""}`}>
								{line.cmd && <span className="tl-prompt">exehacks@exeter:~$ </span>}
								{line.ok && <span className="tl-ok">[ ok ] </span>}
								{line.arrow && <span className="tl-arrow">&gt; </span>}
								<span className="tl-text">{text}</span>
							</div>
						)
					})}
				</div>

				<div className="term-prompt">
					<span>exehacks@exeter</span>:<span>~</span>$&nbsp;
					<span className="term-cursor">█</span>
				</div>
			</div>
		</div>
	)
}
