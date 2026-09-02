"use client"

import { useEffect } from "react"

/**
 * Fades `.reveal` elements in as they scroll into view, matching the design
 * prototype's app.js. Keeps its two safety nets: anything already on screen at
 * mount is revealed straight away, and a timeout reveals everything regardless
 * so a missed observer callback can never leave content invisible.
 */
export function useReveal() {
	useEffect(() => {
		const reveals = Array.from(document.querySelectorAll(".reveal"))
		const showAll = () => reveals.forEach((el) => el.classList.add("in"))

		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		if (reduce || !("IntersectionObserver" in window)) {
			showAll()
			return
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("in")
						io.unobserve(e.target)
					}
				})
			},
			{ threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
		)
		reveals.forEach((el) => io.observe(el))

		const revealInView = () => {
			const vh = window.innerHeight || document.documentElement.clientHeight
			reveals.forEach((el) => {
				if (el.classList.contains("in")) return
				const r = el.getBoundingClientRect()
				if (r.top < vh * 0.96 && r.bottom > 0) el.classList.add("in")
			})
		}
		revealInView()
		window.addEventListener("load", revealInView)

		const failsafe = setTimeout(showAll, 2200)

		return () => {
			io.disconnect()
			window.removeEventListener("load", revealInView)
			clearTimeout(failsafe)
		}
	}, [])
}
