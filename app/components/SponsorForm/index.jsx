"use client"

import { ValidationError, useForm } from "@formspree/react"

import { CONTACT_EMAIL, FORMSPREE_FORM_KEY } from "../../config"

const INTERESTS = [
	{ value: "track", label: "Named prize track" },
	{ value: "workshop", label: "Workshop or talk" },
	{ value: "booth", label: "Booth on the weekend" },
	{ value: "judging", label: "Judging seat" },
	{ value: "general", label: "General — not sure yet" },
]

export function SponsorForm() {
	const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_KEY, {
		data: {
			subject: "ExeHacks sponsorship enquiry",
		},
	})

	if (state.succeeded) {
		return (
			<div className="sponsor-form sent" role="status">
				<p className="mono sponsor-form-kicker">Enquiry sent</p>
				<p>Thanks. We&apos;ll reply from {CONTACT_EMAIL}.</p>
				<button
					type="button"
					className="btn btn-ghost"
					onClick={reset}
				>
					Send another
				</button>
			</div>
		)
	}

	return (
		<form
			className="sponsor-form"
			onSubmit={handleSubmit}
		>
			<p className="mono sponsor-form-kicker">Interested in sponsoring?</p>
			<div className="sponsor-form-grid">
				<label className="sponsor-field" htmlFor="sponsor-name">
					<span>Your name</span>
					<input
						id="sponsor-name"
						type="text"
						name="name"
						autoComplete="name"
						required
					/>
					<ValidationError
						field="name"
						prefix="Name"
						errors={state.errors}
						className="sponsor-form-error"
					/>
				</label>
				<label className="sponsor-field" htmlFor="sponsor-org">
					<span>Organisation</span>
					<input
						id="sponsor-org"
						type="text"
						name="org"
						autoComplete="organization"
						required
					/>
					<ValidationError
						field="org"
						prefix="Organisation"
						errors={state.errors}
						className="sponsor-form-error"
					/>
				</label>
				<label className="sponsor-field" htmlFor="sponsor-email">
					<span>Work email</span>
					<input
						id="sponsor-email"
						type="email"
						name="email"
						autoComplete="email"
						required
					/>
					<ValidationError
						field="email"
						prefix="Email"
						errors={state.errors}
						className="sponsor-form-error"
					/>
				</label>
				<label className="sponsor-field" htmlFor="sponsor-interest">
					<span>What are you interested in?</span>
					<select
						id="sponsor-interest"
						name="interest"
						defaultValue="track"
					>
						{INTERESTS.map((item) => (
							<option
								key={item.value}
								value={item.value}
							>
								{item.label}
							</option>
						))}
					</select>
					<ValidationError
						field="interest"
						prefix="Interest"
						errors={state.errors}
						className="sponsor-form-error"
					/>
				</label>
			</div>
			<label className="sponsor-field" htmlFor="sponsor-message">
				<span>A short note</span>
				<textarea
					id="sponsor-message"
					name="message"
					rows={5}
					maxLength={1000}
					placeholder="Track idea, workshop, or just say hello."
					required
				/>
				<ValidationError
					field="message"
					prefix="Note"
					errors={state.errors}
					className="sponsor-form-error"
				/>
			</label>
			<ValidationError
				errors={state.errors}
				className="sponsor-form-error"
			/>
			<div className="sponsor-form-actions">
				<button
					type="submit"
					className="btn btn-primary"
					disabled={state.submitting}
				>
					{state.submitting ? "Sending…" : "Send enquiry"}
				</button>
				<p className="mono">Goes to {CONTACT_EMAIL}. We reply from the same address.</p>
			</div>
		</form>
	)
}
