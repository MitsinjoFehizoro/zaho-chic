export function LoadingComponent() {
	return (
		<div className="w-full h-[90vh] flex items-center justify-center">
			<svg
				className="w-8 h-8 animate-spin text-primary"
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
		</div>
	)
}