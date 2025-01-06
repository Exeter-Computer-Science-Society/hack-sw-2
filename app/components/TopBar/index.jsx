import Image from "next/image";
import Link from "next/link";

export function TopBar() {
	return (
		<div className="absolute top-0 left-0 right-0 w-full h-fit px-[15%] max-lg:px-[5%] py-5 flex justify-between items-center gap-4 bg-HSWsecondary z-[100] border-b border-HSWtext max-lg:text-xs">
			<div className="flex gap-2 justify-center">
				<div className="flex gap-1">
					<p className="text-HSWaccent self-center">1.</p>
					<Link href={"/"} className="text-HSWtext self-center">HSW 2024</Link>
				</div>

				<div className="flex gap-1">
					<p className="text-HSWaccent self-center">2.</p>
					<Link href={"/conditions/terms"} className="text-HSWtext self-center">Terms & Conditions</Link>
				</div>

				<div className="flex gap-1">
					<p className="text-HSWaccent self-center">3.</p>
					<Link href={"/conditions/intellectual"} className="text-HSWtext self-center">Intellectual Property</Link>
				</div>

			</div>

			<div className="flex gap-4 justify-center items-center">
				<Link href="https://www.excs.uk" target="_blank" className="">
					<Image src="/excs.svg" className="h-fit object-contain" width={100} height={100} alt="not found" />
				</Link>
			</div>




		</div>
	)
}