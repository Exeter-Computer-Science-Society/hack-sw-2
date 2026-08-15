import Link from 'next/link';

import { LUMA_URL } from '../../config';

/**
 * Registration call to action. Registration lives on a Luma event page, so this is a
 * link out — gated by two optional timestamps:
 *
 *   force_close                               -> closed, whatever the dates say
 *   registration_closed set and in the past   -> closed
 *   registration_open   set and in the future -> not open yet
 *   no link configured                        -> not open yet
 *   otherwise                                 -> open, links to the Luma page
 *
 * With both timestamps null and LUMA_URL set the button is simply open, which is the
 * current state: the date is still being confirmed but sign-ups run through Luma.
 */
export function RegistrationButton({ registration_open = null, registration_closed = null, force_close = false, link = LUMA_URL, label = "Register on Luma" }) {

	const now = new Date().getTime()

	if (force_close || (registration_closed != null && registration_closed - now < 0)) {
		return <span className="btn btn-closed">Registration closed</span>
	}

	if (!link || (registration_open != null && registration_open - now > 0)) {
		return <span className="btn btn-muted">Registration opens soon</span>
	}

	return (
		<Link href={link} target="_blank" rel="noopener" className="btn btn-primary">
			{label} <span className="arrow">↗</span>
		</Link>
	)
}
