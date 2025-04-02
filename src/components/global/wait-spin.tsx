export function WaitSpin() {
	return (
		<svg
			className="w-5 h-5 animate-spin text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-50"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="2"
			></circle>
			<path
				className="opacity-100"
				fill="currentColor"
				d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
			></path>
		</svg>
	)
}