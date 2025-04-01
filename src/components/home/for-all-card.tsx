

type Props = {
	image: string,
	title : string
}
export function ForAllCard({ image, title }: Props) {

	return (
		<div className="w-96 flex flex-col items-center relative">
			<img src={image} className="min-w-80 rounded-3xl" />
			<p className="w-52 py-3 -mt-6 rounded-md bg-secondary border border-white border-opacity-20 text-white text-center">For {title}</p>
		</div>
	)
}