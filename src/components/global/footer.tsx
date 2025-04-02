import { Logo } from "./logo";

export function Footer (){
	return (
		<footer className="flex flex-col items-center bg-secondary border border-t border-white border-opacity-10 py-8">
			<Logo/>
			<p className="text-white text-sm text-opacity-80 mt-3"><i className="fa-solid fa-copyright "></i> Powered by MitsinjoFehizoro - 2025</p>
		</footer>
	)
}