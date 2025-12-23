
// components
import Image from "next/image"
import Link from "next/link"

// icons
import { RxCross1 } from "react-icons/rx";


// fonts
import { abcMarist } from '../../fonts';

export function TopBar() {
	return (
		<div className="absolute top-0 left-0 right-0 w-full h-fit px-[15%] max-lg:px-[5%] py-4 flex justify-end items-center gap-4 bg-HSWsecondary z-[100] border-b border-HSWtext max-lg:text-xs">
			<div className="flex gap-4 justify-center items-center">
				<Link
                    target="_blank"
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

                <RxCross1 className="text-HSWtext w-4 h-4" />

                <Link
                    href={"https://excs.uk/"}
                    className="flex gap-1 items-center h-8 w-fit"
                >
                    <Image
                        src={"/images/sponsors/thumbnail_EXCS.png"}
                        width={100}
                        height={100}
                        alt="excs-logo"
                        className="w-12 h-12"
                    />
                </Link>
			</div>
		</div>
	)
}
