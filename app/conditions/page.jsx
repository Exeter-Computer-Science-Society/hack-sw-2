import { DocumentCard } from "../components/General/DocumentCard"

export default function DocumentsPage() {

	const documents = [
		{
			name: "Terms & Conditions",
			description: "The terms and conditions of the event",
			image: "/images/terms/terms.jpg",
			link: "/conditions/terms"
		},
		{
			name: "Intellectual Property",
			description: "The intellectual property rights of the event",
			image: "/images/terms/intellectual.jpg",
			link: "/conditions/intellectual"
		}
	]

	return (
		<div className="bg-HSWprimary w-full h-full flex flex-col">
			<div className="w-full h-full flex flex-col items-center justify-center gap-8 pb-72">



				<p className="text-2xl font-extrabold">Documents Page</p>

				<div className="grid grid-flow-row grid-cols-2 gap-8">
					{
						documents.map((doc, index) => (
							<DocumentCard key={index} document={doc} />
						))
					}
				</div>
			</div>
		</div>
	)
}