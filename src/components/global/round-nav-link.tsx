import { NavLink } from "react-router-dom"

type Props = {
	link: string,
	title: string,
	className?: string
}
export function RoundNavLink({ link, title, className }: Props) {
	return (
		<NavLink to={link} className={`${className} text-white font-semibold py-1 px-4 bg-primary rounded-full block transition hover:scale-105`}>
			{title}
		</NavLink>
	)
}