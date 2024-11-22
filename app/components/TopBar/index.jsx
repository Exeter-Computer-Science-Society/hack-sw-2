import Image from "next/image";
import Link from "next/link";

export function TopBar() {
	return (
		<div className="absolute top-0 left-0 right-0 w-full h-fit px-[15%] py-5 flex justify-between bg-HSWsecondary z-50 border-b border-HSWtext">
			<div className="flex gap-4 justify-center">
				<p className="text-HSWaccent self-center">1. </p>
				<Link href={"/"} className="text-HSWtext self-center">HSW 2024 </Link>

				<p className="text-HSWaccent self-center">2. </p>
				<Link href={"/conditions/terms"} className="text-HSWtext self-center">Terms & Conditions </Link>

				<p className="text-HSWaccent self-center">3. </p>
				<Link href={"/conditions/intellectual"} className="text-HSWtext self-center">Intellectual Property </Link>
			</div>
			<Link href="https://www.excs.uk" target="_blank">
				<Image src="/excs.svg" className="h-full object-cover" width={100} height={100} alt="not found" />
			</Link>

		</div>
	)
}