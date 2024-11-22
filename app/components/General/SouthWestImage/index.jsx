import Image from "next/image";

export function SouthWestImage() {
	return (
		<Image className="absolute top-0 right-0 object-cover object-right-top w-1/2" src="/images/uk-sw.png" width={2000} height={2000} alt="not found"/>
	)
}