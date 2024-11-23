import Image from "next/image"
import Link from "next/link"

// icons
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { useEffect } from "react";



export function Profile({ name, position, description, image, github = "https://www.github.com", linkedin = "https://www.linkedin.com", website = "https://www.example.com", easter_egg = false }) {

	


	return !easter_egg ? (
		<div className="w-full h-fit flex flex-col justify-between gap-2 max-w-72 relative align-top select-none">
			<div className="relative w-full h-full flex flex-col justify-between gap-2 align-top ">

				<div className="absolute bg-HSWsecondary2 w-full h-3/4 bottom-0 z-0"></div>

				<div className="w-full flex justify-center">
					<Image src={image} className="mask mask-decagon h-36 w-36 self-center object-cover" draggable={false} width={500} height={500} alt="not found" />
				</div>

				<div className="flex flex-col gap-2 z-10 min-h-52 justify-between">
					<div className="flex flex-col gap-2 w-full">
						<p className="text-2xl font-bold text-HSWaccent text-center">{name}</p>
						<p className="text-center">{position}</p>
						<p className="text-center">{description}</p>
					</div>

					<div className="bg-HSWaccent flex gap-2 w-full p-2 justify-center">
						<Link href={github} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><VscGithubAlt className="w-full h-full p-1" /></Link>
						<Link href={linkedin} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><CiLinkedin className="w-full h-full p-1" /></Link>
						<Link href={website} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><IoIosLink className="w-full h-full p-1" /></Link>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="w-full h-fit flex flex-col justify-between gap-2 max-w-72 relative align-top select-none">
			<div className="relative w-full h-full flex flex-col justify-between gap-2 align-top ">

				<div className="absolute bg-HSWsecondary2 w-full h-3/4 bottom-0 z-0"></div>

				<div className="w-full flex justify-center">
					<Image src={image} className="mask mask-decagon h-36 w-36 self-center object-cover" draggable={false} width={500} height={500} alt="not found" />
				</div>

				<div className="flex flex-col gap-2 z-10 min-h-52 justify-between">
					<div className="flex flex-col gap-2 w-full">
						<p className="text-2xl font-bold text-HSWaccent text-center">{name}</p>
						<p className="text-center">{position}</p>
						<p className="text-center">{description}</p>
					</div>

					<div className="bg-HSWaccent flex gap-2 w-full p-2 justify-center">
						<Link id="git" href={github} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-gold cursor-pointer transition-all duration-200" onMouseEnter={() => {
							console.log("enter")
							// move it slightly away away from the mouse

							// get the div
							const div = document.getElementById("git");

							// get the centre of the div
							const rect = div.getBoundingClientRect();
							const centerX = rect.x + rect.width / 2;
							const centerY = rect.y + rect.height / 2;

							// console.log(centerX, centerY);

							// get the mouse position
							const mouseX = window.event.clientX;
							const mouseY = window.event.clientY;

							// get the distance between the mouse and the centre of the div
							const distanceX = mouseX - centerX;
							const distanceY = mouseY - centerY;
							// console.log(distanceX, distanceY);

							// get the angle
							const angle = Math.atan2(distanceY, distanceX);
							console.log(angle);
							// get the new position
							let x = Math.sin(-angle-1.5)*100;
							let y = Math.cos(-angle-1.5)*100;
							// console.log(x)

							// check if the bounds exceed the screen
							if (centerX+x < 0) x = 100;
							if (centerY+y < 0) y = 100;
							if (centerX+x > window.innerWidth) x = window.innerWidth-100;
							if (centerY+y > window.innerHeight) y = window.innerHeight-100;


							// set the divs new position

							div.style.transform = `translate(${x}px, ${y}px)`;


						}}><VscGithubAlt className="w-full h-full p-1 animate-pulse text-HSWprimary" /></Link>
						<Link href={linkedin} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><CiLinkedin className="w-full h-full p-1" /></Link>
						<Link href={website} target="_blank" className="text-center justify-center rounded-full w-8 h-8 bg-HSWsecondary cursor-pointer"><IoIosLink className="w-full h-full p-1" /></Link>
					</div>
				</div>
			</div>
		</div>
	)
}