import { NavLink } from "react-router-dom"

type Props = {
	link: string,
	title: string
}
export function RoundNavLink({ link, title }: Props) {
	return (
		<NavLink to={link} className="text-white py-1 px-4 bg-primary rounded-full">
			{title}
		</NavLink>
	)
}