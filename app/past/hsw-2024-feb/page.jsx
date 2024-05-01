import { SideBar } from "@/app/components/General/SideBar";
import { SouthWestImage } from "@/app/components/General/SouthWestImage";
import { TopBar } from "@/app/components/General/TopBar";
import Image from "next/image";
import Link from "next/link";

// icons
import { FiTarget } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";



/**
 * 128 tickets sold
 * 56% new customers
 * 70% male 23% female
 * plymouth bath exeter, durham
 * @returns 
 */
export default function PastHackathon() {
	return (
		<div className="bg-primary w-full h-fit">
			<SideBar />
			<TopBar />
			<SouthWestImage />

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] pt-[15%]">

			<div className="flex flex-col gap-8 w-full h-full">
					<div className="flex justify-start items-baseline gap-4">
						<div className="flex justify-start items-baseline">
							<p className="text-8xl font-extrabold">Hack</p>

							<p className="text-accent text-8xl font-sans">S</p>
							<p className="text-4xl font-mono">outh</p>

							<p className="text-accent text-8xl font-sans">W</p>
							<p className="text-4xl font-mono">est</p>
						</div>
					</div>

					<div className="">
						<p className="text-xl font-mono">We ran the largest Hackathon in the South West</p>
						<p className="flex gap-2"> 
							<span className="font-bold">Exeter,</span>
							<span className="font-bold">Bristol,</span>
							<span className="font-bold">Plymouth,</span>
							<span className="font-bold">Bournemouth,</span>
							<span className="font-bold">Cardiff</span>
						</p>
					</div>

					{/* targets / statistics */}
					<div>
						<div className="flex gap-2 items-center">
							<FiTarget />
							<p>128 tickets sold</p>
						</div>

						<div className="flex gap-2 items-center">
							<FiTarget />
							<p>56% new customers</p>
						</div>

						<div className="flex gap-2 items-center">
							<FiTarget />
							<p>70% male, 23% female attendees</p>
						</div>

						<div className="flex gap-2 items-center">
							<FiTarget />
							<p>13 incredible financial products developed</p>
						</div>
					</div>
				</div>
			</div>

			{/* photo gallery */}
			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[5%]">
				<h1 className="text-4xl self-start">Some Photos</h1>

				<div className="w-full h-full p-2 grid grid-flow-column grid-cols-4 gap-2 ">
					<Image src="/images/pizza.JPEG" className="rounded-2xl w-full h-full object-cover" width={500} height={500} alt="not found" />
					<Image src="/images/everyone.JPEG" className="rounded-2xl w-full h-full col-span-2" width={500} height={500} alt="not found" />
					<div className="w-full h-full rounded bg-accent" />
					<Image src="/images/organisers.JPEG" className=" rounded-2xl w-full h-full object-cover col-span-2" width={500} height={500} alt="not found" />
					
					<div className="w-full h-full rounded bg-accent" />
					<Link href="https://onedrive.live.com/?authkey=%21AGQXRe896Z0mers&id=DF91CDD1C74AC0FB%2110730&cid=DF91CDD1C74AC0FB" className="h-full w-full rounded-2xl bg-primary border border-accent hover:border-text flex flex-col justify-center items-center">
						<p>View More Photos</p>
						<IoCameraOutline />
					</Link>
					
				</div>

				{/*
				<div className="w-fit h-fit flex flex-col gap-2 items-center justify-center">
					<Image src="/images/everyone.JPEG" className="object-contains rounded-2xl aspect-auto w-full" width={600} height={100} alt="not found" />

					<div className="w-full h-96 flex gap-2">
						<Image src="/images/pizza.JPEG" className="rounded-2xl aspect-auto" width={500} height={500} alt="not found" />
						
						
					</div>
				</div>
				*/}
			</div>

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[5%]">
				<h1 className="text-4xl self-start">The Winners</h1>
			</div>

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[5%]">
				<h1 className="text-4xl self-start">The Runners Up</h1>
			</div>

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[5%]">
				<h1 className="text-4xl self-start">The Sponsors</h1>
			</div>
		</div>
	)
}