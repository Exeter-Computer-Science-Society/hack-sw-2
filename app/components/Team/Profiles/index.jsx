import Image from "next/image"
import Link from "next/link"

// icons
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

// "Kazybek Khairulla" -> "KK". Used when there is no photo on file yet.
function initialsOf(name) {
	return String(name || "")
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0].toUpperCase())
		.join("")
}

export function Profile({ name, position, description, image = "", github = "", linkedin = "", website = "", cybersoc = false }) {
	return (
		<article className="gcard tcard">
			<div className="pic">
				{image ? (
					<Image
						src={image}
						className="object-cover"
						draggable={false}
						width={500}
						height={500}
						alt={name}
					/>
				) : (
					<div
						className="pic-fallback"
						aria-hidden="true"
					>
						<span>{initialsOf(name)}</span>
					</div>
				)}
			</div>

			<div className="body">
				<p className="nm">{name}</p>
				<p className="role">{position}</p>
				{description && <p className="bio">{description}</p>}
			</div>

			{(cybersoc || github || linkedin || website) && (
			<div className="links">
				{cybersoc && (
					<Link
						href="https://www.linkedin.com/company/exeter-cyber-security-society/posts/?feedView=all"
						target="_blank"
						aria-label={`${name} — CyberSoc`}
					>
						<Image
							src="/images/sponsors/cybersoc.jpg"
							className="w-4 h-4 object-contain"
							width={50}
							height={50}
							alt=""
						/>
					</Link>
				)}
				{github !== "" && (
					<Link href={github} target="_blank" aria-label={`${name} on GitHub`}>
						<VscGithubAlt className="w-4 h-4" />
					</Link>
				)}
				{linkedin !== "" && (
					<Link href={linkedin} target="_blank" aria-label={`${name} on LinkedIn`}>
						<CiLinkedin className="w-4 h-4" />
					</Link>
				)}
				{website !== "" && (
					<Link href={website} target="_blank" aria-label={`${name}'s website`}>
						<IoIosLink className="w-4 h-4" />
					</Link>
				)}
			</div>
			)}
		</article>
	)
}
