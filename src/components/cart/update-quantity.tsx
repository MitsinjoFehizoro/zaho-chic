export function UpdateQuantity() {

	return (
		<div className="h-10 flex justify-evenly items-center  text-white text-opacity-80 bg-tertiary rounded-lg overflow-hidden">
			<Btn />
			<input
				type="text"
				name=""
				id=""
				value="100"
				className="h-10 w-16 outline-none text-center bg-transparent"
			/>
			<Btn />
		</div>
	)
}
function Btn() {
	return (
		<button className="w-10 h-10 bg-secondary  text-white text-opacity-80 text-center transition-colors hover:bg-primary">+</button>
	)
}