"use client"

import Link from "next/link"
import { useState } from "react"

import { useReveal } from "../components/Reveal/useReveal"

/*
	Where the form posts.

	This site is a static export (see output: "export" in next.config.mjs), so there is
	no server of our own to receive a submission. Point this at a hosted form endpoint
	that accepts a JSON POST — Formspree, Getform, Web3Forms and Basin all do — by
	setting NEXT_PUBLIC_REGISTER_ENDPOINT at build time:

	    NEXT_PUBLIC_REGISTER_ENDPOINT=https://formspree.io/f/xxxxxxxx npm run build

	Until it is set the form deliberately refuses to submit and points people at email,
	rather than collecting details and dropping them.
*/
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_REGISTER_ENDPOINT || ""
const CONTACT_EMAIL = "excs@exeterguild.com"

const EVENTS = [
	{ value: "ctf", label: "Capture The Flag — November" },
	{ value: "hackathon", label: "24-hour hackathon — February" },
]

const YEARS = ["First year", "Second year", "Third year", "Fourth year or above", "Postgraduate", "Not a student"]
const EXPERIENCE = ["This would be my first", "I've been to one or two", "I've been to a few", "I've lost count"]
const SHIRTS = ["XS", "S", "M", "L", "XL", "XXL"]
const HEARD = ["A friend", "EXCS", "Instagram", "LinkedIn", "A lecturer or department email", "South West Collective", "Somewhere else"]

const EMPTY = {
	name: "",
	email: "",
	university: "University of Exeter",
	year: "",
	events: [],
	experience: "",
	team: "I don't have a team yet",
	teamName: "",
	dietary: "",
	access: "",
	shirt: "",
	heard: "",
	conduct: false,
}

