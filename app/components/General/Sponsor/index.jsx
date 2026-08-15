"use client"

import SponsorCard from "./Card"

const info = {
	liminal: {
		name: "Liminal",
		image: "/images/sponsors/liminal-logo.webp",
		site: "https://www.becomeliminal.com",
		level: "gold",
	},
    nvidia: {
        name: "NVIDIA",
        image: "/images/sponsors/nvidia.png",
        site: "https://www.nvidia.com/",
        level: "silver",
    },
    superteam: {
		name: "Superteam Exeter",
		image: "/images/sponsors/superteamexeter.jpeg",
		site: "https://superteam.fun/",
		level: "silver",
	},
	solana: {
		name: "Solana",
		image: "/images/sponsors/solana.png",
		site: "https://www.solana.com/",
		level: "bronze",
	},
	excs: {
		name: "Computer Science Society",
		image: "/images/sponsors/excs.svg",
		site: "https://excs.uk/",
		level: "bronze",
	},
    exeter: {
        name: "Exeter CS Department",
        image: "/images/sponsors/exeter.png",
        site: "https://computerscience.exeter.ac.uk/",
        level: "bronze",
    },
    tenzing: {
        name: "Tenzing",
        image: "/images/sponsors/tenzing.jpg",
        site: "https://tenzingnaturalenergy.com/",
        level: "bronze",
    }
    // southwestcybersecuritycluster: {
	// 	name: "South West Cyber Security Cluster",
	// 	image: "/images/sponsors/swcsc.png",
	// 	site: "https://southwestcsc.org/",
	// 	level: "silver",
	// },
    // rootmepro: {
    //     name: "Root Me Pro",
    //     image: "/images/sponsors/rootmepro.png",
    //     site: "https://pro.root-me.org/",
	// 	level: "silver",
    // },
	// hh: {
	// 	name: "Hacking Hub",
	// 	image: "/images/sponsors/HackingHub.svg",
	// 	site: "https://www.hackinghub.io/",
	// 	level: "silver",
	// },
	// cybersoc: {
	// 	name: "Cyber Security Society",
	// 	image: "/images/sponsors/cybersoc.png",
	// 	site: "https://my.exeterguild.com/groups/TT2W9/cyber-security-society",
	// 	level: "bronze",
	// }
    // checkout: {
	// 	name: "Checkout.com",
	// 	image: "/images/sponsors/checkout.jpeg",
	// 	site: "https://www.checkout.com/",
	// 	level: "bronze",
	// },
}

export default function Sponsor() {
	const sponsors = Object.values(info)

	return (
		<section className="w-full">
			<div className="section-head">
				<span className="section-tag">Who has backed us</span>
				<h2 className="h-section">Past sponsors.</h2>
				<p className="lead">
					These organisations backed the event when it ran as Hack South West. Sponsorship for ExeHacks is open — if you want
					your logo here,{" "}
					<a
						href="mailto:excs@exeterguild.com"
						style={{ color: "var(--green)", textDecoration: "underline", textUnderlineOffset: "3px" }}
					>
						talk to us
					</a>
					.
				</p>
			</div>

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

            <div className="section-head mt-16">
                <span className="section-tag">Who we have worked with</span>
                <h2 className="h-section">Past partners.</h2>
            </div>

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
                    <SponsorCard
                        sName={"Encode Club"}
                        sSite={"https://www.encodeclub.com/"}
                        sImage={"/images/sponsors/encode.webp"}
                        sLevel={"partner"}
                    />
                    <SponsorCard
                        sName={"Hackathons UK"}
                        sSite={"https://www.hackathons.org.uk/"}
                        sImage={"/images/sponsors/hackathonsUk.png"}
                        sLevel={"partner"}
                    />
                </div>
            </div>
		</section>
	)
}
