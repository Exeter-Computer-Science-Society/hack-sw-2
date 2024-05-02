import Image from "next/image"
import { SouthWestImage } from "./components/General/SouthWestImage"
import { TopBar } from "./components/General/TopBar"

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Countdown } from "./components/General/Countdown";
import { SideBar } from "./components/General/SideBar";


export default function Home() {
	return (
		<div className="bg-primary w-full h-fit">
			<SideBar />
			<TopBar />
			<SouthWestImage />

			{/* front facing page */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] pt-[15%]">
				<div className="hidden text-red-500"/>
				<div className="flex flex-col gap-8 w-full h-full">
					<div className="flex justify-start items-baseline">
						<p className="text-8xl font-extrabold">Hack</p>

						<p className="text-accent text-8xl font-sans">S</p>
						<p className="text-4xl font-mono">outh</p>

						<p className="text-accent text-8xl font-sans">W</p>
						<p className="text-4xl font-mono">est</p>
					</div>

					<div className="">
						<p className="text-xl font-mono">The largest Hackathon in the South West</p>
						<p className="flex gap-2"> 
							<span className="font-bold">Exeter,</span>
							<span className="font-bold">Bristol,</span>
							<span className="font-bold">Plymouth,</span>
							<span className="font-bold">Bournemouth,</span>
							<span className="font-bold">Cardiff</span>
						</p>
					</div>

					<div className="">
						<div className="flex gap-2 items-center">
							<BsCalendar2Date />
							<p>Oct 2nd, 9:00am</p>
						</div>

						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<p>University of Exeter, Innovation Center</p>
						</div>
					</div>

					<div className="flex gap-4">
						<button className="bg-accent text-primary px-4 py-2 rounded-md">Enter for Free</button>
						<button className="bg-secondary px-4 py-2 rounded-md border border-accent text-accent">Learn More</button>
					</div>
				</div>
			</div>

			{/* countdown */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] pt-[15%]">
				<Countdown />
			</div>

			{/* about */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%]">
				<div className="flex flex-col gap-2 justify-center items-center w-1/2">
					<p className="text-2xl font-bold text-accent">What is Hack South West?</p>
					<p className="text-center">Organised by the computer science society of University Of Exeter, Hack South West is the most fun and enjoyable experience for students around the uk. Available to everyone from beginners to experts, this is a great opportunity to get into hackathons. Our welcoming atmosphere will surely encourage you to go to more!</p>
					<p className="text-center">We plan on running a 24 hour event which will begin with registration and proceed to be ran overnight. Food and drinks will be provided throughout the duration of the event. We will also be providing a variety of workshops and talks to help you get started with your hackathon project.</p>
					<p className="text-center">The winners of the hackathon will receive the iconic raspberry pi zeros! so turn up with your A game!</p>
				</div>
			</div>

			{/* sponsors */}
			<div className="">

			</div>
		</div>
  	)
}
