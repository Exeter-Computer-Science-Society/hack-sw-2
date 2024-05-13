import { SideBar } from "@/app/components/General/SideBar";
import { SouthWestImage } from "@/app/components/General/SouthWestImage";
import { TopBar } from "@/app/components/General/TopBar";
import Image from "next/image";
import Link from "next/link";

// icons
import { FiTarget } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { GiTargetPrize } from "react-icons/gi";
import { Flipper } from "./Flipper";



/**
 * 128 tickets sold
 * 56% new customers
 * 70% male 23% female
 * plymouth bath exeter, durham
 * @returns 
 */
export default function PastHackathon() {
	return (
		<div className="bg-HSWprimary w-full h-fit">
			<SideBar />
			<TopBar />
			<SouthWestImage />

			<div className="flex flex-col items-center justify-center w-full h-[100vh] px-[15%] pt-[15%]">

				<div className="flex flex-col gap-8 w-full h-full">
					<div className="flex justify-start items-baseline gap-4">
						<div className="flex justify-start items-baseline">
							<p className="text-8xl font-extrabold">Hack</p>

							<p className="text-HSWaccent text-8xl font-sans">S</p>
							<p className="text-4xl font-mono">outh</p>

							<p className="text-HSWaccent text-8xl font-sans">W</p>
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
			<div className="flex flex-col items-center justify-center w-full h-fit px-[5%]">
				<h1 className="text-4xl self-start">Some Photos</h1>

				<div className="w-full h-full p-2 grid grid-flow-column grid-cols-4 gap-2 ">
					<Image src="/images/pizza.JPEG" className="rounded-2xl w-full h-full object-cover" width={500} height={500} alt="not found" />
					<Image src="/images/everyone.JPEG" className="rounded-2xl w-full h-full col-span-2" width={500} height={500} alt="not found" />
					<Image src="/images/introduction.jpg" className="rounded-2xl w-full h-full" width={500} height={500} alt="not found" />
					<Image src="/images/organisers.JPEG" className=" rounded-2xl w-full h-full object-cover col-span-2" width={500} height={500} alt="not found" />
					
					<Image src="/images/presentation.JPEG" className="rounded-2xl w-full h-full" width={500} height={500} alt="not found" />
					<Link href="https://onedrive.live.com/?authkey=%21AGQXRe896Z0mers&id=DF91CDD1C74AC0FB%2110730&cid=DF91CDD1C74AC0FB" className="h-full w-full rounded-2xl bg-HSWprimary border border-HSWaccent hover:border-HSWtext flex flex-col justify-center items-center" target="_blank">
						<p>View More Photos</p>
						<IoCameraOutline />
					</Link>
				</div>
			</div>

			<div className="flex flex-col gap-8 items-center justify-center w-full h-[100vh] px-[5%] py-[5%]">
				<h1 className="text-4xl">Winners</h1>

				<div className="flex gap-4 w-2/3 justify-between h-[300px]">
					

					<Flipper className="w-full h-full">
						{/* front facing */}
						<div className="w-full h-full aspect-auto">
							<Image src="/images/winners.JPEG" className="rounded-2xl w-full h-full object-cover" width={500} height={500} alt="not found" />
						</div>

						{/* reat facing */}
						<div className="w-full h-full flex flex-col justify-center items-center gap-2">
							<p className="text-2xl font-bold">Second Place</p>

							<div className="flex gap-2 justify-start items-center">
								<FiTarget />
								<p className="text-xl">BathX</p>
							</div>
							
							<div className="flex gap-2 justify-start items-center">
								<FiTarget />
								<p className="text-xl">pool</p>
							</div>

							<div className="flex gap-2 justify-start items-center">
								<GiTargetPrize />
								<p className="text-xl text-red-500">Raspberry Pi Zeros</p>
							</div>
						</div>
					</Flipper>

					<Flipper className="w-full h-full">
						{/* front facing */}
						<div className="w-full h-full aspect-auto">
							<Image src="/images/winners.JPEG" className="rounded-2xl w-full h-full object-cover" width={500} height={500} alt="not found" />
						</div>

						{/* reat facing */}
						<div className="w-full h-full flex flex-col justify-center items-center gap-2">
							<p className="text-2xl font-bold">First Place</p>

							<div className="flex gap-2 justify-start items-center">
								<FiTarget />
								<p className="text-xl">Headge Hackers</p>
							</div>
							
							<div className="flex gap-2 justify-start items-center">
								<FiTarget />
								<p className="text-xl">LendEase</p>
							</div>

							<div className="flex gap-2 justify-start items-center">
								<GiTargetPrize />
								<p className="text-xl">Raspberry Pi Zeros</p>
							</div>
						</div>
					</Flipper>

					<Flipper className="w-full h-full">
						{/* front facing */}
						<div className="w-full h-full">
							<Image src="/images/winners.JPEG" className="rounded-2xl w-full h-full object-cover" width={500} height={500} alt="not found" />
						</div>

						{/* reat facing */}
						<div className="w-full h-full flex flex-col justify-center items-center gap-2">
							<p className="text-2xl font-bold">Third Place</p>

							<div className="flex gap-2 justify-start items-center">
								<FiTarget />
								<p className="text-xl">Asians ++</p>
							</div>
							
							<div className="flex gap-2 justify-start items-center">
								<FiTarget />
								<p className="text-xl">Asians ++ Training</p>
							</div>

							<div className="flex gap-2 justify-start items-center">
								<GiTargetPrize />
								<p className="text-xl">Raspberry Pi Zeros</p>
							</div>
						</div>
					</Flipper>
				</div>
				
			</div>

			<div className="flex items-center gap-2 justify-center w-full h-fit px-[5%] py-[5%]">
				<h1 className="text-4xl self-center select-none">Sponsored By</h1>
				<Link href={"https://excs.uk"} target="_blank">
					<Image  src="/excs.svg" className="self-center rounded-2xl w-fit h-16 object-contain select-none" width={500} height={500} alt="not found" />
				</Link>
				
			</div>
		</div>
	)
}