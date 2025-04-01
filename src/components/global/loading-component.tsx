export function LoadingComponent() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<span className="relative flex size-5">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
				<span className="relative inline-flex size-5 rounded-full bg-primary"></span>
			</span>
		</div>
	)
}