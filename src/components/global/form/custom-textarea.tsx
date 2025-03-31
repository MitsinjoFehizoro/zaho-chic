type Props = {
	label?: string,
	placeholder: string,
	className? :string
}
export function CustomTextarea({ label, placeholder, className }: Props) {
	return (
		<div>
			{
				label && (
					<p className="text-white text-sm text-opacity-50 mb-2">{label}</p>
				)
			}
			<textarea
				name=""
				id=""
				cols={30}
				rows={8}
				placeholder={placeholder}
				className={`${className} py-2.5 px-6 w-full text-white text-opacity-80 bg-secondary border border-white border-opacity-20 outline-none`}
			/>
		</div>
	)
}