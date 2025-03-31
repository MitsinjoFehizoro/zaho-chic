
type Props = {
	label?: string,
	placeholder: string;
	className?: string
}
export function CustomInput({ label, placeholder, className }: Props) {
	return (
		<div>
			{
				label && (
					<p className="text-white text-sm text-opacity-50 mb-2">{label}</p>
				)
			}
			<input
				type="text"
				name=""
				id=""
				placeholder={placeholder}
				className={`${className} py-2.5 px-6 w-full text-white text-opacity-80 bg-secondary border border-white border-opacity-20 outline-none `}
			/>
		</div>

	)
}