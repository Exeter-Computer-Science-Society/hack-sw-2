import { REM } from "next/font/google"
import "./globals.css"

const inter = REM({ weights: [400, 500, 600], subsets: ["latin"] })


export default function RootLayout({ children }) {
	return (
		<html lang="en" className="w-full h-full">
			<body className="w-full h-full bg-HSWprimary -z-10">
				{children}
			</body>
		</html>
	)
}
