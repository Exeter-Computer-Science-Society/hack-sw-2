import { REM } from "next/font/google"
import "./globals.css"
import { TopBar } from "./components/TopBar"
import { Footer } from "./components/Footer"

const inter = REM({ weights: [400, 500, 600], subsets: ["latin"] })


export default function RootLayout({ children }) {
	return (
		<html lang="en" className="w-full h-full">
			<body className="w-full h-full bg-HSWprimary -z-10">
				<TopBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
