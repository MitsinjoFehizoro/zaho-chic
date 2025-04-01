type Props = {
	title: string
}
export function QualityItem({ title }: Props) {
	return (
		<p>
			<i className="fa-solid fa-circle-check text-sm text-green-200 mr-4"></i>
			<span className="text-white text-sm font-bold capitalize">{title}</span>
		</p>
	)
}