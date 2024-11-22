import Image from "next/image"
import Link from "next/link"

// icons
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";



export function Profile({name, position, description, image, github="https://www.github.com", linkedin="https://www.linkedin.com", website="https://www.example.com"}) {
	return (
		<div className="w-full h-fit flex flex-col justify-between gap-2 max-w-72 relative align-top select-none">
			<div className="relative w-full h-full flex flex-col justify-between gap-2 align-top ">

				<div className="absolute bg-HSWsecondary2 w-full h-3/4 bottom-0 z-0"></div>

				<div className="w-full flex justify-center">
					<Image src={image} className="mask mask-decagon h-36 w-36 self-center object-cover" draggable={false} width={500} height={500} alt="not found"/>
				</div>

				<div className="flex flex-col gap-2 z-10 min-h-52 justify-between">
					<div className="flex flex-col gap-2 w-full">
						<p className="text-2xl font-bold text-HSWaccent text-center">{name}</p>
						<p className="text-center">{position}</p>
						<p className="text-center">{description}</p>
					</div>
				
					<div className="bg-HSWaccent flex gap-2 w-full p-2 justify-center">
						<Link href={github} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><VscGithubAlt className="w-full h-full p-1"/></Link>
						<Link href={linkedin} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><CiLinkedin className="w-full h-full p-1"/></Link>
						<Link href={website} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><IoIosLink className="w-full h-full p-1"/></Link>
					</div>
				</div>				
			</div>
		</div>
	)
}