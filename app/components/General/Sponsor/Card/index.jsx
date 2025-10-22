"use client"
import Image from "next/image"
import dynamic from "next/dynamic"

const PinContainer = dynamic(() => import("@/app/components/ui/3d-pin").then((m) => m.PinContainer), {
	ssr: false
})

export default function SponsorCard({ sName, sSite, sSummary, sImage }) {
	return (
		<div className="h-full w-full flex items-center justify-center p-2 sm:p-3">
			<PinContainer
				title={sSite}
				href={sSite}
			>
				<div className="flex basis-full flex-col justify-around p-2 sm:p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[8rem] h-[12rem] sm:w-[10rem] sm:h-[15rem]">
					<h3 className="max-w-xs !pb-2 !m-0 font-bold text-xs sm:text-base text-slate-100">{sName}</h3>
					<div className="flex-1 aspect-square w-full rounded-lg mt-2 sm:mt-4">
						<Image
							src={sImage}
							alt={sName}
							width={250}
							height={400}
							className="object-contain p-2 sm:p-4 w-full h-full"
						/>
					</div>
				</div>
			</PinContainer>
		</div>
	)
}
