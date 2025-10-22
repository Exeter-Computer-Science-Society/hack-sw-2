"use client"
"use client"

import { SouthWestImage } from "./components/General/SouthWestImage"

// icons
import { BsCalendar2Date } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { Countdown } from "./components/Countdown"
import { IoIosArrowDown } from "react-icons/io"

import { Profile } from "./components/Team/Profiles"
import Sponsor from "./components/General/Sponsor"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Question } from "./components/Question"
import { Loading } from "./components/Loading"
import { BsDiamond } from "react-icons/bs"
import { BsSuitDiamond } from "react-icons/bs"
import { RiVipDiamondLine } from "react-icons/ri"
import { FaArrowDown } from "react-icons/fa"
import { VscFeedback } from "react-icons/vsc"
import { TfiMore } from "react-icons/tfi"

export default function Home() {
	const images = Array.from({ length: 27 }, (_, i) => `/images/conveyor_belt/${i + 1}.jpg`)

	const [open, setOpen] = useState(false)
	const [currentImage1, setCurrentImage1] = useState("/images/conveyor_belt/1.jpg")
	const [currentImage2, setCurrentImage2] = useState("/images/conveyor_belt/2.jpg")
	const [fading1, setFading1] = useState(false)
	const [fading2, setFading2] = useState(false)

	const registration_open = new Date("2025-10-23T12:00:00").getTime()
    const registration_closed = new Date("2025-11-08T08:00:00").getTime()
    const event_date = new Date("2025-11-08T08:00:00").getTime()

	const questions = [
		{
			question: "Should I attend Hack South West",
			answer: "Absolutely! Hack South West is a great opportunity to learn new skills, meet new people, and have fun. Whether you're a beginner or an experienced hacker, there's something for everyone at Hack South West."
		},
		{
			question: "What is a hackathon?",
			answer: "A hackathon is an event where people come together to work on a project for a set amount of time. It is a great opportunity to learn new skills, meet new people, and have fun!"
		},
		{
			question: "Who can attend?",
			answer: "We welcome everyone, weather your a student here or external university or working in industry, we welcome everyone to come and join us for a weekend of fun and learning."
		},
		{
			question: "Where is Hack South West Happening?",
			answer: "We are hosting the event in the innovation centre at the University of Exeter. The address is: University of Exeter, Innovation Centre, Rennes Drive, Exeter, EX4 4RN"
		},
		{
			question: "What will be available to eat?",
			answer: "We will be providing all hackers with food and drinks throughout the event. Dietary requirement will be catered for as well so no need to worry!"
		},
		{
			question: "Do I need to be able to code to attend?",
			answer: "Not at all! Hack South West is open to everyone, regardless of your coding experience. We will have workshops and mentors available to help you get started with your project."
		},
		{
			question: "How large can my team be?",
			answer: "We enforce team sizes of no more than 4 people. This is to ensure that everyone has a fair chance of winning the competition."
		},
		{
			question: "What should I bring?",
			answer: "You should bring your laptop, charger, and any additional items to make your stay comfortable. We will provide you with seating, power, food, and a lovely atmosphere."
		},
		{
			question: "Do we have a code of conduct?",
			answer: "Yes, we have a code of conduct that all attendees must adhere to. This is to ensure that everyone has a safe and enjoyable experience at Hack South West."
		},
		{
			question: "Do we have a code of intellectual property?",
			answer: "Yes, check the link just to the left of this :)"
		},
		{
			question: "What are the terms and conditions?",
			answer: "Check the link just to the left of this :)"
		}
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
			<SouthWestImage />

			{/* front facing page */}
			<div className="relative flex flex-col items-center justify-center w-full h-[100vh] px-[15%] max-lg:px-[5%] pt-[10%] max-lg:pt-[40%] z-50">
				<div className="hidden text-red-500" />
				<div className="flex flex-col gap-8 w-full h-full">
					<div>
						<Link href={"https://hack-south-west.excs.uk/"}>
							<Image
								src={"/images/HSW-logo.png"}
								width={500}
								height={500}
								alt="Hack South West Logo"
							/>
						</Link>

						<div className="flex gap-1">
							<p>Made possible with</p>
							<Link href={"https://southwestcsc.org/"}>
								<Image
									src={"/images/sponsors/swcsc.png"}
									width={100}
									height={100}
									alt="swcsc"
								/>
								<Image
									src={"/images/sponsors/swcsc.png"}
									width={100}
									height={100}
									alt="swcsc"
								/>
							</Link>
							<p> and </p>
							<Link href={"https://www.sec-ridge.com/"}>
								<Image
									src={"/images/sponsors/secridge.png"}
									width={100}
									height={100}
									alt="secridge"
								/>
							<Link href={"https://www.sec-ridge.com/"}>
								<Image
									src={"/images/sponsors/secridge.png"}
									width={100}
									height={100}
									alt="secridge"
								/>
							</Link>
						</div>
					</div>

					<div className="text-wrap w-full">
						<p className="text-xl max-lg:text-xs font-mono">The largest Hackathon in the South West</p>
						<p className="flex gap-2 max-lg:text-xs font-bold">Exeter, Bristol, Plymouth, Bournemouth</p>
					</div>

					<div className="">
						<div className="flex gap-2 items-center">
							<BsCalendar2Date />
							<p className="max-lg:text-sm">Saturday, Nov 8th, 8:00am</p>
						</div>

						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<p className="max-lg:text-sm">University of Exeter, Innovation Center</p>
						</div>

						<div className="flex gap-2 items-center">
							<CiTrophy />
							<p className="max-lg:text-sm">Over £500 in prizes!</p>
						</div>
					</div>

					<div className="flex gap-4 max-lg:flex-col">
						<RegistrationButton registration_open={registration_open} registration_closed={registration_closed} />

						<button
							className="bg-HSWsecondary px-4 py-2 rounded-md border border-gray-500 text-warmGray-500 flex gap-2 justify-center items-center"
							onClick={() => {
								document.getElementById("about").scrollIntoView({ behavior: "smooth" })
							}}
						>
                            <p className="text-2xl max-lg:text-sm font-extrabold">Learn More</p>

						</button>

						<Link
							href="/feedback"
							className="bg-HSWsecondary px-4 py-2 rounded-md border border-blue-300 text-blue-300 max-lg:text-sm flex gap-2 justify-center items-center"
						>
							<p className="text-2xl max-lg:text-sm font-extrabold">feedback</p>
						</Link>
					</div>
				</div>
			</div>

			{/* countdown */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] py-[15%]">
				<Countdown registration={event_date} />
			</div>

			{/* about */}
			<div
				id="about"
				className="flex max-lg:flex-col justify-center items-center gap-32 max-lg:gap-8 w-full h-fit px-[15%] py-[10%] max-lg:px-[5%]"
			>
			<div
				id="about"
				className="flex max-lg:flex-col justify-center items-center gap-32 max-lg:gap-8 w-full h-fit px-[15%] py-[10%] max-lg:px-[5%]"
			>
				<div className="w-full flex gap-16 max-lg:p-16">
					<div className="relative w-1/2 max-lg:w-full h-96 mt-32 ">
						<div className="w-1/2 max-lg:w-full h-full">
							<div className="absolute w-full h-full border border-white -top-12 max-lg:-top-4 -left-8 max-lg:-left-3" />
							{currentImage1 && (
								<Image
									src={currentImage1}
									className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
										fading1 ? "opacity-0" : "opacity-100"
									}`}
									draggable={false}
									width={500}
									height={500}
									alt="not found"
								/>
							)}
							{currentImage1 && (
								<Image
									src={currentImage1}
									className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
										fading1 ? "opacity-0" : "opacity-100"
									}`}
									draggable={false}
									width={500}
									height={500}
									alt="not found"
								/>
							)}
						</div>
					</div>

					<div className="relative w-1/2 h-96 max-lg:hidden">
						<div className="w-1/2 h-full flex items-center">
							<div className="absolute -bottom-6 w-full h-fit flex justify-center z-50">
								{/* <RegistrationButton registration={registration} /> */}
							</div>

							{currentImage2 && (
								// <Image src={currentImage2} className="absolute top-0 left-0 w-full h-full object-cover" draggable={false} width={500} height={500} alt="not found" />
								<Image
									src={currentImage2}
									className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
										fading2 ? "opacity-0" : "opacity-100"
									}`}
									draggable={false}
									width={500}
									height={500}
									alt="not found"
								/>
							)}
							{currentImage2 && (
								// <Image src={currentImage2} className="absolute top-0 left-0 w-full h-full object-cover" draggable={false} width={500} height={500} alt="not found" />
								<Image
									src={currentImage2}
									className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
										fading2 ? "opacity-0" : "opacity-100"
									}`}
									draggable={false}
									width={500}
									height={500}
									alt="not found"
								/>
							)}
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-16 max-lg:gap-8 w-fit">
					<div>
						<h1 className="text-6xl md:text-5xl sm:text-3xl font-bold text-HSWaccent">About Us</h1>
					</div>

					<div className="flex flex-col gap-2 justify-center items-center w-full font-light">
						<p className="max-lg:rounded-xs">
							Organised by the Computer Science Society (EXCS) and Cyber Security Society (CyberSoc) of University Of Exeter, Hack South West is
							the most fun and enjoyable experience for students around the UK. Available to everyone from beginners to experts, this is a great
							opportunity to get into hackathons. Our welcoming atmosphere will surely encourage you to go to more!
						</p>
						<p className="max-lg:rounded-xs">
							We will run two events this year! Firstly in November there will be a Capture The Flag (CTF) competition, followed by the main
							hackathon event in February. The CTF will be a great way for anyone to get involved with problem solving and cybersecurity
							challenges, while the main hackathon will allow participants to build projects, learn new skills, and network with like-minded
							individuals. Both events include exceptional prizes and plenty of food to keep you going! To find out more about either event visit
							our registration website which you may find on this part of the website and also at the top!
						</p>
					</div>

					<Link
						className="w-fit bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent flex gap-2 justify-center items-center"
						href={
							"https://guildgroupssetup-my.sharepoint.com/:f:/g/personal/excs_groups_exeterguild_com/Ej3uvzjcOhxJshyqPG-i7A4Bj-Vd2GYqpygapE_MtUPqgA?e=Xwt0sm"
						}
						target="_blank"
					>
						<VscFileSymlinkDirectory className="w-6 h-6" />
						<p className="text-2xl max-lg:text-sm font-semibold text-nowrap">Pictures from previous events</p>
					</Link>
				</div>
			</div>

			{/* Track information */}
			<div
				id="qa"
				className="flex flex-col h-fit"
			>
			<div
				id="qa"
				className="flex flex-col h-fit"
			>
				<div className="flex justify-around gap-16 max-lg:gap-8 w-full h-fit px-[15%] pt-32 pb-16 max-lg:px-[5%] bg-HSWsecondary2">
					<div className="w-full">
						<h1 className="text-6xl md:text-5xl sm:text-3xl font-bold text-HSWaccent">Our Events</h1>
						<br />
						<p className="text-md font-extralight">
							What will you be doing during our events! Here you can find out more about both of our events!
						</p>
					</div>

					<div className="w-full flex justify-center items-center">
						<Image
							src={"/images/smt.png"}
							className="object-cover h-full w-fit"
							width={500}
							height={500}
							alt="FAQ"
						/>
						<Image
							src={"/images/smt.png"}
							className="object-cover h-full w-fit"
							width={500}
							height={500}
							alt="FAQ"
						/>
					</div>
				</div>

				<div>
					<div className="bg-HSWprimary w-full h-fit flex flex-col justify-center items-center gap-16 max-lg:gap-8 px-[15%] pt-32 pb-16 max-lg:px-[5%]">
						<div className="w-full h-fit flex max-md:flex-col justify-center items-center gap-16">
							{/* CTF Event */}
							<div className="relative w-full h-full flex flex-col items-center gap-8 py-8 self-start">
								<p className="text-3xl font-thin text-HSWtext pb-80">
									<b className="text-HSWaccent font-extrabold">Capture The Flag</b> Event
								</p>

								<Image
									src={"/images/hacking.webp"}
									className="absolute top-0 left-0 right-0 w-full h-fit object-contain rounded-lg opacity-25"
									width={500}
									height={500}
									alt="CTF Hackathon Background"
								/>

								{/* Intro */}
								<p className="px-[10%] z-50">
									Join us for an action-packed <b className="text-HSWaccent">12-hour Capture the Flag Hackathon</b> on{" "}
									<b>Friday, 8th November</b>, hosted at the <b>Innovation Centre, Phase 2</b>. In this track, your cybersecurity knowledge
									will be pushed to the limit! With three exciting difficulties and <b>30 unique boxes</b> to solve, there’s something for
									everyone. Every completed challenge will grant you a flag to unlock points at <b className="text-HSWaccent">any moment</b>{" "}
									during the hackathon. Explore hidden Easter eggs around the venue, meet our sponsors, and enjoy a full day of hacking,
									learning, and collaboration.
								</p>

								{/* Schedule */}
								<div className="px-[10%] w-full max-w-3xl">
									<p className="text-2xl font-semibold text-HSWaccent mt-4 mb-6 text-center">🕗 Schedule</p>

									<div className="relative border-l-2 border-HSWaccent ml-4">
										{/* 8:00 AM */}
										<div className="mb-6 ml-6 relative">
											<div className="absolute -left-4 top-1 w-3 h-3 bg-HSWaccent rounded-full"></div>
											<p className="font-semibold text-lg text-HSWtext">8:00 AM</p>
											<p className="text-sm text-HSWtext/80">Registration Opens + Talk To Sponsors</p>
										</div>

										{/* 8:30 AM */}
										<div className="mb-6 ml-6 relative">
											<div className="absolute -left-4 top-1 w-3 h-3 bg-HSWaccent rounded-full"></div>
											<p className="font-semibold text-lg text-HSWtext">8:30 AM</p>
											<p className="text-sm text-HSWtext/80">Welcome Presentation</p>
										</div>

										{/* 9:00 AM */}
										<div className="mb-6 ml-6 relative">
											<div className="absolute -left-4 top-1 w-3 h-3 bg-HSWaccent rounded-full"></div>
											<p className="font-semibold text-lg text-HSWtext">9:00 AM</p>
											<p className="text-sm text-HSWtext/80">Hacking Begins</p>
										</div>

										{/* Throughout the Day */}
										<div className="mb-6 ml-6 relative">
											<div className="absolute -left-4 top-1 w-3 h-3 bg-HSWaccent rounded-full"></div>
											<p className="font-semibold text-lg text-HSWtext">Throughout the Day</p>
											<p className="text-sm text-HSWtext/80">Explore Easter Eggs + Food!</p>
										</div>

										{/* 9:00 PM */}
										<div className="mb-6 ml-6 relative">
											<div className="absolute -left-4 top-1 w-3 h-3 bg-HSWaccent rounded-full"></div>
											<p className="font-semibold text-lg text-HSWtext">9:00 PM</p>
											<p className="text-sm text-HSWtext/80">Hacking Ends + Prizes</p>
										</div>

										{/* 10:00 PM */}
										<div className="ml-6 relative">
											<div className="absolute -left-4 top-1 w-3 h-3 bg-HSWaccent rounded-full"></div>
											<p className="font-semibold text-lg text-HSWtext">10:00 PM</p>
											<p className="text-sm text-HSWtext/80">Event Close</p>
										</div>
									</div>

									<p className="mt-4 text-center text-HSWtext/80">
										🍕 <b>Food and refreshments provided throughout the day!</b>
									</p>
								</div>

								{/* Prizes */}
								<div className="px-[10%] text-left w-full max-w-3xl">
									<p className="text-2xl font-semibold text-gold mt-6 mb-2">🏆 Prizes</p>

									<div className="bg-HSWsecondary2 p-4 rounded-md mb-4 flex gap-2 justify-between">
										<div>
											<p className="font-semibold">🥇 1st Place</p>
											<ul className="list-disc list-inside mb-3">
												<li>£100</li>
												<li>512GB SSD</li>
												<li>PicoUSB</li>
												<li>XXL Mouse Pads</li>
											</ul>
										</div>

										<div>
											<p className="font-semibold">🥈 2nd Place</p>
											<ul className="list-disc list-inside mb-3">
												<li>£50</li>
												<li>PicoUSB</li>
												<li>Beanies</li>
											</ul>
										</div>

										<div>
											<p className="font-semibold">🥉 3rd Place</p>
											<ul className="list-disc list-inside mb-3">
												<li>Thermos Bottles</li>
											</ul>
										</div>
									</div>
								</div>

								{/* Registration */}
								<div className="px-[10%] self-start z-50">
									<RegistrationButton registration_open={registration_open} registration_closed={registration_closed} />
								</div>
							</div>

							{/*  hackathon event */}
							<div className="relative w-full h-full flex flex-col items-center gap-8 py-8 self-start">
								<Image
									src={"/images/hackathon.webp"}
									className="absolute top-0 left-0 right-0 w-full h-fit object-contain rounded-lg opacity-25 z-0"
									width={500}
									height={500}
									alt="smt"
								/>
								<p className="text-3xl font-thin text-HSWtext pb-80">
									<b className="text-HSWaccent font-bold">Hackathon</b> Event
								</p>
								<p className="px-[10%]">
									This event will push you to develop your own creative solution to a challenge faced by the world. We look out for solutions
									that incorporate a high level of technical knowledge to a problem of significant <b className="text-HSWaccent">impact</b> in
									the world. Although, you will likely only work on this problem for a limited amount of time, we encourage you to continue to
									develop and deploy your solutions to either the web or other sources to both add to your portfolio, but also benefit
									humanity!
								</p>

                                <p className="px-[10%]">
									We are still working hard on organising this, please check out our socials for more information as it comes! <br />
									
								</p>

                                <p className="px-[10%] z-50">
                                    Follow us on <Link href="https://www.linkedin.com/company/hack-south-west/" className="text-HSWaccent">LinkedIn</Link> and <Link href="https://www.instagram.com/hacksouthwest/" className="text-HSWaccent">Instagram</Link> for the latest updates.
                                </p>


								<div className="px-[10%] self-start z-50">
									<RegistrationButton registration_open={registration_open} registration_closed={registration_closed} force={true}/>
								</div>
							</div>
						</div>

						<br />

						<div>{/* Submssion */}</div>
					</div>
				</div>
			</div>

			{/* the team */}
			<div className="flex justify-center items-center">
				<h1 className="text-6xl md:text-5xl sm:text-3xl font-bold text-HSWaccent">Meet the Team</h1>
			</div>

			<div
				id="team"
				className="flex flex-col gap-32 items-center justify-center w-full h-fit py-[5%] px-[15%] max-lg:px-[5%]"
			>
				<div className="w-full">
					<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
						<Profile
							name="Charlie"
							position="Chief Organiser"
							description="Oversees organization of all hack south west affliated hackathons"
							image="/images/team/charlie.jpeg"
							linkedin=" https://www.linkedin.com/in/charlie-winders-187333346"
							github="https://github.com/cw1169"
						/>
						<Profile
							name="Wiktor"
							position="Founder of Hack South West & President of EXCS"
							description="Oversee's the creation of HSW"
							image="/images/team/wiktor.jpeg"
							github="https://github.com/inspizzz"
							linkedin="https://www.linkedin.com/in/wiktor-wiejak/"
							website="https://www.wiktor.uk"
						/>
						<Profile
							name="Nehir"
							position="Event Co Director"
							description="Assist with the creation of HSW"
							image="/images/team/nehir.jpeg"
							linkedin="https://www.linkedin.com/in/nehir-yurtsever-2932a0233/"
						/>
						<Profile
							name="Maxime"
							position="Cyber Security Society President"
							description="Collaboration on CTF and general assitance"
							image="/images/team/maxime.jpeg"
							linkedin="https://www.linkedin.com/in/maxime-reynaud-profile/"
							github="https://github.com/Stickman230"
							cybersoc={true}
						/>
						<Profile
							name="Zeynep"
							position="Co-Academic Director of Cybersecurity society"
							description=""
							image="/images/team/zeynep.jpeg"
							linkedin="https://www.linkedin.com/in/zeynep-g%C3%BCler2005/"
							github="https://github.com/zeyneppguler23"
							cybersoc={true}
						/>
						<Profile
							name="Finn"
							position="Web Developer/ Site Maintainer"
							description="Oversee's the HSW website"
							image="/images/team/finn.jpeg"
							github="https://github.com/TheCheesyWiggle"
							linkedin="https://www.linkedin.com/in/finn-van-montfort-ab13731ab/"
						/>
						<Profile
							name="Charlie"
							position="Chief Organiser"
							description="Oversees organization of all hack south west affliated hackathons"
							image="/images/team/charlie.jpeg"
							linkedin=" https://www.linkedin.com/in/charlie-winders-187333346"
							github="https://github.com/cw1169"
						/>
						<Profile
							name="Wiktor"
							position="Founder of Hack South West & President of EXCS"
							description="Oversee's the creation of HSW"
							image="/images/team/wiktor.jpeg"
							github="https://github.com/inspizzz"
							linkedin="https://www.linkedin.com/in/wiktor-wiejak/"
							website="https://www.wiktor.uk"
						/>
						<Profile
							name="Nehir"
							position="Event Co Director"
							description="Assist with the creation of HSW"
							image="/images/team/nehir.jpeg"
							linkedin="https://www.linkedin.com/in/nehir-yurtsever-2932a0233/"
						/>
						<Profile
							name="Maxime"
							position="Cyber Security Society President"
							description="Collaboration on CTF and general assitance"
							image="/images/team/maxime.jpeg"
							linkedin="https://www.linkedin.com/in/maxime-reynaud-profile/"
							github="https://github.com/Stickman230"
							cybersoc={true}
						/>
						<Profile
							name="Zeynep"
							position="Co-Academic Director of Cybersecurity society"
							description=""
							image="/images/team/zeynep.jpeg"
							linkedin="https://www.linkedin.com/in/zeynep-g%C3%BCler2005/"
							github="https://github.com/zeyneppguler23"
							cybersoc={true}
						/>
						<Profile
							name="Finn"
							position="Web Developer/ Site Maintainer"
							description="Oversee's the HSW website"
							image="/images/team/finn.jpeg"
							github="https://github.com/TheCheesyWiggle"
							linkedin="https://www.linkedin.com/in/finn-van-montfort-ab13731ab/"
						/>
					</div>
				</div>
			</div>

			{/* sponsors */}
			<div className="h-full flex items-center justify-center">
				<div className="flex flex-col items-center justify-center w-full h-full py-[5%] px-[15%] max-lg:px-[5%]">
					<Sponsor />
				</div>
			</div>

			{/* FAQ */}
			<div
				id="qa"
				className="flex flex-col"
			>
			<div
				id="qa"
				className="flex flex-col"
			>
				<div className="flex justify-around gap-16 max-lg:gap-8 w-full h-fit px-[15%] pt-32 pb-16 max-lg:px-[5%] bg-HSWsecondary2">
					<div className="w-full">
						<p className="text-6xl md:text-5xl sm:text-3xl font-bold text-HSWaccent">Questions &</p>
						<p className="text-6xl md:text-5xl sm:text-3xl font-bold text-HSWaccent">Answers</p>
						<br />
						<p className="text-md font-extralight">
							Have questions? Here you&apos;ll find all the answers to your questions. If there is something missing feel free to reach out to us
							with absolutely any queries via our email.
						</p>
						<p className="text-md font-extralight">
							Have questions? Here you&apos;ll find all the answers to your questions. If there is something missing feel free to reach out to us
							with absolutely any queries via our email.
						</p>
					</div>

					<div className="w-full flex justify-center items-center">
						<Image
							src={"/images/faq.png"}
							className="object-cover h-full w-fit"
							width={500}
							height={500}
							alt="FAQ"
						/>
						<Image
							src={"/images/faq.png"}
							className="object-cover h-full w-fit"
							width={500}
							height={500}
							alt="FAQ"
						/>
					</div>
				</div>

				<div className="bg-HSWprimary w-full h-fit flex gap-16 max-lg:gap-8 px-[15%] pt-32 pb-16 max-lg:px-[5%]">
					<div className="w-2/5 h-full flex flex-col gap-2 justify-center items-start max-lg:hidden">
						<Link
							href={"/"}
							className="font-light underline text-HSWaccent"
						>
							Hack South West 2025
						</Link>
						<Link
							href={"/conditions/intellectual"}
							className="font-light underline text-HSWaccent"
						>
							Intellectual Property
						</Link>
						<Link
							href={"/conditions/terms"}
							className="font-light underline text-HSWaccent"
						>
							Terms & Conditions
						</Link>
						<Link
							href={
								"https://guildgroupssetup-my.sharepoint.com/:f:/g/personal/excs_groups_exeterguild_com/Ej3uvzjcOhxJshyqPG-i7A4Bj-Vd2GYqpygapE_MtUPqgA?e=Xwt0sm"
							}
							target="_blank"
							className="font-light underline text-HSWaccent"
						>
							Access Files
						</Link>
					</div>

					<div className="w-full">
						<p className="text-2xl font-bold">Questions</p>

						<br />

						<div className="w-full h-fit transition-all duration-100 flex flex-col">
							{questions.map((q, index) => (
								<Question
									key={index}
									info={q}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
