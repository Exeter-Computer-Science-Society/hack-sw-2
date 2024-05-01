import Image from "next/image";

export function SouthWestImage() {
	return (
		<Image className="absolute top-0 right-0 object-cover object-right-top w-1/2" src="/images/uk-sw.png" width={500} height={500} alt="not found"/>
	)
}