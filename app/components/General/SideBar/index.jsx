'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import { CiLocationArrow1 } from "react-icons/ci";


export function SideBar() {
	const pathname = usePathname()

	return (
		<div className="sticky left-4 top-4 w-fit h-fit p-2 flex flex-col z-20">
			<div className="flex items-center justify-center gap-2">
				<CiLocationArrow1 />
				<Link href="/" className={(pathname==="/") && "text-accent"}>HSW 2024 Nov</Link>
			</div>
			
			<div className="flex items-center justify-center gap-2">
				<CiLocationArrow1 />
				<Link href="/past/hsw-2024-feb">HSW 2024 Feb</Link>
			</div>			
		</div>
	)
}