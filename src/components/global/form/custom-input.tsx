import { Field } from "../../../types/Field";

type Props = {
	label?: string,
	placeholder: string,
	type: string,
	name: string
	field: Field,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	className?: string

}
export function CustomInput({ label, placeholder, type, name, field, onChange, className }: Props) {
	return (
		<div>
			{
				label && (
					<p className="text-white text-sm text-opacity-50 ml-1 mb-2">{label}</p>
				)
			}
			<input
				type={type}
				name={name}
				value={field.value}
				onChange={onChange}
				placeholder={placeholder}
				className={`${className} py-2.5 px-6 w-full text-white text-opacity-80 bg-secondary border border-white border-opacity-20 outline-none `}
			/>
			{
				field.errorMessage !== '' && (
					<p className="px-1 pt-1 text-xs text-red-500">{field.errorMessage}</p>
				)
			}
		</div>

	)
}