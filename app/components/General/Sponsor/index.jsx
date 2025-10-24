"use client"

import SponsorCard from "./Card"

const info = {
	liminal: {
		name: "Liminal",
		image: "/images/sponsors/liminal.svg",
		site: "https://www.liminal.ai",
		level: "gold",
	},
	southwestcybersecuritycluster: {
		name: "South West Cyber Security Cluster",
		image: "/images/sponsors/swcsc.png",
		site: "https://southwestcsc.org/",
		level: "silver",
	},
    rootmepro: {
        name: "Root Me Pro",
        image: "/images/sponsors/rootmepro.png",
        site: "https://pro.root-me.org/",
		level: "silver",
    },
	hh: {
		name: "Hacking Hub",
		image: "/images/sponsors/HackingHub.svg",
		site: "https://www.hackinghub.io/",
		level: "silver",
	},
	mintsw: {
		name: "Mint South West",
		image: "/images/sponsors/mintsw.png",
		site: "https://www.mrwedge.co.uk/mintsw",
		level: "bronze",
	},
	superteam: {
		name: "SuperTeam",
		image: "/images/sponsors/superteam.png",
		site: "https://superteam.fun/",
		level: "bronze",
	},
	solana: {
		name: "Solana",
		image: "/images/sponsors/solana.png",
		site: "https://www.solana.com/",
		level: "bronze",
	},
	checkout: {
		name: "Checkout.com",
		image: "/images/sponsors/checkout.jpeg",
		site: "https://www.checkout.com/",
		level: "bronze",
	},
	dora: {
		name: "Dora Hacks",
		image: "/images/sponsors/dora.png",
		site: "https://www.dorahacks.com/",
		level: "bronze",
	},
	excs: {
		name: "Computer Science Society",
		image: "/images/sponsors/excs.svg",
		site: "https://excs.uk/",
		level: "bronze",
	},
	cybersoc: {
		name: "Cyber Security Society",
		image: "/images/sponsors/cybersoc.png",
		site: "https://my.exeterguild.com/groups/TT2W9/cyber-security-society",
		level: "bronze",
	}
}

export default function Sponsor() {
	const sponsors = Object.values(info)

	return (
		<section className="w-full px-4 sm:px-8 py-8 sm:py-16">
			<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-HSWaccent mb-8 sm:mb-12 lg:mb-16">Meet the Sponsors</h2>

			<div className="mx-auto max-w-7xl">
				<div
					className="
					grid
					grid-cols-2
					sm:grid-cols-3
					lg:grid-cols-4
					xl:grid-cols-5
					gap-2
					sm:gap-3
					lg:gap-4
					p-2 sm:p-4 lg:p-6
				"
				>
					{sponsors.map((s, index) => (
						<SponsorCard
							key={index}
							sName={s.name}
							sSite={s.site}
							sImage={s.image}
							sLevel={s.level}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
