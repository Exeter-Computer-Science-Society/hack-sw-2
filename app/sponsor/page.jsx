import Link from "next/link"

import { SponsorForm } from "../components/SponsorForm"
import { CONTACT_EMAIL } from "../config"

export const metadata = {
	title: "Sponsor ExeHacks: Exeter's student hackathon",
	description:
		"Partner with ExeHacks: a named prize track, a logo on the site and in the room, and a slot to talk to the teams. Send an enquiry.",
}

export default function SponsorPage() {
	return (
		<div className="w-full h-fit">
			<section className="band">
				<div className="wrap sponsor-page">
					<div className="section-head">
						<span className="section-tag">Partner with us</span>
						<h2 className="h-section">Interested in sponsoring?</h2>
						<p className="lead">
							We&apos;re raising the 6–7 February 2027 weekend now. A partner gets a named prize track, a logo on the site
							and in the room, and a slot to talk to the teams. Fill this in and it goes to{" "}
							<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
						</p>
						<ul className="partner-offer">
							<li>Named track and prize: your brief, one line</li>
							<li>Logo here, on slides, and at the venue</li>
							<li>Optional workshop, booth, or judging seat</li>
						</ul>
					</div>

					<SponsorForm />

					<p className="mono sponsor-page-back">
						<Link href="/#sponsors">← Past sponsors and partners</Link>
					</p>
				</div>
			</section>
		</div>
	)
}
