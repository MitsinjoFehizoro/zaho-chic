import { TITLE } from "../../scss/base/tailwind";
import { CustomInput } from "../global/form/custom-input";
import { CustomRoundButton } from "../global/form/custom-round-button";
import { CustomTextarea } from "../global/form/custom-textarea";

export function Contact() {

	return (
		<section className="flex flex-col items-center gap-y-12 pb-24">
			<h1 className={`${TITLE}`}>Do you have a message for us ?</h1>
			<form className="w-2/5 flex flex-col gap-y-6" action="">
				<input
					type="text"
					placeholder="Your name"
					className="rounded-full py-2.5 px-6 w-full text-white text-opacity-80 bg-secondary border border-white border-opacity-20 outline-none"
				/>
				<input
					type="text"
					placeholder="Your email"
					className="rounded-full py-2.5 px-6 w-full text-white text-opacity-80 bg-secondary border border-white border-opacity-20 outline-none"
				/>
				<CustomTextarea
					placeholder="Your message ..."
					className="rounded-3xl"
				/>
				<CustomRoundButton
					title="Submit"
					isWithIcon={true}
					isLoading={false}
					disable={true}
					className="bg-primary place-self-end hover:scale-100 cursor-not-allowed"
				/>
			</form>
		</section>
	)
}