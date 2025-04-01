type Props = {
	isPerPiece?: boolean,
	value: number
}
export function Price({ isPerPiece = false, value }: Props) {
	return (
		<p className="font-black text-white">
			<span className="text-xl">$ {value}.</span>
			<span>00</span>
			{
				isPerPiece && (
					<span className='text-white text-opacity-60'> / piece</span>
				)
			}
		</p>
	)
}