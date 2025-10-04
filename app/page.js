'use client'

import { SouthWestImage } from "./components/General/SouthWestImage"

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Countdown } from "./components/Countdown";
import { IoIosArrowDown } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";



import { Profile } from "./components/Team/Profiles";
import { Sponsor } from "./components/General/Sponsor";
import { Popup } from "./components/General/Popup";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Question } from "./components/Question";
import { Loading } from "./components/Loading";
import { CiLinkedin } from "react-icons/ci";
import { BsDiamond } from "react-icons/bs";
import { BsSuitDiamond } from "react-icons/bs";
import { RiVipDiamondLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { TfiMore } from "react-icons/tfi";



import excs from '/public/images/sponsors/excs.svg'
import swcsc from '/public/images/sponsors/swcsc.png'
import solana from '/public/images/sponsors/solana.png'
import { RegistrationButton } from "./components/RegistrationButton";
// import imageAsset from '/public/images/sponsors/'
// import imageAsset from '/public/images/sponsors/'
// import imageAsset from '/public/images/sponsors/'
// import imageAsset from '/public/images/sponsors/'
// import imageAsset from '/public/images/sponsors/'
// import imageAsset from '/public/images/sponsors/'


export default function Home() {
	const images = Array.from({ length: 27 }, (_, i) => `/images/conveyor_belt/${i + 1}.jpg`)

	const [open, setOpen] = useState(false)
	const [currentImage1, setCurrentImage1] = useState("/images/conveyor_belt/1.jpg")
	const [currentImage2, setCurrentImage2] = useState("/images/conveyor_belt/2.jpg")
	const [fading1, setFading1] = useState(false)
	const [fading2, setFading2] = useState(false)

	const registration = new Date("2025-11-08T08:00:00").getTime()



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
			answer: "We enforce team sizes of no more than 5 people. This is to ensure that everyone has a fair chance of winning the competition."
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

	const info = {
		"swcsc": {
			name: "South West Cyber Security Cluster",
			image: "/images/sponsors/swcsc.png",
			description: "The South West Cyber Security Cluster is a group of cyber security professionals, academics, and enthusiasts who meet regularly to share knowledge and expertise. The cluster is a great place to learn about the latest trends in cyber security, network with other professionals, and find new opportunities in the field.",
			links: [
				{
					name: "Website",
					link: "https://www.southwestcsc.org/",
					html: <BsGlobe2 color="black" className="w-full h-full" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/south-west-cyber-security-cluster/",
					html: <CiLinkedin color="black" className="w-full h-full" />
				},
			]
		},
		"dora": {
			name: "Dora Hacks",
			image: "/images/sponsors/dora.png",
			description: "DoraHacks is a global hackathon organization that aims to foster innovation and creativity in the tech community. They host hackathons all over the world, bringing together developers, designers, and entrepreneurs to collaborate on projects and build new products. DoraHacks is committed to creating a diverse and inclusive community that welcomes people from all backgrounds and skill levels.",
			links: [
				{
					name: "Website",
					link: "https://www.dorahacks.com/",
					html: <BsGlobe2 color="black" className="w-full h-full" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/dorahacks/",
					html: <CiLinkedin color="black" className="w-full h-full" />
				},
			]
		},
		"exeter": {
			name: "University of Exeter",
			image: "/images/sponsors/exeter.gif",
			description: "University of Exeter is a UK based university that offers a wide range of undergraduate and postgraduate courses in a variety of subjects. The university is known for its high-quality teaching and research, as well as its beautiful campus and vibrant student community. University of Exeter is committed to providing students with an exceptional education and a supportive learning environment.",
			links: [
				{
					name: "Website",
					link: "https://www.exeter.ac.uk/",
					html: <BsGlobe2 color="black" className="w-full h-full" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/school/university-of-exeter/",
					html: <CiLinkedin color="black" className="w-full h-full" />
				}
			]
		},
		"excs": {
			name: "Exeter Computer Science Society",
			image: "/images/sponsors/excs.svg",
			description: "The Exeter Computer Science Society is a student-run organization that aims to support and promote computer science education at the University of Exeter. The society organizes a variety of events and activities throughout the year, including hackathons, workshops, and socials. Exeter Computer Science Society is committed to creating a welcoming and inclusive community for all students interested in computer science.",
			links: [
				{
					name: "Website",
					link: "https://www.excs.uk/",
					html: <BsGlobe2 color="black" className="w-full h-full" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/school/exeter-computing-society",
					html: <CiLinkedin color="black" className="w-full h-full" />
				}
			]
		},
		"mintsw": {
			name: "Mint South West",
			image: "/images/sponsors/mintswdark.png",
			description: "Mint South West is an organization that supports the crypto community in the South West. They host collaborative work space every friday and a pizza/beer night on the last friday of every month.",
			links: [
				{
					name: "Website",
					link: "https://www.mrwedge.co.uk/mintsw",
					html: <BsGlobe2 color="black" className="w-full h-full" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/mint-southwest/",
					html: <CiLinkedin color="black" className="w-full h-full" />
				}
			]
		},
		"techexeter": {
			name: "Tech Exeter",
			image: "/images/sponsors/techexeterdark.jpg",
			description: "Tech Exeter is a community of tech enthusiasts in Exeter. They host regular meetups, workshops, and conferences to bring together people who are passionate about technology. Tech Exeter is committed to creating a welcoming and inclusive community that supports learning and collaboration.",
			links: [
				{
					name: "Website",
					link: "https://www.techexeter.uk/",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/tech-exeter/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
		"hh": {
			name: "Hacking Hub",
			image: "/images/sponsors/HH-Logo-Full-Color.svg",
			description: "HackingHub is a cutting-edge platform for web application hacking education, designed and run by seasoned security experts. Our interactive, hands-on labs replicate real-world applications and infrastructure, providing an engaging and practical learning experience that both challenges and educates users.",
			links: [
				{
					name: "Website",
					link: "https://www.hackinghub.io/",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/hackinghub/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
		"pydata": {
			name: "Py Data",
			image: "/images/sponsors/pydatabig.jpeg",
			description: "Py Data is an Exeter based tech event organiser. They regularly host a wide range of exciting talks, involving the Exeter community to gain deeper knowledge in a variety of fields outside your domain! It is truly a remarkable movement ",
			links: [
				{
					name: "Website",
					link: "https://pydata.org/",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/pydata-exeter/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
		"cybersoc": {
			name: "Exeter CyberSecurity Society",
			image: "/images/sponsors/cybersoc.jpg",
			description: "We aim to establish a vibrant Cyber Community at the University of Exeter for current aspirants and prospective students, including undergraduates, postgraduates, and alumni. With enthusiastic backing from our professors, who are eager to participate, we aim to make a significant impact.",
			links: [
				{
					name: "Website",
					link: "https://my.exeterguild.com/groups/TT2W9/cyber-security-society",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/exeter-cyber-security-society/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
		"secridge": {
			name: "Sec Ridge",
			image: "/images/sponsors/secridgeblack.png",
			description: "Sec Ridge is a group empowering the next generation of cybersecurity professionals through ctf challenges and sponsorship. They have very generously assisted us with the creation of the ctf challenges and help with the organisation and running of the event. Check them out above!",
			links: [
				{
					name: "Website",
					link: "https://www.sec-ridge.com/",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/secridge/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
		"superteam": {
			name: "SuperTeam",
			image: "/images/sponsors/superteam.png",
			description: "We help the most promising projects in the Solana ecosystem launch and grow. We are organized as a collective of creatives, developers, and operators who are experienced in launching and growing technology businesses.",
			links: [
				{
					name: "Website",
					link: "https://superteam.fun/",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/superteam-talent/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
		"solana": {
			name: "Solana",
			image: "/images/sponsors/solana.png",
			description: "The Solana Foundation is a non-profit organization located in Zug, Switzerland dedicated to the decentralization, growth, and security of the Solana network. Solana is a proof of stake blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed.",
			links: [
				{
					name: "Website",
					link: "https://www.solana.com/",
					html: <BsGlobe2 color="black" className="w-full h-full p-1" />
				},
				{
					name: "linkedin",
					link: "https://www.linkedin.com/company/solana-foundation/",
					html: <CiLinkedin color="black" className="w-full h-full p-1" />
				}
			]
		},
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
					<div>
						<div className="flex justify-start items-baseline">
							<p className="text-8xl max-lg:text-4xl font-extrabold">Hack</p>

							<p className="text-HSWaccent text-8xl max-lg:text-4xl font-sans">S</p>
							<p className="text-4xl max-lg:text-2xl font-mono">outh</p>

							<p className="text-HSWaccent text-8xl max-lg:text-4xl font-sans">W</p>
							<p className="text-4xl max-lg:text-2xl font-mono">est</p>
						</div>

						<div className="flex gap-1">
							<p>Made possible with</p>
							<Link href={"https://southwestcsc.org/"}>
								<Image src={"/images/sponsors/swcsc.png"} width={100} height={100} alt="swcsc" />
							</Link>
							<p> and </p>
							<Link href={"https://www.sec-ridge.com/"} >
								<Image src={"/images/sponsors/secridge.png"} width={100} height={100} alt="secridge" />
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
							<p className="max-lg:text-sm">Saturday, Feb 8th, 9:00am</p>
						</div>

						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<p className="max-lg:text-sm">University of Exeter, Innovation Center</p>
						</div>
					</div>

					<div className="flex gap-4 max-lg:flex-col">
						<RegistrationButton registration={registration} />

						<button className="bg-HSWsecondary px-4 py-2 rounded-md border border-HSWaccent text-HSWaccent  flex gap-2 justify-center items-center" onClick={() => {
							document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
						}}>
							<TfiMore className="w-4 h-4"/>
							<p className='text-2xl max-lg:text-sm font-extrabold text-nowrap'>Learn More</p>
						</button>

						<Link href="/feedback" className="bg-HSWsecondary px-4 py-2 rounded-md border border-blue-500 text-blue-500 max-lg:text-sm flex gap-2 justify-center items-center">
							<VscFeedback className="w-4 h-4" />
							<p className='text-2xl max-lg:text-sm font-extrabold'>feedback</p>
						</Link>
					</div>
				</div>
			</div>

			{/* countdown */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] py-[15%]">
				<Countdown registration={registration} />
			</div>

			{/* about */}
			<div id="about" className="flex max-lg:flex-col justify-center items-center gap-32 max-lg:gap-8 w-full h-fit px-[15%] py-[10%] max-lg:px-[5%]">

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
								<RegistrationButton registration={registration} />
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
						<p className="max-lg:rounded-xs">Organised by the Computer Science Society (EXCS) and Cyber Security Society (CyberSoc) of University Of Exeter, Hack South West is the most fun and enjoyable experience for students around the uk. Available to everyone from beginners to experts, this is a great opportunity to get into hackathons. Our welcoming atmosphere will surely encourage you to go to more!</p>
						<p className="max-lg:rounded-xs">We will run a 24 hour event which will begin with registration and proceed to be ran overnight. Food and drinks will be provided throughout the duration of the event. We will also be providing a variety of workshops and talks to help you get started with your hackathon project.</p>
					</div>

				</div>
			</div>

			{/* Track information */}
			<div id="qa" className="flex flex-col h-fit">
				<div className="flex justify-around gap-16 max-lg:gap-8 w-full h-fit px-[15%] pt-32 pb-16 max-lg:px-[5%] bg-HSWsecondary2">
					<div className="w-full">
						<p className="text-6xl font-bold text-HSWtext max-lg:text-lg">Tracks &</p>
						<p className="text-6xl font-bold text-HSWtext pl-16 max-lg:pl-8 max-lg:text-lg">Challenges</p>
						<br />
						<p className="text-md font-extralight">What will you be doing during our event! This is mostly secret for now, wait until the start of the event to find out about our two tracks!</p>
					</div>

					<div className="w-full flex justify-center items-center">
						<Image src={"/images/smt.png"} className="object-cover h-full w-fit" width={500} height={500} alt="FAQ" />
					</div>
				</div>

				<div>
					{

						(new Date("2025-02-08T12:00:00").getTime() - new Date().getTime() > 0) ? (
							<div className="w-full h-full flex flex-col justify-center items-center">
								<div className="w-full h-fit flex justify-center items-start gap-16 pt-32">
									<div className="w-1/4 h-full border border-green-500 ">
										<h1 className="bg-green-500 text-black text-center text-2xl ">Easy Track</h1>
										<div className="w-full h-full p-4 flex flex-col gap-4">

											<div className="flex flex-col gap-1">
												<h1 className="text-2xl font-extrabold">Information</h1>
												<p>For all of you who are new to hackathons and would love to try out the experience while enjoying a slice of pizza playing our mini games, this is for you! rest assured you dont need any technical ability for this and we focus much more on the learning something new aspect here!</p>
												<p>This track is less heavily sponsored but still includes a keyboard each for the winning team and chocolates for runners up. Everyone will also receive FREE food and drinks during the event!</p>
											</div>

											<div>
												<h1 className="text-xl font-extrabold">Prizes available:</h1>
												<ul className="p-2">
													<li>Mechanical Keyboard</li>
													<li>Chocolates</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="w-1/4 h-full border border-red-500 ">
										<h1 className="bg-red-500 text-black text-center text-2xl ">Difficult Track</h1>
										<div className="w-full h-full p-4 flex flex-col gap-8">

											<div className="flex flex-col gap-1">
												<h1 className="text-2xl font-extrabold">Information</h1>
												<p>The experienced hackathon goers can choose this track! Here we explore cyber security in more depth with simple challenges for those of you who are completely new and more complex challenges to push yourselves, there is something for everyone here</p>
												<p>This track is more heavily sponsored by our sponsors so expect better prizes here as well!</p>
											</div>

											<div>
												<h1 className="text-xl font-extrabold">Prizes available:</h1>
												<ul className="p-2">
													<li>£100</li>
													<li>£50</li>
													<li>Bad USB Stick ( rubber duck alternative )</li>
													<li>High capacity SSD Card</li>
													<li>Hacking Hub Certificate</li>
													<li>Hacking Hub Courses Access</li>
												</ul>
											</div>
										</div>
									</div>

								</div>
								<Loading message="Wait here for the challenge release!" />
							</div>

						) : (
							<div className="bg-HSWprimary w-full h-fit flex flex-col justify-center items-center gap-16 max-lg:gap-8 px-[15%] pt-32 pb-16 max-lg:px-[5%]">
								<div className="w-full h-fit flex max-md:flex-col justify-center items-center gap-16">

									{/* track 1 hackathon challenge */}
									<div className="relative w-full h-full flex flex-col items-center gap-8 py-8 self-start">
										<Image src={"/images/hackathon.webp"} className="absolute top-0 left-0 right-0 w-full h-fit object-contain rounded-lg opacity-25 z-0" width={500} height={500} alt="smt" />
										<p className="text-3xl font-thin text-HSWtext pb-80"><b className="text-gold">Data 4 Good</b> Track</p>
										<p className="px-[10%]">This track will push you to develop your own solution to a data challenge faced by the world. We look out for solutions that incorporate a high level of technical knowledge to a problem of significant <b className="text-gold">impact</b> in the world. Although, you will likely only work on this problem for a limited amount of time, we encourage you to continue to develop and deploy your solutions to either the web or other sources to both add to your portfolio, but also benefit humanity!</p>
										<p className="px-[10%]"></p>

										<div className="px-[10%] self-start z-50">
											<Link href="https://dorahacks.io" target="_blank" className="border border-HSWtext rounded-lg px-4 py-2 w-fit h-fit self-start hover:border-HSWaccent hover:text-HSWaccent cursor-pointer transition-all duration-200">
												Learn More
											</Link>
										</div>
									</div>

									<br />

									{/* track 2 ctf challenge */}
									<div className="relative w-full h-full flex flex-col items-center gap-8 py-8 self-start">
										<p className="text-3xl font-thin text-HSWtext pb-80"><b className="text-gold font-extrabold">Capture The Flag</b> Track</p>
										<Image src={"/images/hacking.webp"} className="absolute top-0 left-0 right-0 w-full h-fit object-contain rounded-lg opacity-25" width={500} height={500} alt="smt" />
										<p className="px-[10%]">In this track, your cyber security technical knowledge will be pushed to the limit! With three exciting difficulties, there is something for everyone. Every completed challenge will grant you a key/flag which can be used to unlock points at <b className="text-gold">any moment</b> during the hackathon. To help you on your journey we have volunteers who work in the cyber security field to give you pointers and tips on how to approach these problems.</p>

										<div className="px-[10%] h-fit flex justify-center items-center gap-4">
											<BsDiamond className="w-16 h-16 text-bronze" />
											<FaArrowDown />
											<BsSuitDiamond className="w-16 h-16 text-silver" />
											<FaArrowDown />
											<RiVipDiamondLine className="w-16 h-16 text-gold" />
										</div>

										<p className="px-[10%]">There will be mystery prizes for those who win this track</p>

										<div className="px-[10%] self-start z-50">
											<Link href="https://dorahacks.io" target="_blank" className="border border-HSWtext rounded-lg px-4 py-2 w-fit h-fit self-start hover:border-HSWaccent hover:text-HSWaccent cursor-pointer transition-all duration-200">
												Learn More
											</Link>
										</div>
									</div>
								</div>

								<div>
									{/* Submssion */}
								</div>
							</div>
						)
					}
				</div>
			</div>

			{/* the team */}
			<div id="team" className="flex flex-col gap-32 items-center justify-center w-full h-fit py-[5%] px-[15%] max-lg:px-[5%]">
				<div className="w-full">
					<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
						<Profile name="Charlie" position="" description="" image="" linkedin="" />
						<Profile name="Wiktor" position="Founder of Hack South West & President of EXCS" description="Oversee's the creation of HSW" image="/images/team/wiktor.jpeg" github="https://github.com/inspizzz" linkedin="https://www.linkedin.com/in/wiktor-wiejak/" website="https://www.wiktor.uk" />
						<Profile name="Nehir" position="Event Co Director" description="Assist with the creation of HSW" image="/images/team/nehir.webp" linkedin="https://www.linkedin.com/in/nehir-yurtsever-2932a0233/" />
						<Profile name="Tasbir" position="Oversight Protection" description="Overlook the formulation of HSW" image="/images/team/tasbir.jpeg" linkedin="https://www.linkedin.com/in/tasbir-rahaman/" easter_egg={true} cover={true} />
						<Profile name="Maxime" position="" description="" image="" linkedin="" />
						<Profile name="Zeynep" position="" description="" image="" linkedin="" />
						<Profile name="Brendan" position="" description="" image="" linkedin="" />
						<Profile name="Finn" position="Website Maintainer" description="Oversee's the HSW website" image="/images/team/finn.jpeg" github="https://github.com/TheCheesyWiggle" linkedin="https://www.linkedin.com/in/finn-van-montfort-ab13731ab/" website="" />
					</div>
				</div>
			</div>

			{/* sponsors */}
			<div className="flex flex-col items-center justify-center w-full h-screen py-[5%] px-[15%] max-lg:px-[5%]">

				<Popup trigger={open} setTrigger={setOpen}>
					<div className="bg-HSWtext w-full h-fit z-50 rounded-2xl p-2 flex flex-col gap-8">
						<div className="flex justify-between">
							<h1 className="text-HSWprimary text-2xl font-extrabold">{open.name}</h1>
							<Image src={open.image} className="object-fit h-1/2 w-1/2 rounded-xl" width={250} height={250} alt="sponsor" />
						</div>

						<div className="w-full h-fit flex justify-start gap-4">
							{
								open?.links?.map((link, index) => (
									<Link key={index} href={link.link} target="_blank" rel="noreferrer" className="w-8 h-8 text-black">
										{link.html ? link.html : <a className="text-HSWaccent text-lg font-light underline">{link.name}</a>}
									</Link>

								))
							}
						</div>

						<p className="text-HSWprimary text-lg font-light">{open.description}</p>
					</div>
				</Popup>

				<p className="text-6xl font-bold text-HSWtext mb-16 max-lg:text-lg">Meet the Sponsors</p>

				<div className="flex flex-col justify-center items-center max-lg:hidden">
					<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
						<Sponsor level={"gold"} setOpen={setOpen} image={excs} info={info["excs"]} />
						<Sponsor level={"gold"} setOpen={setOpen} image={swcsc} info={info["swcsc"]} />

					</div>

					<div className="w-full h-fit flex gap-2 justify-center items-center">
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/mintsw.png"} info={info["mintsw"]} cover={true} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/cybersoc.png"} info={info["cybersoc"]} />
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/dora.png"} info={info["dora"]} />

					</div>

					<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/HH-Logo-Full-Color-Icon.svg"} info={info["hh"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/techexeter.png"} info={info["techexeter"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/pydata.png"} info={info["pydata"]} />
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/secridge.png"} info={info["secridge"]} />
					</div>

					<div className="w-full h-fit flex gap-2 justify-center items-center">
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/superteam.png"} info={info["superteam"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/exeter.gif"} info={info["exeter"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={solana} info={info["solana"]} />
					</div>
				</div>

				<div className="flex-col justify-center items-center hidden max-lg:flex">
					<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
						<Sponsor level={"gold"} setOpen={setOpen} image={"/images/sponsors/excs.svg"} info={info["excs"]} />
						<Sponsor level={"gold"} setOpen={setOpen} image={"/images/sponsors/swcsc.png"} info={info["swcsc"]} />

					</div>

					<div className="w-full h-fit flex gap-2 justify-center items-center">
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/HH-Logo-Full-Color-Icon.svg"} info={info["hh"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/cybersoc.png"} info={info["cybersoc"]} />
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/dora.png"} info={info["dora"]} />

					</div>

					<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/mintsw.png"} info={info["mintsw"]} cover={true} />
						<Sponsor level={"silver"} setOpen={setOpen} image={"/images/sponsors/secridge.png"} info={info["secridge"]} />
					</div>

					<div className="w-full h-fit flex gap-2 justify-center items-center">
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/techexeter.png"} info={info["techexeter"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/pydata.png"} info={info["pydata"]} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/exeter.gif"} info={info["exeter"]} />
					</div>

					<div className="w-full h-32 max-lg:w-2/3 max-lg:h-20 flex gap-2 justify-center items-center">
						<Sponsor level={"bronze"} setOpen={setOpen} image={solana} info={info["solana"]} cover={true} />
						<Sponsor level={"bronze"} setOpen={setOpen} image={"/images/sponsors/superteam.png"} info={info["superteam"]} />
					</div>
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
		</div>
	)
}
