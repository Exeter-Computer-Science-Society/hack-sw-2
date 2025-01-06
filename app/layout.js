import { REM } from "next/font/google"
import "./globals.css"
import { TopBar } from "./components/TopBar"
import { Footer } from "./components/Footer"
import Head from 'next/head';

const inter = REM({ weights: [400, 500, 600], subsets: ["latin"] })

export const metadata = {
	title: "Hack South West",
	description: "Website for the annual hack south west (HSW) ocurring typically in early february",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="w-full h-full">
			<body className="w-full h-fit bg-HSWprimary -z-10">
				<TopBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
