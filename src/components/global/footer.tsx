import { Logo } from "./logo";

export function Footer (){
	return (
		<footer className="flex flex-col items-center borde border-t border-white border-opacity-10 py-8">
			<Logo/>
			<p className="text-white text-sm text-opacity-80 mt-2"><i className="fa-solid fa-copyright"></i> Powered by MitsinjoFehizoro - 2024</p>
		</footer>
	)
}