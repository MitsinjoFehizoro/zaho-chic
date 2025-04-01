type Props = {
	title: string
}

export function CategoryTitle({ title }: Props) {
	return (
		<div className="flex items-center">
			<p className="w-44 text-sm font-bold text-white text-opacity-80 uppercase">{title}</p>
			<div className="h-[1px] mt-0.5 w-full bg-white bg-opacity-20" />
		</div>
	)
}