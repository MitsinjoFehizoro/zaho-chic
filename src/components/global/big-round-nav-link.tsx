import { NavLink } from "react-router-dom"

type Props = {
	link: string,
	title: string,
	isWithIcon?: boolean,
	className?: string
}
export function BigRoundNavLink({ link, title, className, isWithIcon = false }: Props) {
	return (
		<NavLink to={link} className={`${className} flex gap-2 items-center justify-center w-36 py-2 rounded-full text-white text-center  text-lg font-bold`}>
			<p>{title}</p>
			{
				isWithIcon && (
					<p className="flex justify-center items-center rounded-full bg-white w-5 h-5 text-sm text-primary"><i className="fa fa-arrow-right"></i></p>
				)
			}
		</NavLink>
	)
}