import Image from "next/image";

export function SouthWestImage() {
	return (
		<>
			<p className="lg:hidden text-xs text-HSWtext absolute top-20 left-0 font-extralight">* use desktop for best experience</p>
			<Image className="absolute top-0 right-0 object-cover object-right-top w-1/2 max-lg:w-full" src="/images/uk-sw.png" width={2000} height={2000} alt="not found"/>
		</>
		
	)
}