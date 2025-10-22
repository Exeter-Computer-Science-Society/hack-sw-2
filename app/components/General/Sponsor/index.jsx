"use client"

import SponsorCard from "./Card"

const info = {
    southwestcybersecuritycluster: {
		name: "South West Cyber Security Cluster",
		image: "/images/sponsors/swcsc.png",
		description: "The South West Cyber Security Cluster is a community of cyber security professionals in the South West of England.",
		site: "https://southwestcsc.org/",
		linkedin: "https://www.linkedin.com/company/south-west-cyber-security-cluster/"
	},
	// liminal: {
	// 	name: "Liminal",
	// 	image: "/images/sponsors/liminal.svg",
	// 	description: "Liminal is a cybersecurity platform designed to help regulated enterprises securely adopt generative AI technologies.",
	// 	site: "https://www.liminal.ai",
	// 	linkedin: "https://www.linkedin.com/company/liminal-ai-security/"
	// },
	
	// exeter: {
	// 	name: "University of Exeter",
	// 	image: "/images/sponsors/exeter.gif",
	// 	description: "The University of Exeter is a UK-based university",
	// 	site: "https://www.exeter.ac.uk/",
	// 	linkedin: "https://www.linkedin.com/school/university-of-exeter/"
	// },
    hh: {
		name: "Hacking Hub",
		image: "/images/sponsors/HackingHub.svg",
		description: "HackingHub is a cutting-edge platform for web application hacking education",
		site: "https://www.hackinghub.io/",
		linkedin: "https://www.linkedin.com/company/hackinghub/"
	},
	mintsw: {
		name: "Mint South West",
		image: "/images/sponsors/mintsw.png",
		description: "Mint South West supports the crypto community in the South West",
		site: "https://www.mrwedge.co.uk/mintsw",
		linkedin: "https://www.linkedin.com/company/mint-southwest/"
	},
	// techexeter: {
	// 	name: "Tech Exeter",
	// 	image: "/images/sponsors/techexeter.png",
	// 	description: "Tech Exeter is a community of tech enthusiasts hosting regular meetups, workshops, and conferences",
	// 	site: "https://www.techexeter.uk/",
	// 	linkedin: "https://www.linkedin.com/company/tech-exeter/"
	// },
	
	// pydata: {
	// 	name: "Py Data",
	// 	image: "/images/sponsors/pydata.png",
	// 	description: "PyData Exeter hosts talks and community events",
	// 	site: "https://pydata.org/",
	// 	linkedin: "https://www.linkedin.com/company/pydata-exeter/"
	// },
	
	superteam: {
		name: "SuperTeam",
		image: "/images/sponsors/superteam.png",
		description: "SuperTeam helps the most promising projects in the Solana ecosystem",
		site: "https://superteam.fun/",
		linkedin: "https://www.linkedin.com/company/superteam-talent/"
	},
	solana: {
		name: "Solana",
		image: "/images/sponsors/solana.png",
		description: "The Solana Foundation supports the decentralization, growth, and security of the Solana network",
		site: "https://www.solana.com/",
		linkedin: "https://www.linkedin.com/company/solana-foundation/"
	},
    checkout: {
		name: "Checkout",
		image: "/images/sponsors/checkout.jpeg",
		description: "Checkout is a global payment solutions provider",
		site: "https://www.checkout.com/",
		linkedin: "https://www.linkedin.com/company/checkout/"
	},
    dora: {
		name: "Dora Hacks",
		image: "/images/sponsors/dora.png",
		description: "DoraHacks is a global hackathon organization that aims to foster innovation and creativity in the tech community.",
		site: "https://www.dorahacks.com/",
		linkedin: "https://www.linkedin.com/company/dorahacks/"
	},
    excs: {
		name: "Computer Science Society",
		image: "/images/sponsors/excs.svg",
		description: "The Exeter Computer Science Society supports computer science students through hackathons, workshops, and social events",
		site: "https://excs.uk/",
		linkedin: "https://www.linkedin.com/school/exeter-computing-society/"
	},
    cybersoc: {
		name: "Cyber Security Society",
		image: "/images/sponsors/cybersoc.png",
		description: "The Exeter CyberSecurity Society is building a vibrant cyber community at the University of Exeter",
		site: "https://my.exeterguild.com/groups/TT2W9/cyber-security-society",
		linkedin: "https://www.linkedin.com/company/exeter-cyber-security-society/"
	},
}

export default function Sponsor() {
	const sponsors = Object.values(info)

	return (
		<section className="w-full px-8 py-16">
			<h2 className="text-6xl font-bold text-HSWaccent mb-16 max-lg:text-lg">Meet the Sponsors</h2>

			<div className="mx-auto max-w-7xl">
				<div
					className="
					grid
					grid-cols-1
					lg:grid-cols-4
					xl:grid-cols-6
					gap-1
					p-3 sm:p-4 lg:p-6

				"
				>
					{sponsors.map((s, index) => (
						<SponsorCard
                            key={index}
							sName={s.name}
							sSite={s.site}
							sSummary={s.description}
							sImage={s.image}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
