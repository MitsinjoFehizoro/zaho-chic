import { NavLink } from "react-router-dom";
import { BlurStyle } from "../global/blur-style";
import { Logo } from "../global/logo";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
	mode: 'login' | 'register'
}
export function BaseRegisterLogin({ mode, children }: Props) {

	return (
		<section className="h-[100vh] flex items-center justify-center">
			<BlurStyle />
			<div className="w-[28rem] gap-y-6 flex flex-col items-center">
				<Logo />
				<div className="w-full p-4 flex justify-between items-center bg-tertiary rounded-lg">
					<p className="text-white text-opacity-80 text-sm">{mode == 'register' ? 'Already have an account?' : "Don't have an acount?"}</p>
					<NavLink to={mode === 'login' ? '/register' : '/login'} className="text-white text-opacity-80 text-sm px-4 py-1 bg-secondary rounded capitalize">
					{mode == 'register' ? 'Login' : "register"}
					</NavLink>
				</div>
				<div className="px-8 pt-8 pb-10 bg-tertiary rounded-lg w-full">
					<h3 className="text-white text-2xl font-extrabold text-center border-b border-white border-opacity-10 pb-6 mx-2 mb-8 capitalize">{mode}</h3>
					{children}
				</div>
			</div>
		</section>
	)
}