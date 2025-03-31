import { NavLink } from "react-router-dom"

type Props = {
	title : string,
	description : string,
	link : string
}
export function WhyUsCard({title, description, link}: Props){
	return(
		<div className="w-96 p-8 bg-tertiary rounded-md">
			<h3 className="text-white text-2xl font-bold mb-5 capitalize">{title}</h3>
			<p className="text-white text-sm text-opacity-80 mb-4">{description}</p>
			<NavLink to={link} className="flex items-center">
				<p className="text-white mr-2">More about</p>
				<p className="flex justify-center items-center rounded-full bg-white w-5 h-5 text-sm text-secondary"><i className="fa fa-arrow-right"></i></p>
			</NavLink>
		</div>
	)
}