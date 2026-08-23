import { Bricolage_Grotesque, JetBrains_Mono, Pixelify_Sans, VT323 } from "next/font/google"
import "./globals.css"
import "./exehacks.css"
import { FormspreeProvider } from "./components/FormspreeProvider"
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
	// Sized favicons from public/images/icons/. public/favicon.ico is the same
	// mark so browsers that still request /favicon.ico get the new icon.
	icons: {
		icon: [
			{ url: "/images/icons/exehacks-favicon-purple-16.png", sizes: "16x16", type: "image/png" },
			{ url: "/images/icons/exehacks-favicon-purple-32.png", sizes: "32x32", type: "image/png" },
		],
		shortcut: "/images/icons/exehacks-favicon-purple-32.png",
		apple: "/images/icons/exehacks-icon.png",
	},
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme="retro"
			className={`w-full h-full ${fontVars}`}
		>
			<body className="w-full h-fit">
				<FormspreeProvider>
					<TopBar />
					{children}
					<Footer />
				</FormspreeProvider>

				{/* CRT scanline overlay — retro theme only, styled in exehacks.css */}
				<div
					className="scanlines"
					aria-hidden="true"
				/>
			</body>
		</html>
	)
}
