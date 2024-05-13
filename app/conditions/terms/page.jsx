import { SideBar } from "@/app/components/General/SideBar";
import { TopBar } from "@/app/components/General/TopBar";


export default function terms() {
	return (
		<div className="bg-HSWprimary w-full h-fit flex flex-col">

			<SideBar />
			<TopBar />

			<div className="flex flex-col gap-4 items-center justify-center w-full h-fit py-[5%] px-[30%]">
				<p className="text-4xl text-HSWaccent font-extrabold">Terms & Conditions</p>

				<div className="flex flex-col gap-2 justify-center">
					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Respect</small> Treat all participants, organisers, sponsors, mentors, and judges with respect
						and consideration. Be mindful of your words and actions, and avoid behaviour that could be
						perceived as disrespectful, derogatory, or offensive.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Inclusivity</small> Embrace diversity and inclusivity in all its forms, including but not limited to
						race, ethnicity, gender identity, sexual orientation, disability, religion, nationality, age, and
						socioeconomic status. Be welcoming and supportive of all participants, regardless of
						background or experience level.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Harassment-Free Environment</small> Harassment and discrimination have no place at Hack
						South West. Harassment includes, but is not limited to: offensive verbal comments,
						deliberate intimidation, stalking, following, harassing photography or recording, sustained
						disruption of talks or other events, inappropriate physical contact, and unwelcome sexual
						attention. If you are asked to stop any harassing behaviour, you are expected to comply
						immediately.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Safe Space</small> Hack South West is intended to be a safe space for all participants. If you
						feel unsafe or threatened, or if you witness any behaviour that violates this code of conduct,
						please report it to an Organiser or Guru immediately. All reports will be taken seriously and
						addressed promptly and confidentially.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Professionalism</small> Maintain a high standard of professionalism throughout the event. This
						includes respecting deadlines, collaborating effectively with teammates, communicating
						respectfully with mentors and judges, and conducting yourself in a manner that reflects
						positively on yourself and the hackathon community.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Compliance with Laws and Policies</small> Comply with all applicable laws, regulations, and
						policies, including those related to intellectual property, data privacy, and online conduct. Do
						not engage in any activities that may violate the rights of others or compromise the integrity
						of the hackathon.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Consequences of Violations</small> Violations of this code of conduct may result in removal
						from the hackathon premises, disqualification from the event, and/or other appropriate
						consequences determined by the organisers. Serious or repeated violations may also result
						in restrictions on participation in future hackathons.
					</p>

					<p className="text-center">
						<small className="font-bold text-md text-HSWaccent">Reporting Procedures</small> If you experience or witness any behaviour that violates this
						code of conduct, or if you have any concerns or questions, please report it to an Organiser
						or Guru immediately. Reports can be made in person or via email:
						excs@groups.exeterguild.com.
					</p>

					<p className="text-center">
						By participating in Hack South West, you acknowledge that you have read, understood, and
						agree to abide by this code of conduct. We thank you for helping us create a positive and
						inclusive experience for all participant
					</p>
				</div>

			</div>
		</div>
	)
}