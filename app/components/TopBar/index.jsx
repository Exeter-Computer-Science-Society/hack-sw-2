import Image from "next/image"
import Link from "next/link"
import { abcMarist } from '../../fonts';

export function TopBar() {
	return (
		<div className="absolute top-0 left-0 right-0 w-full h-fit px-[15%] max-lg:px-[5%] py-4 flex justify-between items-center gap-4 bg-HSWsecondary z-[100] border-b border-HSWtext max-lg:text-xs">
			<div className="flex gap-2 justify-center">
				<div className="flex gap-1">
					<p className="text-HSWaccent self-center">1.</p>
					<Link
						href={"/"}
						className="text-HSWtext self-center"
					>
						HSW 2024
					</Link>
				</div>

				<div className="flex gap-1">
					<p className="text-HSWaccent self-center">2.</p>
					<Link
						href={"/conditions/terms"}
						className="text-HSWtext self-center"
					>
						Terms & Conditions
					</Link>
				</div>

				<div className="flex gap-1">
					<p className="text-HSWaccent self-center">3.</p>
					<Link
						href={"/conditions/intellectual"}
						className="text-HSWtext self-center"
					>
						Intellectual Property
					</Link>
				</div>
			</div>

			<div className="flex gap-4 justify-center items-center">
				<Link
					href={"https://www.becomeliminal.com/"}
					className="flex gap-1 items-center h-8 w-fit"
				>
					<Image
						src={"/images/sponsors/liminal-logo.webp"}
						width={100}
						height={100}
						alt="liminal-logo"
						className="w-8"
					/>
                    <p className={`${abcMarist.variable} font-marist text-3xl`}>liminal</p>
				</Link>

                <Link
                    href={"https://excs.uk/"}
                    className="flex gap-1 items-center h-8 w-fit"
                >
                    <Image
                        src={"/images/excs.svg"}
                        width={100}
                        height={100}
                        alt="excs-logo"
                        className="w-16 h-16"
                    />
                </Link>
			</div>
		</div>
	)
}
