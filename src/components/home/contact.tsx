import { TITLE } from "../../scss/base/tailwind";
import { CustomInput } from "../global/form/custom-input";
import { CustomRoundButton } from "../global/form/custom-round-button";
import { CustomTextarea } from "../global/form/custom-textarea";

export function Contact() {

	return (
		<section className="flex flex-col items-center gap-y-12 pb-24">
			<h1 className={`${TITLE}`}>Do you have a message for us ?</h1>
			{/* <form className="w-2/5 flex flex-col gap-y-6" action="">
				<CustomInput
					placeholder="Your name"
					className="rounded-full"
				/>
				<CustomInput
					placeholder="Example@gmail.com"
					className="rounded-full"
				/>
				<CustomTextarea
					placeholder="Your message ..."
					className="rounded-3xl"
				/>
				<CustomRoundButton
					title="Submit"
					isWithIcon={true}
					className="bg-primary place-self-end"
				/>
			</form> */}
		</section>
	)
}