import { Bricolage_Grotesque, JetBrains_Mono, Pixelify_Sans, VT323 } from "next/font/google"
import "./globals.css"
import "./exehacks.css"
import { TopBar } from "./components/TopBar"
import { Footer } from "./components/Footer"

// The ExeHacks design system reaches for these through CSS custom properties
// (--font-display / --font-mono in the base theme, --font-pixel / --font-term
// under data-theme="retro"), so each one only needs to expose a variable.
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], display: "swap", variable: "--font-bricolage" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains" })
const pixelify = Pixelify_Sans({ subsets: ["latin"], display: "swap", variable: "--font-pixelify" })
const vt323 = VT323({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-vt323" })

const fontVars = [bricolage.variable, jetbrains.variable, pixelify.variable, vt323.variable].join(" ")

export const metadata = {
	title: "ExeHacks — Exeter's student hackathon",
	description:
		"ExeHacks is the University of Exeter's student hackathon, run by the Exeter Computer Science Society (EXCS). Formerly Hack South West.",
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme="retro"
			className={`w-full h-full ${fontVars}`}
		>
			<body className="w-full h-fit">
				<TopBar />
				{children}
				<Footer />

				{/* CRT scanline overlay — retro theme only, styled in exehacks.css */}
				<div
					className="scanlines"
					aria-hidden="true"
				/>
			</body>
		</html>
	)
}
