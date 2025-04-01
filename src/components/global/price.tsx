type Props = {
	isPerPiece?: boolean,
	value: number
}
export function Price({ isPerPiece = false, value }: Props) {
	return (
		<p className="font-black text-white">
			<span className="text-xl">$ {value.toString().split('.')[0]}</span>
			<span>{value.toString().split('.')[1]}</span>
			{
				isPerPiece && (
					<span className='text-white text-opacity-60'> / piece</span>
				)
			}
		</p>
	)
}