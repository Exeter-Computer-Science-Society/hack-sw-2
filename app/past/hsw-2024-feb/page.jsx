import Image from "next/image"
import Link from "next/link"

export const metadata = {
	title: "Hack South West, February 2024: ExeHacks archive",
	description:
		"The February 2024 edition of Hack South West: 128 tickets, 13 products built, and attendees from five cities across the South West.",
}

const stats = [
	{ num: "128", lab: "Tickets sold" },
	{ num: "56%", lab: "First-timers" },
	{ num: "13", lab: "Products built" },
	{ num: "5", lab: "Cities represented" },
]

const photos = [
	{ src: "/images/everyone.JPEG", alt: "The room during the 2024 hackathon" },
	{ src: "/images/introduction.jpg", alt: "The opening talk" },
	{ src: "/images/presentation.JPEG", alt: "A team presenting to the judges" },
	{ src: "/images/organisers.JPEG", alt: "The 2024 organising team" },
	{ src: "/images/pizza.JPEG", alt: "Food at the 2024 hackathon" },
]

// Podium order is second, first, third so the winner sits in the middle.
const winners = [
	{ cls: "second", rank: "2nd place", team: "BathX", project: "pool" },
	{ cls: "first", rank: "1st place", team: "Headge Hackers", project: "LendEase" },
	{ cls: "third", rank: "3rd place", team: "Asians ++", project: "Asians ++ Training" },
]

export default function PastHackathon() {
	return (
		<div className="w-full h-fit">
			{/* ============ HEADER ============ */}
			<section className="band">
				<div className="wrap">
					<div className="section-head">
						<span className="section-tag">Archive · February 2024</span>
						<h2
							className="h-section"
							style={{ margin: "1rem 0 1.2rem" }}
						>
							Hack South West, <span className="grad-text">2024</span>.
						</h2>
						<p className="lead">
							The February 2024 edition, back when the event still carried the old name. Attendees came from Exeter, Bristol,
							Plymouth, Bournemouth and Cardiff.
						</p>
					</div>

					<div className="stat-grid">
						{stats.map((s) => (
							<div
								className="stat"
								key={s.lab}
							>
								<div className="num">{s.num}</div>
								<div className="lab">{s.lab}</div>
							</div>
						))}
					</div>

					<p
						className="mono"
						style={{ color: "var(--text-faint)", marginTop: "1.2rem", fontSize: "0.9rem" }}
					>
						{"// 70% male, 23% female, the rest undisclosed"}
					</p>
				</div>
			</section>

			{/* ============ PHOTOS ============ */}
			<section className="band band-alt">
				<div className="wrap">
					<div className="section-head">
						<span className="section-tag">On the day</span>
						<h2 className="h-section">Some photos.</h2>
					</div>

					<div className="gallery">
						{photos.map((p) => (
							<div
								className="ph"
								key={p.src}
							>
								<Image
									src={p.src}
									width={500}
									height={500}
									alt={p.alt}
								/>
							</div>
						))}

						<Link
							className="ph ph-more"
							href="https://onedrive.live.com/?authkey=%21AGQXRe896Z0mers&id=DF91CDD1C74AC0FB%2110730&cid=DF91CDD1C74AC0FB"
							target="_blank"
							rel="noopener"
						>
							<span>View more ↗</span>
						</Link>
					</div>
				</div>
			</section>

			{/* ============ WINNERS ============ */}
			<section className="band">
				<div className="wrap">
					<div className="section-head">
						<span className="section-tag">Who took it</span>
						<h2 className="h-section">Winners.</h2>
						<p className="lead">Every podium team went home with Raspberry Pi Zeros.</p>
					</div>

					<div className="podium">
						{winners.map((w) => (
							<div
								className={`pcol ${w.cls}`}
								key={w.cls}
							>
								{w.cls === "first" && <span className="topline" />}
								<div className="rank">{w.rank}</div>
								<div className="amt">{w.team}</div>
								<div className="perk">{w.project}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ============ SPONSOR + BACK ============ */}
			<section className="band band-alt">
				<div className="wrap flex flex-col items-center text-center gap-6">
					<span className="section-tag">Sponsored by</span>
					<Link
						href="https://excs.uk"
						target="_blank"
						rel="noopener"
					>
						<Image
							src="/images/sponsors/excs.svg"
							className="h-16 w-fit object-contain"
							width={500}
							height={500}
							alt="Exeter Computer Science Society"
						/>
					</Link>

					<div className="hero-cta">
						<Link
							className="btn btn-ghost"
							href="/"
						>
							ExeHacks runs next on 6–7 February 2027
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
