import Image from "next/image";
import Link from "next/link";

export function DocumentCard({ document }) {
	return (
		<Link href={document.link} className="w-[300px] h-[300px] bg-HSWsecondary rounded-md border border-HSWsecondary2 cursor-pointer relative group">

			<div className="absolute top-2 left-2 w-full h-full bg-white rounded-lg shadow-HSWtext shadow-sm group-hover:top-0 group-hover:left-0 transition-all duration-200 z-10" />

			<div className="absolute z-20 bg-black">
				<Image src={document.image} alt={document.name} width={300} height={300} className="rounded-t-md w-full h-48 object-cover" />

				<p className="text-2xl text-HSWaccent font-extrabold">{document.name}</p>
				<p className="text-md text-HSWtext">{document.description}</p>
			</div>

		</Link>

	)
}