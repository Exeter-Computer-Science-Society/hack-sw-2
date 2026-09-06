import Link from "next/link"

import { LUMA_URL } from "../../config"

export function Footer() {
	return (
		<footer className="foot">
			<div className="wrap">
				<div className="foot-grid">
					<div className="foot-brand">
						<Link
							className="brand"
							href="/"
						>
							<span className="mk" />
							<b>
								Exe<span className="sw">Hacks</span>
							</b>
						</Link>
						<p>Exeter&apos;s student hackathon, run by the Exeter Computer Science Society. Formerly Hack South West.</p>
					</div>

					<div className="foot-col">
						<h5>Event</h5>
						{LUMA_URL && (
							<Link
								href={LUMA_URL}
								target="_blank"
								rel="noopener"
							>
								Register on Luma ↗
							</Link>
						)}
						<Link href="/#about">About</Link>
						<Link href="/#events">Events</Link>
						<Link href="/#faq">FAQ</Link>
					</div>

					<div className="foot-col">
						<h5>Community</h5>
						<Link href="/#excs">Who runs it</Link>
						<Link href="/#rebrand">Why the new name</Link>
						<Link
							href="https://swcollective.uk"
							target="_blank"
							rel="noopener"
						>
							Partner: South West Collective ↗
						</Link>
					</div>

					<div className="foot-col">
						<h5>Connect</h5>
						<Link
							href="https://www.linkedin.com/company/hack-south-west/"
							target="_blank"
						>
							LinkedIn ↗
						</Link>
						<Link
							href="https://www.instagram.com/hacksouthwest/"
							target="_blank"
						>
							Instagram ↗
						</Link>
						<Link href="/sponsor">Sponsor</Link>
						<Link href="/feedback">Feedback</Link>
						<Link href="/past/hsw-2024-feb">Past events ↗</Link>
					</div>

					<div className="foot-col">
						<h5>Legal</h5>
						<Link href="/conditions">Documents</Link>
						<Link href="/conditions/terms">Terms &amp; Conditions</Link>
						<Link href="/conditions/intellectual">Intellectual Property</Link>
					</div>
				</div>

				<div className="foot-bottom">
					<p>© 2026 ExeHacks · formerly Hack South West · EXCS</p>
				</div>
			</div>
		</footer>
	)
}
