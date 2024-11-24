'use client'

import { SouthWestImage } from "./components/General/SouthWestImage"

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Countdown } from "./components/Countdown";

import { Profile } from "./components/Team/Profiles";
import { Sponsor } from "./components/General/Sponsor";
import { Popup } from "./components/General/Popup";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Home() {
	const images = Array.from({ length: 27 }, (_, i) => `/images/conveyor_belt/${i + 1}.jpg`)

	const [open, setOpen] = useState(false)
	const [currentImage1, setCurrentImage1] = useState("/images/conveyor_belt/1.jpg")
	const [currentImage2, setCurrentImage2] = useState("/images/conveyor_belt/2.jpg")
	const [fading1, setFading1] = useState(false)
	const [fading2, setFading2] = useState(false)


	useEffect(() => {
		// change the image
		const unload = setInterval(() => {

			console.log("selecting new image for 1")
			setFading1(true)
			
			setTimeout(() => {

				// select the next image
				const nextImage = images[Math.floor(Math.random() * images.length)]
				setCurrentImage1(nextImage)

				console.log(nextImage)
			}, 400)

			setTimeout(() => {
				setFading1(false)
			}, 500)

		}, 5000)

		return () => clearInterval(unload)
	}, [])

	useEffect(() => {



		const timeout = setTimeout(() => {
			// change the image
			const unload = setInterval(() => {
				console.log("selecting new image for 2")
				setFading2(true)

				setTimeout(() => {
					// select the next image
					const nextImage = images[Math.floor(Math.random() * images.length)]
					setCurrentImage2(nextImage)

					console.log(nextImage)
				}, 400)

				setTimeout(() => {
					setFading2(false)
				}, 500)


			}, 5000)
		}, 2500);

		// Cleanup to avoid memory leaks
		return () => clearTimeout(timeout);
	}, [])

	return (
		<div className="w-full h-fit">
			<SouthWestImage />

			{/* front facing page */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] max-lg:px-[5%] pt-[15%]">
				<div className="hidden text-red-500" />
				<div className="flex flex-col gap-8 w-full h-full">
					<div className="flex justify-start items-baseline">
						<p className="text-8xl max-lg:text-4xl font-extrabold">Hack</p>

						<p className="text-HSWaccent text-8xl max-lg:text-4xl font-sans">S</p>
						<p className="text-4xl max-lg:text-2xl font-mono">outh</p>

						<p className="text-HSWaccent text-8xl max-lg:text-4xl font-sans">W</p>
						<p className="text-4xl max-lg:text-2xl font-mono">est</p>
					</div>

					<div className="">
						<p className="text-xl max-lg:text-md font-mono">The largest Hackathon in the South West</p>
						<p className="flex gap-2">
							<span className="font-bold max-lg:text-md">Exeter,</span>
							<span className="font-bold max-lg:text-md">Bristol,</span>
							<span className="font-bold max-lg:text-md">Plymouth,</span>
							<span className="font-bold max-lg:text-md">Bournemouth,</span>
							<span className="font-bold max-lg:text-md">Cardiff</span>
						</p>
					</div>

					<div className="">
						<div className="flex gap-2 items-center">
							<BsCalendar2Date />
							<p className="max-lg:text-sm">Saturday, Feb 8th, 9:00am</p>
						</div>

						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<p className="max-lg:text-sm">University of Exeter, Innovation Center</p>
						</div>
					</div>

					<div className="flex gap-4">
						<button className="bg-HSWaccent text-HSWprimary px-4 py-2 rounded-md max-lg:text-sm">Registration Not Released</button>
						<button className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent max-lg:text-sm" onClick={() => {
							document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
						}}>Learn More</button>
					</div>
				</div>
			</div>

			{/* countdown */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] py-[15%]">
				<Countdown />
			</div>

			{/* about */}
			<div id="about" className="flex gap-32 w-full h-screen px-[15%]">
				<div className="flex flex-col gap-16 w-fit">
					<div>
						<p className="text-6xl font-bold text-HSWtext">Something</p>
						<p className="text-6xl font-bold text-HSWtext pl-16">About Us</p>
					</div>

					<div className="flex flex-col gap-2 justify-center items-center w-full font-light">
						<p className="">Organised by the computer science society of University Of Exeter, Hack South West is the most fun and enjoyable experience for students around the uk. Available to everyone from beginners to experts, this is a great opportunity to get into hackathons. Our welcoming atmosphere will surely encourage you to go to more!</p>
						<p className="">We will run a 24 hour event which will begin with registration and proceed to be ran overnight. Food and drinks will be provided throughout the duration of the event. We will also be providing a variety of workshops and talks to help you get started with your hackathon project.</p>
						<p className="">The winners of the hackathon will receive the iconic raspberry pi zeros! so turn up with your A game!</p>
					</div>

				</div>

				<div className="w-full flex gap-16">

					<div className="relative w-1/2 h-96 mt-32">
						<div className="w-1/2 h-full">
							<div className="absolute w-full h-full border border-white -top-12 -left-8" />
							{
								currentImage1 && (
									<Image src={currentImage1} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${fading1 ? "opacity-0" : "opacity-100"}`} draggable={false} width={500} height={500} alt="not found" />
								)
							}
						</div>
					</div>

					<div className="relative w-1/2 h-96">
						<div className="w-1/2 h-full flex items-center">
							<div className="absolute -bottom-6 w-full h-fit flex justify-center z-50">
								<button className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent">Registration Not Released</button>
							</div>

							{
								currentImage2 && (
									// <Image src={currentImage2} className="absolute top-0 left-0 w-full h-full object-cover" draggable={false} width={500} height={500} alt="not found" />
									<Image src={currentImage2} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${fading2 ? "opacity-0" : "opacity-100"}`} draggable={false} width={500} height={500} alt="not found" />
								)
							}
						</div>
					</div>
				</div>
			</div>

			{/* day plan */}
			{/* <div id="plan" className="flex w-full h-fit py-[5%] px-[15%]">
				<p className="text-2xl font-bold text-HSWaccent">The Day Plan</p>

				
			</div> */}

			{/* the team */}
			<div id="team" className="flex flex-col items-center justify-center w-full h-fit py-[5%] px-[15%]">
				
				<div className="flex flex-col gap-8">
					<div className="w-full h-fit flex gap-2 justify-center items-center">
						<Profile name="Zara" position="Media Lead" description="Manage the socials and public image" image="/images/team/zara.jpeg" />
						<Profile name="Charles" position="Sponsorship Lead" description="Locate and talk to sponsors" image="/images/team/charles.jpg" />
						<Profile name="Wiktor" position="Event Lead" description="Oversee the creation of hack south west" image="/images/team/wiktor.jpeg" github="https://github.com/inspizzz" linkedin="https://www.linkedin.com/in/wiktor-wiejak/" website="https://www.wiktor.uk" />
						<Profile name="Nehir" position="Event Co Lead" description="Assist with the creation of hack south west" image="/images/team/nehir.webp" />
						<Profile name="Swaroop" position="Website Lead" description="Take care of the website" image="/images/team/swaroop.webp" />
					</div>

					<div className="w-full h-fit flex gap-2 justify-center items-center">
						<Profile name="1" position="Media" description="Oversee the creation of hack south west" image="/images/team/2.jpeg" />
						<Profile name="2" position="Website" description="Oversee the creation of hack south west" image="/images/team/5.webp" />
						<Profile name="Tasbir" position="Oversight Protection" description="Not much really" image="/images/team/tasbir.jpeg" easter_egg={true} />
					</div>
				</div>

			</div>

			{/* sponsors */}
			<div className="flex flex-col items-center justify-center w-full h-screen py-[5%] px-[15%]">

				<Popup trigger={open} setTrigger={setOpen}>
					<div className="bg-HSWtext w-full h-96 z-50 rounded-2xl ">

					</div>
				</Popup>

				<p className="text-6xl font-bold text-HSWtext mb-16">Meet the Sponsors</p>
				
				<div className="w-full h-32 flex gap-2 justify-center items-center">
					<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} />
					<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/dora.webp"} />
				</div>

				<div className="w-full h-fit flex gap-2 justify-center items-center">
					<Sponsor level={"gold"} setOpen={setOpen} image={"/images/sponsors/exeter.gif"} />
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} />
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} />
				</div>

				<div className="w-full h-32 flex gap-2 justify-center items-center">
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} />
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} />
				</div>
			</div>
		</div>
	)
}
