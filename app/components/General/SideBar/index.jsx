'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import { CiLocationArrow1 } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa6";
import { CiViewTimeline } from "react-icons/ci";
import { IoDocumentsOutline } from "react-icons/io5";
import { useState } from 'react';




export function SideBar() {
	const pathname = usePathname()

	const [showing, setShowing] = useState(false)


	return (
		<div className="absolute left-4 top-4 w-fit h-fit p-2 flex flex-col z-20">
			<div className='flex flex-col w-fit h-fit'>

				{/* title */}
				<div className='flex gap-2 justify-start items-center'>
					<FaGripLines className='w-10 h-10 p-1 bg-HSWsecondary2 rounded-md cursor-pointer border border-HSWsecondary2 hover:shadow-HSWtext shadow-md z-50' onClick={() => {
						setShowing(!showing)
					}} />
					<h1 className="text-2xl">Current HSW</h1>
				</div>

				<br />

				{
					showing && (
						<>
							{/* current HSW */}
							<div className="flex items-center justify-start gap-2">
								<CiLocationArrow1 />
								<Link href="/" className={(pathname === "/") ? "text-HSWaccent text-xl font-extrabold" : "text-xl font-extrabold"}>HSW 2024 Nov</Link>
							</div>

							<div className='flex flex-col gap-1 pl-4'>
								<div className="flex items-center justify-start gap-2">
									<FaHashtag />
									<Link href="/#about">About</Link>
								</div>

								<div className="flex items-center justify-start gap-2">
									<FaHashtag />
									<Link href="/#plan">Day Plan</Link>
								</div>

								<div className="flex items-center justify-start gap-2">
									<FaHashtag />
									<Link href="/#team">The Team</Link>
								</div>
							</div>

							<br />


							{/* documents */}
							<div className="flex items-center justify-start gap-2">
								<IoDocumentsOutline />
								<Link href="/conditions" className={(pathname === "/conditions") ? "text-HSWaccent text-xl font-extrabold" : "text-xl font-extrabold"}>Documents</Link>
							</div>

							<div className='flex flex-col gap-1 pl-4'>
								<div className="flex items-center justify-start gap-2">
									<IoDocumentOutline />
									<Link href="/conditions/terms" className={(pathname === "/conditions/terms") ? "text-HSWaccent" : ""}>Terms & Conditions</Link>
								</div>

								<div className="flex items-center justify-start gap-2">
									<IoDocumentOutline />
									<Link href="/conditions/intellectual" className={(pathname === "/conditions/intellectual") ? "text-HSWaccent" : ""}>Intellectual Property</Link>
								</div>
							</div>

							<br />


							{/* past hsw */}
							<div className="flex items-center justify-start gap-2">
								<CiViewTimeline />
								<Link href="/past/hsw-2024-feb" className={(pathname === "/past/hsw-2024-feb") ? "text-HSWaccent text-xl font-extrabold" : "text-xl font-extrabold"}>Past HSW</Link>
							</div>

							<div className='flex flex-col gap-1 pl-4'>
								<div className="flex items-center justify-start gap-2">
									<CiLocationArrow1 />
									<Link href="https://onedrive.live.com/?authkey=%21AGQXRe896Z0mers&id=DF91CDD1C74AC0FB%2110730&cid=DF91CDD1C74AC0FB">HSW 2024 images</Link>
								</div>
							</div>
						</>
					)
				}

			</div>
		</div>
	)
}