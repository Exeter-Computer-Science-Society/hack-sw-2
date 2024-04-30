import Image from "next/image"
import { SouthWestImage } from "./components/General/SouthWestImage"
import { TopBar } from "./components/General/TopBar"

// icons
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Countdown } from "./components/General/Countdown";


export default function Home() {
	return (
		<div className="bg-primary w-full h-fit">
			<TopBar />
			<SouthWestImage />

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] pt-[15%]">

				{/* front facing page */}
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

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] py-[15%]">
				<Countdown />
			</div>
		</div>
  	)
}
