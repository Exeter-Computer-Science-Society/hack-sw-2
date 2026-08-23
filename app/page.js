"use client"

// components
import { RegistrationButton } from "./components/RegistrationButton"
import { BootTerminal } from "./components/BootTerminal"
import { Countdown } from "./components/Countdown"
import { Question } from "./components/Question"
import { Profile } from "./components/Team/Profiles"
import Sponsor from "./components/General/Sponsor"
import Image from "next/image"
import Link from "next/link"

// hooks
import { useEffect, useState } from "react"
import { useReveal } from "./components/Reveal/useReveal"

// config
import { LUMA_URL } from "./config"

export default function Home() {
	useReveal()

	const images = Array.from({ length: 27 }, (_, i) => `/images/conveyor_belt/${i + 1}.jpg`)

	const [currentImage1, setCurrentImage1] = useState("/images/conveyor_belt/1.jpg")
	const [currentImage2, setCurrentImage2] = useState("/images/conveyor_belt/2.jpg")
	const [fading1, setFading1] = useState(false)
	const [fading2, setFading2] = useState(false)

	// 6–7 February 2027 is the locked weekend. Countdown and registration
	// timestamps stay null until we have exact kickoff and signup times.
	const event_date = null // kickoff. Drives the countdown.
	const registration_open = null // when registration opens
	const registration_closed = null // when registration closes before the event
	const event_window = "6–7 February 2027"
	const event_link = LUMA_URL // the Luma event page. Set it in app/config.js.

	const questions = [
		{
			id: 1,
			question: "Should I attend ExeHacks",
			answer: "Absolutely! ExeHacks is a great opportunity to learn new skills, meet new people, and have fun. Whether you're a beginner or an experienced hacker, there's something for everyone at ExeHacks."
		},
		{
			id: 2,
			question: "What is a hackathon?",
			answer: "A hackathon is an event where people come together to work on a project for a set amount of time. It is a great opportunity to learn new skills, meet new people, and have fun!"
		},
		{
			id: 15,
			question: "When is ExeHacks?",
			answer: "6–7 February 2027 at the Innovation Centre, Phase 2, University of Exeter. Saturday into Sunday, 24 hours."
		},
		{
			id: 3,
			question: "Isn't this event called Hack South West?",
			answer: "It was. Same society, same venue, same event, new name, and the person who started it is still on the team. Every edition has been held in Exeter, so the old name claimed more ground than the event covered. You'll still find us under the old name on LinkedIn, Instagram and Devpost while the rebrand settles in."
		},
		{
			id: 13,
			question: "Who actually runs ExeHacks?",
			answer: "The Exeter Computer Science Society (EXCS), the same society that ran Hack South West, still with the person who started it, under a name that matches where the event is."
		},
		{
			id: 4,
			question: "Who can attend?",
			answer: "Everyone. Whether you study at Exeter, at another university, or you're working in industry, come along for a weekend of building and learning."
		},
		{
			id: 5,
			question: "Where is ExeHacks Happening?",
			answer: "We are hosting the event in the innovation centre at the University of Exeter. The address is: University of Exeter, Innovation Centre, Rennes Drive, Exeter, EX4 4RN"
		},
		{
			id: 6,
			question: "What will be available to eat?",
			answer: "We will be providing all hackers with food and drinks throughout the event. Dietary requirement will be catered for as well so no need to worry!"
		},
		{
			id: 7,
			question: "Do I need to be able to code to attend?",
			answer: "Not at all! ExeHacks is open to everyone, regardless of your coding experience. We will have workshops and mentors available to help you get started with your project."
		},
		{
			id: 8,
			question: "How large can my team be?",
			answer: "We enforce team sizes of no more than 4 people. This is to ensure that everyone has a fair chance of winning the competition."
		},
		{
			id: 9,
			question: "What should I bring?",
			answer: "You should bring your laptop, charger, and any additional items to make your stay comfortable. We will provide you with seating, power, food, and a lovely atmosphere."
		},
		{
			id: 10,
			question: "Do we have a code of conduct?",
			answer: "Yes, we have a code of conduct that all attendees must adhere to. This is to ensure that everyone has a safe and enjoyable experience at ExeHacks."
		},
		{
			id: 11,
			question: "Do we have a code of intellectual property?",
			answer: "Yes, check the link just to the left of this :)"
		},
		{
			id: 12,
			question: "What are the terms and conditions?",
			answer: "Check the link just to the left of this :)"
		},
		{
			id: 14,
			question: "How do I sponsor ExeHacks?",
			answer: "There's a short enquiry form under Partner with us on this page, and a dedicated sponsor page in the footer. Fill it in and it goes to the EXCS inbox. We reply from the same address."
		}
	]

	// Past editions, newest first. Add a `href` when an edition has its own page.
	const pastEvents = [
		{ when: "Jan 2026", name: "Hack South West", what: "24-hour hackathon" },
		{ when: "Nov 2025", name: "Capture The Flag", what: "12 hours, 30 boxes" },
		{ when: "Feb 2024", name: "Hack South West", what: "24-hour hackathon", href: "/past/hsw-2024-feb" }
	]

	const prizeTracks = [
		{ title: "Best Overall", blurb: "Best project of the weekend." },
		{ title: "Best of AI Agents", blurb: "Best use of AI agents." },
		{ title: "Best Use of Cloud", blurb: "Best project built on the cloud." },
		{ title: "Best of Hardware", blurb: "Best project that lives in hardware." },
		{ title: "Best of Impact for Exeter / the South West", blurb: "Best project with a real impact on Exeter or the South West." }
	]

	const hackSaturday = [
		{ time: "08:00", what: "Registration Opens + Talk To Sponsors" },
		{ time: "08:30", what: "Board Games + Team Building" },
		{ time: "11:30", what: "Welcome Presentation" },
		{ time: "12:00", what: "Hacking Begins!" },
		{ time: "12:15", what: "Workshop" },
		{ time: "13:00", what: "Lunch" },
		{ time: "19:00", what: "Dinner" },
		{ time: "22:00", what: "Venue Closes, Moving To Forum" }
	]

	const hackSunday = [
		{ time: "08:00", what: "Venue Opens" },
		{ time: "08:30", what: "Breakfast" },
		{ time: "12:00", what: "Hacking Ends" },
		{ time: "12:30", what: "Judging Begins" },
		{ time: "14:00", what: "Prizes & Closing Ceremony" },
		{ time: "15:00", what: "Venue Closes" }
	]

	useEffect(() => {
		// change the image every 5 seconds
		const unload = setInterval(() => {
			console.log("selecting new image for 1")
			setFading1(true)

			// select the next image after the fade out
			setTimeout(() => {
				// select the next image
				let nextImage = images[Math.floor(Math.random() * images.length)]

				// only set if its not the same as the other image or itself
				if (nextImage === currentImage1 || nextImage === currentImage2) {
					console.log("same image selected, reselecting")
					let newImage = images[Math.floor(Math.random() * images.length)]
					while (newImage === currentImage1 || newImage === currentImage2) {
						newImage = images[Math.floor(Math.random() * images.length)]
					}

					setCurrentImage1(newImage)
				} else {
					setCurrentImage1(nextImage)
				}
			}, 400)

			// fade in the new image
			setTimeout(() => {
				setFading1(false)
			}, 500)
		}, 5000)

		// Cleanup to avoid memory leaks
		return () => clearInterval(unload)
	}, [])

	useEffect(() => {
		// offset the second image change by 2.5 seconds
		const timeout = setTimeout(() => {
			// change the image every 5 seconds
			const unload = setInterval(() => {
				// fade out the current image
				setFading2(true)

				// select the next image after the fade out
				setTimeout(() => {
					// select the next image
					let nextImage = images[Math.floor(Math.random() * images.length)]

					if (nextImage === currentImage2 || nextImage === currentImage1) {
						console.log("same image selected, reselecting")
						let newImage = images[Math.floor(Math.random() * images.length)]
						while (newImage === currentImage2 || newImage === currentImage1) {
							newImage = images[Math.floor(Math.random() * images.length)]
						}

						setCurrentImage2(newImage)
					} else {
						setCurrentImage2(nextImage)
					}
				}, 400)

				// fade in the new image
				setTimeout(() => {
					setFading2(false)
				}, 500)
			}, 5000)
		}, 2500)

		// Cleanup to avoid memory leaks
		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className="w-full h-fit">
			{/* ============ HERO ============ */}
			<section
				className="hero"
				id="top"
			>
				<div className="hero-bg">
					<div className="glowA" />
					<div className="glowB" />
					<div className="hero-grid" />
				</div>

				<div className="wrap hero-inner">
					<div className="hero-lockup reveal">
						<span className="hero-eyebrow eyebrow">
							<span className="pulse" />
							<span>Formerly Hack South West · University of Exeter</span>
						</span>

						<h1 aria-label="ExeHacks">
							<span
								className="wordmark glitch"
								aria-hidden="true"
								data-text=".EXEHACKS"
							>
								.EXEHACKS
							</span>
						</h1>
					</div>

					<div className="hero-text">
						{/*
							Hero copy, variant B ("more personality"). Leads with the rename, which is
							the story while the rebrand is still news.

							Variant A ("straight") is the swap for once the rename stops being news.
							It says what the event is first and treats the rename as a footnote:

							<p className="hero-headline reveal d1">Exeter&apos;s student hackathon.</p>
							<p className="hero-sub reveal d2">
								24 hours to build something, on campus, open to every skill level.
								Formerly Hack South West.
							</p>
						*/}
						<p className="hero-headline reveal d1">We changed the name, not the venue.</p>

						<p className="hero-sub reveal d2">
							Hack South West is now <b>ExeHacks</b>. Same event, same people, run by <b>EXCS</b>.{" "}
							<b>{event_window}</b> at the Innovation Centre.{" "}
							<button
								type="button"
								className="hero-inline-link"
								onClick={() => {
									document.getElementById("rebrand").scrollIntoView({ behavior: "smooth" })
								}}
							>
								Why the new name
							</button>
						</p>

						<div className="hero-meta reveal d2">
							<div className="chiprow">
								<span className="chip">
									<span className="dot" />
									{event_window}
								</span>
								<span className="chip cyan">
									<span className="dot" />
									Innovation Centre, Exeter
								</span>
								<span className="chip purple">
									<span className="dot" />
									£500+ prizes
								</span>
							</div>
						</div>

						<div
							className="hero-cta reveal d3"
							id="register"
						>
							<RegistrationButton
								registration_open={registration_open}
								registration_closed={registration_closed}
								link={event_link}
							/>

							<button
								type="button"
								className="btn btn-ghost"
								onClick={() => {
									document.getElementById("events").scrollIntoView({ behavior: "smooth" })
								}}
							>
								See the schedule
							</button>
						</div>

						<p className="hero-note reveal d3">
							{"// Organised by EXCS, the University of Exeter Computer Science Society"}
						</p>
					</div>

					<div className="hero-visual reveal d2">
						<BootTerminal />
					</div>
				</div>
			</section>

			{/* ============ TICKER ============ */}
			<div
				className="ticker"
				aria-hidden="true"
			>
				<div className="ticker-track">
					{[0, 1].map((i) => (
						<span
							className="ticker-item"
							key={i}
						>
							<span className="star">✦</span> BEGINNERS WELCOME <span className="star">✦</span> <em>6–7 FEB 2027</em>{" "}
							<span className="star">✦</span> FREE FOOD ALL WEEKEND <span className="star">✦</span> <em>24 HOURS</em>{" "}
							<span className="star">✦</span> WORKSHOPS &amp; MENTORS <span className="star">✦</span> <em>MEET YOUR TEAM</em>{" "}
							<span className="star">✦</span> BUILD ANYTHING <span className="star">✦</span>{" "}
						</span>
					))}
				</div>
			</div>

			{/* ============ COUNTDOWN ============ */}
			<section
				className="band"
				id="countdown"
				style={{ paddingBlock: "clamp(56px,8vw,96px)" }}
			>
				<div className="wrap flex flex-col items-center text-center gap-6">
					<span
						className="section-tag reveal"
						style={{ justifyContent: "center" }}
					>
						{event_date ? "Doors open in" : "When"}
					</span>

					{event_date ? (
						<>
							<h2
								className="h-section reveal d1"
								style={{ maxWidth: "18ch" }}
							>
								The countdown to <span className="grad-text">kickoff</span> is on.
							</h2>
							<div className="reveal d2">
								<Countdown registration={event_date} />
							</div>
						</>
					) : (
						<>
							<h2
								className="h-section reveal d1"
								style={{ maxWidth: "20ch" }}
							>
								<span className="grad-text">{event_window}.</span> Saturday into Sunday.
							</h2>
							<p
								className="lead reveal d2"
								style={{ margin: "0 auto" }}
							>
								24 hours at the Innovation Centre, Phase 2. The weekend is locked.
							</p>
							<div className="hero-cta reveal d3 justify-center">
								<button
									type="button"
									className="btn btn-ghost"
									onClick={() => {
										document.getElementById("events").scrollIntoView({ behavior: "smooth" })
									}}
								>
									See the schedule
								</button>
							</div>
						</>
					)}
				</div>
			</section>

			{/* ============ ABOUT ============ */}
			<section
				className="band band-alt"
				id="about"
			>
				<div className="wrap welcome-grid">
					<div className="welcome-copy reveal">
						<span className="section-tag">What is this?</span>
						<h2
							className="h-section"
							style={{ margin: "1rem 0 1.4rem" }}
						>
							24 hours. A team of four. <span className="grad-text">Whatever you can ship.</span>
						</h2>

						<p>
							ExeHacks is the University of Exeter&apos;s student hackathon, run by <b>EXCS</b>. You get 24 hours, a team of up to
							four, and whatever you can ship in a weekend. Beginners are welcome. We run workshops and put mentors on the floor.
						</p>
						<p>
							We run it once a year. Next date: <b>{event_window}</b>. It ran as Hack South West before this one. Here&apos;s what came before.
						</p>

						<ul className="past-list">
							{pastEvents.map((e) => (
								<li
									className="past-row"
									key={`${e.when}-${e.name}`}
								>
									<span className="pe-when">{e.when}</span>
									<span className="pe-name">
										{e.href ? <Link href={e.href}>{e.name} ↗</Link> : e.name}
									</span>
									<span className="pe-what">{e.what}</span>
								</li>
							))}
						</ul>

						<div className="hero-cta mt-8">
							<Link
								className="btn btn-ghost"
								href="https://guildgroupssetup-my.sharepoint.com/:f:/g/personal/excs_groups_exeterguild_com/Ej3uvzjcOhxJshyqPG-i7A4Bj-Vd2GYqpygapE_MtUPqgA?e=Xwt0sm"
								target="_blank"
							>
								Pictures from previous events <span className="arrow">↗</span>
							</Link>
						</div>
					</div>

					{/* the rotating photo pair from past events */}
					<div className="grid grid-cols-2 gap-3 reveal d1">
						<div className="crt-photo relative aspect-[3/4] overflow-hidden border border-[color:var(--line)]">
							<Image
								src={currentImage1}
								className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${fading1 ? "opacity-0" : "opacity-100"}`}
								draggable={false}
								width={500}
								height={500}
								alt="A moment from a previous event"
							/>
						</div>

						<div className="crt-photo relative aspect-[3/4] overflow-hidden border border-[color:var(--line)] mt-8 max-lg:hidden">
							<Image
								src={currentImage2}
								className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${fading2 ? "opacity-0" : "opacity-100"}`}
								draggable={false}
								width={500}
								height={500}
								alt="A moment from a previous event"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ============ THE REBRAND ============ */}
			<section
				className="band"
				id="rebrand"
			>
				<div className="wrap">
					<div className="gcard reveal note-panel">
						<span className="section-tag">We&apos;ve rebranded</span>
						<h2 className="h-section">Hack South West is now ExeHacks.</h2>
						<p className="lead">
							Every edition has been held in Exeter, so the old name claimed more ground than the event covered. The new one says
							where it is, and puts us next to SotonHacks, HackNotts, DurHack and the rest of the UK student circuit. Same organisers,
							same venue, same event. If you came before, you already know this one.
						</p>
					</div>
				</div>
			</section>

			{/* ============ WHO RUNS IT ============ */}
			<section
				className="band band-alt"
				id="excs"
			>
				<div className="wrap">
					<div
						className="welcome-copy reveal"
						style={{ maxWidth: "56ch" }}
					>
						<span className="section-tag">Who runs it</span>
						<h2
							className="h-section"
							style={{ margin: "1rem 0 1.4rem" }}
						>
							Powered by <span className="grad-text">EXCS</span>.
						</h2>
						<p>
							ExeHacks is run by the <b>Exeter Computer Science Society</b>. Start to finish. Same society that ran
							Hack South West, still with the person who started it. That part doesn&apos;t change.
						</p>
					</div>
				</div>
			</section>

			{/* ============ EVENTS ============ */}
			<section
				className="band"
				id="events"
			>
				<div className="wrap">
					<div className="section-head reveal">
						<span className="section-tag">One weekend a year</span>
						<h2 className="h-section">The event.</h2>
						<p className="lead">24 hours to build something. These are the tracks we&apos;re planning.</p>
					</div>

					<div className="events-grid single">
						<article className="gcard event reveal d1">
							<div className="event-top">
								<span className="event-kicker">{event_window} · The big one</span>
								<span className="event-pill soon">Flagship hackathon</span>
							</div>

							<h3>
								<span>The 24-Hour</span>
								<span className="grad-text">Hackathon</span>
							</h3>

							<p className="ev-desc">
								<b>{event_window}</b> at the <b>Innovation Centre, Phase 2</b>. Food, workshops, teams of up to four. Build whatever
								you want. The tracks below are how you win, not a brief you have to follow.
							</p>

							<div className="ev-facts">
								<div className="ev-fact">
									<span className="k">When</span> {event_window}
								</div>
								<div className="ev-fact">
									<span className="k">Where</span> Innovation Centre, Phase 2
								</div>
								<div className="ev-fact">
									<span className="k">Teams</span> Up to 4 people
								</div>
								<div className="ev-fact">
									<span className="k">Perks</span> Food, workshops, mentors
								</div>
							</div>

							<div className="event-body">
								<div className="event-copy">
									<span className="section-tag">Tracks we&apos;re planning</span>
									<div className="tracks">
										{prizeTracks.map((track) => (
											<article
												className="track"
												key={track.title}
											>
												<h4>{track.title}</h4>
												<p>{track.blurb}</p>
											</article>
										))}
									</div>
								</div>

								<div className="event-side">
									<span className="section-tag">Schedule</span>
									<div className="sched mt-4">
										<div className="sched-day">Saturday 6 Feb</div>
										{hackSaturday.map((s) => (
											<div
												className="sched-row"
												key={`sat-${s.time}`}
											>
												<span className="t">{s.time}</span>
												<span className="w">{s.what}</span>
											</div>
										))}

										<div className="sched-day">Sunday 7 Feb</div>
										{hackSunday.map((s) => (
											<div
												className="sched-row"
												key={`sun-${s.time}`}
											>
												<span className="t">{s.time}</span>
												<span className="w">{s.what}</span>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="hero-cta">
								<RegistrationButton
									registration_open={registration_open}
									registration_closed={registration_closed}
									link={event_link}
								/>
								<Link
									className="btn btn-ghost"
									href="/sponsor"
								>
									Sponsor the weekend
								</Link>
							</div>
						</article>
					</div>

					<p className="mono text-center mt-10 reveal" style={{ color: "var(--text-dim)" }}>
						🍕 Food and refreshments provided throughout the weekend.
					</p>
				</div>
			</section>

			{/* ============ TEAM ============ */}
			<section
				className="band band-alt"
				id="team"
			>
				<div className="wrap">
					<div className="section-head reveal">
						<span className="section-tag">Who runs this</span>
						<h2 className="h-section">Meet the team.</h2>
						<p className="lead">ExeHacks is run by four people. If you want to help build it, we&apos;re recruiting.</p>
					</div>

					<div className="team-grid reveal d1">
						<Profile
							name="Kazybek Khairulla"
							position="Lead Organizer"
							image="/images/team/2027/Kazybek.JPG"
						/>
						<Profile
							name="Wiktor Wiejak"
							position="Logistics"
							image="/images/team/2027/Wiktor.jpeg"
						/>
						<Profile
							name="Devansh Mehrotra"
							position="Operations"
							image="/images/team/2027/Devansh.jpeg"
						/>
						<Profile
							name="Alya Ormon"
							position="Marketing"
						/>
					</div>
				</div>
			</section>

			{/* ============ SPONSORS ============ */}
			<section
				className="band"
				id="sponsors"
			>
				<div className="wrap reveal">
					<Sponsor />
				</div>
			</section>

			{/* ============ FAQ ============ */}
			<section
				className="band band-alt"
				id="faq"
			>
				<div className="wrap faq-grid">
					<div className="reveal">
						<span className="section-tag">Good to know</span>
						<h2
							className="h-section"
							style={{ marginTop: "1rem" }}
						>
							Questions,
							<br />
							answered.
						</h2>
						<p
							className="lead"
							style={{ marginTop: "1.2rem" }}
						>
							Have questions? Here you&apos;ll find all the answers to your questions. If there is something missing feel free to reach
							out to us with absolutely any queries via our email.
						</p>

						<div className="faq-side-links">
							<Link href="/past/hsw-2024-feb">Past editions</Link>
							<Link href="/conditions/intellectual">Intellectual Property</Link>
							<Link href="/conditions/terms">Terms &amp; Conditions</Link>
							<Link
								href="https://guildgroupssetup-my.sharepoint.com/:f:/g/personal/excs_groups_exeterguild_com/Ej3uvzjcOhxJshyqPG-i7A4Bj-Vd2GYqpygapE_MtUPqgA?e=Xwt0sm"
								target="_blank"
							>
								Access Files ↗
							</Link>
						</div>
					</div>

					<div className="faq-list reveal d1">
						{questions.map((q) => (
							<Question
								key={q.id}
								info={q}
							/>
						))}
					</div>
				</div>
			</section>

			{/* ============ FINAL CTA ============ */}
			<section className="band finalcta">
				<div className="wrap">
					<div className="panel reveal">
						<span
							className="eyebrow"
							style={{ display: "block", marginBottom: "1.2rem" }}
						>
							University of Exeter · Innovation Centre
						</span>
						<h2>
							Ready to{" "}
							<span
								className="grad-text glitch"
								data-text="build"
							>
								build
							</span>
							?
						</h2>
						<p>Round up your team, grab your spot, and we&apos;ll see you {event_window}.</p>
						<div className="hero-cta">
							<RegistrationButton
								registration_open={registration_open}
								registration_closed={registration_closed}
								link={event_link}
							/>
							<Link
								className="btn btn-ghost"
								href="https://www.instagram.com/hacksouthwest/"
								target="_blank"
							>
								Follow the updates
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
