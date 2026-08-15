import Link from 'next/link';

/**
 * Registration call to action, gated by two optional timestamps.
 *
 *   force_close                              -> closed, whatever the dates say
 *   registration_closed set and in the past  -> closed
 *   registration_open   set and in the future-> not open yet
 *   otherwise                                -> open, links to `link`
 *
 * With both timestamps null the button is open. That is the current state: the date
 * is still being confirmed but the form at /register is live and taking sign-ups.
 */
export function RegistrationButton({ registration_open = null, registration_closed = null, force_close = false, link = "/register", label = "Register your team" }) {

	const now = new Date().getTime()

	if (force_close || (registration_closed != null && registration_closed - now < 0)) {
		return <span className="btn btn-closed">Registration closed</span>
	}

	if (registration_open != null && registration_open - now > 0) {
		return <span className="btn btn-muted">Registration opens soon</span>
	}

	const external = link.startsWith("http")

	return (
		<Link
			href={link}
			className="btn btn-primary"
			{...(external ? { target: "_blank", rel: "noopener" } : {})}
		>
			{label} <span className="arrow">↗</span>
		</Link>
	)
}
