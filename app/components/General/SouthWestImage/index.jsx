import Image from "next/image";

export function SouthWestImage() {
	return (
		<div className="absolute top-0 right-0 w-full h-full">
			<Image className="absolute top-0 right-0 object-contain w-1/2 h-full" src="/images/uk-sw.png" width={500} height={500} alt="not found"/>
		</div>
	)
}