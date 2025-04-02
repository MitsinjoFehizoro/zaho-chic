import { WaitSpin } from "../wait-spin"

type Props = {
	title: string,
	isWithIcon?: boolean,
	className?: string,
	disable?: boolean,
	isLoading: boolean,
	onClick?: () => void
}
export function CustomRoundButton({ title, isLoading, disable = false, className, isWithIcon = false, onClick }: Props) {
	return (
		<button onClick={onClick} disabled={disable} className={`${className} ${disable ? `opacity-50` : `opacity-100`} flex gap-2 items-center justify-center w-36 py-2 rounded-full text-white text-center text-lg font-bold border-none transition hover:scale-105`}>
			{
				!isLoading ? (
					<>
						<p>{title}</p>
						{
							isWithIcon && (
								<p className="${disable ? `bg-opacity-40` : `bg-opacity-100`} flex justify-center items-center rounded-full bg-white w-5 h-5 text-sm text-primary"><i className="fa fa-arrow-right"></i></p>
							)
						}
					</>

				) : (
					<>
						<WaitSpin />
						<p className="mt-.5">Wait...</p>
					</>
				)
			}
		</button>
	)
}