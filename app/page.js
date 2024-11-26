'use client'

import { SouthWestImage } from "./components/General/SouthWestImage"

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Countdown } from "./components/Countdown";
import { IoIosArrowDown } from "react-icons/io";



import { Profile } from "./components/Team/Profiles";
import { Sponsor } from "./components/General/Sponsor";
import { Popup } from "./components/General/Popup";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Question } from "./components/Question";


export default function Home() {
	const images = Array.from({ length: 27 }, (_, i) => `/images/conveyor_belt/${i + 1}.jpg`)

	const [open, setOpen] = useState(false)
	const [currentImage1, setCurrentImage1] = useState("/images/conveyor_belt/1.jpg")
	const [currentImage2, setCurrentImage2] = useState("/images/conveyor_belt/2.jpg")
	const [fading1, setFading1] = useState(false)
	const [fading2, setFading2] = useState(false)

	const questions = [
		{
			question: "What is a hackathon?",
			answer: "A hackathon is an event where people come together to work on a project for a set amount of time. It is a great opportunity to learn new skills, meet new people, and have fun!"
		},
		{
			question: "Who can attend?",
			answer: "Anyone can"
		},
	]

	const info = {
		"swcsc": {
			name: "South West Cyber Security Cluster",
			image: "/images/sponsors/swcsc.png",
			description: "The South West Cyber Security Cluster is a group of cyber security professionals, academics, and enthusiasts who meet regularly to share knowledge and expertise. The cluster is a great place to learn about the latest trends in cyber security, network with other professionals, and find new opportunities in the field."
		},
		"dora": {
			name: "Dora Hacks",
			image: "/images/sponsors/dora.png",
			description: "DoraHacks is a global hackathon organization that aims to foster innovation and creativity in the tech community. They host hackathons all over the world, bringing together developers, designers, and entrepreneurs to collaborate on projects and build new products. DoraHacks is committed to creating a diverse and inclusive community that welcomes people from all backgrounds and skill levels."
		},
		"exeter": {
			name: "University of Exeter",
			image: "/images/sponsors/exeter.gif",
			description: "University of Exeter is a UK based university that offers a wide range of undergraduate and postgraduate courses in a variety of subjects. The university is known for its high-quality teaching and research, as well as its beautiful campus and vibrant student community. University of Exeter is committed to providing students with an exceptional education and a supportive learning environment."
		},
		"excs": {
			name: "Exeter Computer Science Society",
			image: "/images/sponsors/excs.svg",
			description: "The Exeter Computer Science Society is a student-run organization that aims to support and promote computer science education at the University of Exeter. The society organizes a variety of events and activities throughout the year, including hackathons, workshops, and socials. Exeter Computer Science Society is committed to creating a welcoming and inclusive community for all students interested in computer science."
		}
	}


	useEffect(() => {
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
			<div className="relative flex flex-col items-center justify-center w-full h-[100vh] px-[15%] max-lg:px-[5%] pt-[15%] max-lg:pt-[50%] z-50">
				<div className="hidden text-red-500" />
				<div className="flex flex-col gap-8 w-full h-full">
					<div className="flex justify-start items-baseline">
						<p className="text-8xl max-lg:text-4xl font-extrabold">Hack</p>

						<p className="text-HSWaccent text-8xl max-lg:text-4xl font-sans">S</p>
						<p className="text-4xl max-lg:text-2xl font-mono">outh</p>

						<p className="text-HSWaccent text-8xl max-lg:text-4xl font-sans">W</p>
						<p className="text-4xl max-lg:text-2xl font-mono">est</p>
					</div>

					<div className="text-wrap w-full">
						<p className="text-xl max-lg:text-xs font-mono">The largest Hackathon in the South West</p>
						<p className="flex gap-2 max-lg:text-xs font-bold">Exeter, Bristol, Plymouth, Bournemouth, Cardiff</p>
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
			<div id="about" className="flex max-lg:flex-col gap-32 max-lg:gap-8 w-full h-fit px-[15%] max-lg:px-[5%]">

				<div className="w-full flex gap-16 max-lg:p-16">
					<div className="relative w-1/2 max-lg:w-full h-96 mt-32 ">
						<div className="w-1/2 max-lg:w-full h-full">
							<div className="absolute w-full h-full border border-white -top-12 max-lg:-top-4 -left-8 max-lg:-left-3" />
							{
								currentImage1 && (
									<Image src={currentImage1} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${fading1 ? "opacity-0" : "opacity-100"}`} draggable={false} width={500} height={500} alt="not found" />
								)
							}
						</div>
					</div>

					<div className="relative w-1/2 h-96 max-lg:hidden">
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

				<div className="flex flex-col gap-16 max-lg:gap-8 w-fit">
					<div>
						<p className="text-6xl font-bold text-HSWtext max-lg:text-lg">Something</p>
						<p className="text-6xl font-bold text-HSWtext pl-16 max-lg:pl-8 max-lg:text-lg">About Us</p>
					</div>

					<div className="flex flex-col gap-2 justify-center items-center w-full font-light">
						<p className="max-lg:rounded-xs">Organised by the computer science society of University Of Exeter, Hack South West is the most fun and enjoyable experience for students around the uk. Available to everyone from beginners to experts, this is a great opportunity to get into hackathons. Our welcoming atmosphere will surely encourage you to go to more!</p>
						<p className="max-lg:rounded-xs">We will run a 24 hour event which will begin with registration and proceed to be ran overnight. Food and drinks will be provided throughout the duration of the event. We will also be providing a variety of workshops and talks to help you get started with your hackathon project.</p>
						<p className="max-lg:rounded-xs">The winners of the hackathon will receive the iconic raspberry pi zeros! so turn up with your A game!</p>
					</div>

				</div>
			</div>

			{/* day plan */}
			{/* <div id="plan" className="flex w-full h-fit py-[5%] px-[15%]">
				<p className="text-2xl font-bold text-HSWaccent">The Day Plan</p>

				
			</div> */}

			{/* the team */}
			<div id="team" className="flex flex-col items-center justify-center w-full h-fit py-[5%] px-[15%] max-lg:px-[5%]">


				{/* <div className="w-full h-fit grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] content-center gap-2"> */}
				<div class="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
					<Profile name="Zara" position="Media Lead" description="Manage the socials and public image" image="/images/team/zara.jpeg" />
					<Profile name="Charles" position="Sponsorship Lead" description="Locate and talk to sponsors" image="/images/team/charles.jpg" />
					<Profile name="Wiktor" position="Event Lead" description="Oversee the creation of hack south west" image="/images/team/wiktor.jpeg" github="https://github.com/inspizzz" linkedin="https://www.linkedin.com/in/wiktor-wiejak/" website="https://www.wiktor.uk" />
					<Profile name="Nehir" position="Event Co Lead" description="Assist with the creation of hack south west" image="/images/team/nehir.webp" />
					<Profile name="Swaroop" position="Website Lead" description="Take care of the website" image="/images/team/swaroop.webp" />
					<Profile name="Myo" position="Media" description="Oversee the creation of hack south west" image="/images/team/2.jpeg" />
					<Profile name="Sahil" position="Website" description="Oversee the creation of hack south west" image="/images/team/5.webp" />
					<Profile name="Tasbir" position="Oversight Protection" description="Overlook the formulation of HSW" image="/images/team/tasbir.jpeg" easter_egg={true} />
				</div>
			</div>

			{/* FAQ */}
			<div id="qa" className="flex flex-col">
				<div className="flex justify-around gap-16 max-lg:gap-8 w-full h-fit px-[15%] pt-32 pb-16 max-lg:px-[5%] bg-HSWsecondary2">
					<div className="w-full">
						<p className="text-6xl font-bold text-HSWtext max-lg:text-lg">Questions &</p>
						<p className="text-6xl font-bold text-HSWtext pl-16 max-lg:pl-8 max-lg:text-lg">Answers</p>
						<br />
						<p className="text-md font-extralight">Have questions? Here you&apos;ll find all the answers to your questions. If there is something missing feel free to reach out to us with absolutely any queries via our email.</p>
					</div>

					<div className="w-full flex justify-center items-center">
						<Image src={"/images/faq.png"} className="object-cover h-full w-fit" width={500} height={500} alt="FAQ" />
					</div>
				</div>

				<div className="bg-HSWprimary w-full h-fit flex gap-16 max-lg:gap-8 px-[15%] pt-32 pb-16 max-lg:px-[5%]">
					<div className="w-2/5 h-full flex flex-col gap-2 justify-center items-start max-lg:hidden">
						<Link href={"/"} className="font-light underline text-HSWaccent">Hack South West 2025</Link>
						<Link href={"/conditions/intellectual"} className="font-light underline text-HSWaccent">Intellectual Property</Link>
						<Link href={"/conditions/terms"} className="font-light underline text-HSWaccent">Terms & Conditions</Link>
						<Link href={"/conditions"} className="font-light underline text-HSWaccent">Files</Link>
					</div>

					<div className="w-full">
						<p className="text-2xl font-bold">Questions</p>

						<br />

						<div className="w-full h-fit transition-all duration-100 flex flex-col">
							{
								questions.map((q, index) => (
									<Question key={index} info={q} />
								))
							}
						</div>

					</div>
				</div>

			</div>

			{/* sponsors */}
			<div className="flex flex-col items-center justify-center w-full h-screen py-[5%] px-[15%] max-lg:px-[5%]">

				<Popup trigger={open} setTrigger={setOpen}>
					<div className="bg-HSWtext w-full h-fit z-50 rounded-2xl p-2 flex flex-col gap-8">
						<div className="flex">
							<h1 className="text-HSWprimary text-2xl font-extrabold">{open.name}</h1>
							<Image src={open.image} className="object-fit h-1/2 w-1/2" width={500} height={500} alt="sponsor" />
						</div>
						
						<p className="text-HSWprimary text-lg font-light">{open.description}</p>
					</div>
				</Popup>

				<p className="text-6xl font-bold text-HSWtext mb-16 max-lg:text-lg">Meet the Sponsors</p>

				<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
					<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/swcsc.png"} info={info["swcsc"]} />
					<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/dora.png"} info={info["dora"]} />
				</div>

				<div className="w-full h-fit flex gap-2 justify-center items-center">
					<Sponsor level={"gold"} setOpen={setOpen} image={"/images/sponsors/exeter.gif"} info={info["exeter"]} />
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} info={info["excs"]} />
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} info={info["excs"]} />
				</div>

				<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} info={info["excs"]} />
					<Sponsor level={"gray"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} info={info["excs"]} />
				</div>
			</div>
		</div>
	)
}