export default function Register() {
	useReveal()

	const [form, setForm] = useState(EMPTY)
	const [status, setStatus] = useState("idle") // idle | sending | sent | error
	const [error, setError] = useState("")

	const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))

	const toggleEvent = (value) =>
		setForm((prev) => ({
			...prev,
			events: prev.events.includes(value) ? prev.events.filter((e) => e !== value) : [...prev.events, value],
		}))

	const onSubmit = async (e) => {
		e.preventDefault()

		if (!FORM_ENDPOINT) {
			setStatus("error")
			setError("not-configured")
			return
		}

		if (form.events.length === 0) {
			setStatus("error")
			setError("Pick at least one event.")
			return
		}

		setStatus("sending")
		setError("")

		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					...form,
					events: form.events.join(", "),
					submittedAt: new Date().toISOString(),
				}),
			})

			if (!res.ok) throw new Error(`The form service responded with ${res.status}.`)

			setStatus("sent")
			setForm(EMPTY)
		} catch (err) {
			setStatus("error")
			setError(err.message || "Something went wrong sending the form.")
		}
	}

	if (status === "sent") {
		return (
			<section className="band">
				<div className="wrap form-shell">
					<span className="section-tag">Registration</span>
					<h1
						className="h-section"
						style={{ margin: "1rem 0 1.4rem" }}
					>
						You&apos;re <span className="grad-text">in</span>.
					</h1>
					<div className="form-banner ok">
						<b>We&apos;ve got your registration.</b>
						<span>
							Look out for a confirmation email. We&apos;ll send the exact date, the venue details and the joining instructions as
							soon as the weekend is locked in.
						</span>
					</div>
					<div className="hero-cta mt-8">
						<Link
							className="btn btn-ghost"
							href="/"
						>
							Back to the site
						</Link>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className="band">
			<div className="wrap form-shell">
				<div className="reveal">
					<span className="section-tag">Registration</span>
					<h1
						className="h-section"
						style={{ margin: "1rem 0 1.2rem" }}
					>
						Sign up for <span className="grad-text">ExeHacks</span>.
					</h1>
					<p
						className="lead"
						style={{ marginBottom: "2rem" }}
					>
						Takes about two minutes. You don&apos;t need a team and you don&apos;t need experience — say so below and we&apos;ll
						sort you out on the day.
					</p>
				</div>

				{!FORM_ENDPOINT && (
					<div
						className="form-banner bad reveal"
						style={{ marginBottom: "2rem" }}
					>
						<b>This form isn&apos;t connected yet.</b>
						<span>
							You can fill it in to see how it works, but nothing will be sent. To register right now, email{" "}
							<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
						</span>
					</div>
				)}

				<form
					className="form-grid reveal d1"
					onSubmit={onSubmit}
					noValidate={false}
				>
					<fieldset className="fieldset">
						<legend className="fieldset-legend">About you</legend>

						<div className="field">
							<label
								className="field-label"
								htmlFor="name"
							>
								Full name <span className="req">*</span>
							</label>
							<input
								className="input"
								id="name"
								name="name"
								type="text"
								required
								autoComplete="name"
								value={form.name}
								onChange={(e) => set("name", e.target.value)}
							/>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="email"
							>
								Email <span className="req">*</span>
							</label>
							<input
								className="input"
								id="email"
								name="email"
								type="email"
								required
								autoComplete="email"
								placeholder="you@exeter.ac.uk"
								value={form.email}
								onChange={(e) => set("email", e.target.value)}
							/>
							<span className="field-hint">We only use this to send you event details.</span>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="university"
							>
								University or organisation <span className="req">*</span>
							</label>
							<input
								className="input"
								id="university"
								name="university"
								type="text"
								required
								value={form.university}
								onChange={(e) => set("university", e.target.value)}
							/>
							<span className="field-hint">You don&apos;t have to study at Exeter to come.</span>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="year"
							>
								Year of study
							</label>
							<select
								className="select"
								id="year"
								name="year"
								value={form.year}
								onChange={(e) => set("year", e.target.value)}
							>
								<option value="">Prefer not to say</option>
								{YEARS.map((y) => (
									<option
										key={y}
										value={y}
									>
										{y}
									</option>
								))}
							</select>
						</div>
					</fieldset>

					<fieldset className="fieldset">
						<legend className="fieldset-legend">Which event</legend>

						<div className="field">
							<span className="field-label">
								Pick one or both <span className="req">*</span>
							</span>
							<div className="optionrow">
								{EVENTS.map((ev) => (
									<label
										className="checkline"
										key={ev.value}
									>
										<input
											type="checkbox"
											name="events"
											value={ev.value}
											checked={form.events.includes(ev.value)}
											onChange={() => toggleEvent(ev.value)}
										/>
										<span>{ev.label}</span>
									</label>
								))}
							</div>
							<span className="field-hint">The February date isn&apos;t confirmed yet — we&apos;ll email it to you first.</span>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="experience"
							>
								How many hackathons have you been to?
							</label>
							<select
								className="select"
								id="experience"
								name="experience"
								value={form.experience}
								onChange={(e) => set("experience", e.target.value)}
							>
								<option value="">Prefer not to say</option>
								{EXPERIENCE.map((x) => (
									<option
										key={x}
										value={x}
									>
										{x}
									</option>
								))}
							</select>
							<span className="field-hint">There&apos;s no wrong answer. It just tells us how many beginner workshops to run.</span>
						</div>
					</fieldset>

					<fieldset className="fieldset">
						<legend className="fieldset-legend">Your team</legend>

						<div className="field">
							<span className="field-label">Do you have a team?</span>
							<div className="optionrow">
								{["I don't have a team yet", "I have a team"].map((opt) => (
									<label
										className="checkline"
										key={opt}
									>
										<input
											type="radio"
											name="team"
											value={opt}
											checked={form.team === opt}
											onChange={() => set("team", opt)}
										/>
										<span>{opt}</span>
									</label>
								))}
							</div>
							<span className="field-hint">
								No team is completely fine. We run a team-building session at the start so you can find one on the day.
							</span>
						</div>

						{form.team === "I have a team" && (
							<div className="field">
								<label
									className="field-label"
									htmlFor="teamName"
								>
									Team name and who&apos;s in it
								</label>
								<textarea
									className="textarea"
									id="teamName"
									name="teamName"
									placeholder="Team name, plus the names of your teammates (up to 4 people in total)"
									value={form.teamName}
									onChange={(e) => set("teamName", e.target.value)}
								/>
								<span className="field-hint">Everyone still needs to register individually.</span>
							</div>
						)}
					</fieldset>

					<fieldset className="fieldset">
						<legend className="fieldset-legend">Looking after you</legend>

						<div className="field">
							<label
								className="field-label"
								htmlFor="dietary"
							>
								Dietary requirements
							</label>
							<input
								className="input"
								id="dietary"
								name="dietary"
								type="text"
								placeholder="Vegetarian, halal, nut allergy, none…"
								value={form.dietary}
								onChange={(e) => set("dietary", e.target.value)}
							/>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="access"
							>
								Accessibility requirements
							</label>
							<input
								className="input"
								id="access"
								name="access"
								type="text"
								placeholder="Anything we should arrange so the venue works for you"
								value={form.access}
								onChange={(e) => set("access", e.target.value)}
							/>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="shirt"
							>
								T-shirt size
							</label>
							<select
								className="select"
								id="shirt"
								name="shirt"
								value={form.shirt}
								onChange={(e) => set("shirt", e.target.value)}
							>
								<option value="">Prefer not to say</option>
								{SHIRTS.map((s) => (
									<option
										key={s}
										value={s}
									>
										{s}
									</option>
								))}
							</select>
						</div>

						<div className="field">
							<label
								className="field-label"
								htmlFor="heard"
							>
								How did you hear about us?
							</label>
							<select
								className="select"
								id="heard"
								name="heard"
								value={form.heard}
								onChange={(e) => set("heard", e.target.value)}
							>
								<option value="">Prefer not to say</option>
								{HEARD.map((h) => (
									<option
										key={h}
										value={h}
									>
										{h}
									</option>
								))}
							</select>
						</div>
					</fieldset>

					<fieldset className="fieldset">
						<legend className="fieldset-legend">Before you send</legend>

						<label className="checkline">
							<input
								type="checkbox"
								name="conduct"
								required
								checked={form.conduct}
								onChange={(e) => set("conduct", e.target.checked)}
							/>
							<span>
								I&apos;ve read and agree to the <Link href="/conditions/terms">terms and conditions</Link> and the{" "}
								<Link href="/conditions/intellectual">intellectual property policy</Link>. <span className="req">*</span>
							</span>
						</label>

						<p className="form-note">
							We use what you enter here to run the event and nothing else. Dietary and accessibility answers go to the organiser
							and the caterer only. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> at any point to get your details
							removed.
						</p>
					</fieldset>

					{status === "error" && (
						<div className="form-banner bad">
							{error === "not-configured" ? (
								<>
									<b>Nothing was sent.</b>
									<span>
										This form has no submission endpoint set yet. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
										and we&apos;ll register you by hand.
									</span>
								</>
							) : (
								<>
									<b>That didn&apos;t send.</b>
									<span>
										{error} Try again, or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
									</span>
								</>
							)}
						</div>
					)}

					<div className="form-actions">
						<button
							className="btn btn-primary"
							type="submit"
							disabled={status === "sending"}
						>
							{status === "sending" ? "Sending…" : "Send my registration"}
							<span className="arrow">↗</span>
						</button>
						<Link
							className="btn btn-ghost"
							href="/#events"
						>
							Check the schedule first
						</Link>
					</div>
				</form>
			</div>
		</section>
	)
}
