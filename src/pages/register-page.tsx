import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../components/global/logo";
import { CustomInput } from "../components/global/form/custom-input";
import { CustomRoundButton } from "../components/global/form/custom-round-button";
import { BlurStyle } from "../components/global/blur-style";
import { useUsernameValidation } from "../hooks/useUsernameValidation";
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import useFetch from "../hooks/useFetch";
import { registerUserService } from "../services/user-service";
import { User } from "../types/User";
import { useEffect } from "react";
import { BaseRegisterLogin } from "../components/register-login/base-register-login";

export function RegisterPage() {
	const navigate = useNavigate()
	const { usernameField, handleUsernameField } = useUsernameValidation()
	const { passwordField, handlePasswordField } = usePasswordValidation()

	const { stateFetch, fetchData } = useFetch<User>(() => registerUserService({ username: usernameField.value, password: passwordField.value }))
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetchData()
	}

	useEffect(() => {
		if (stateFetch.data) navigate('/login')
	}, [stateFetch])

	return (
		<BaseRegisterLogin mode="register" >
			<form action="" onSubmit={handleSubmit} className="gap-y-4 flex flex-col">
				<CustomInput
					label="Username"
					placeholder="Your username"
					type="text"
					name="username"
					field={usernameField}
					onChange={handleUsernameField}
					className="rounded-lg border-none"
				/>
				<CustomInput
					label="password"
					placeholder="Password"
					type="password"
					name="password"
					field={passwordField}
					onChange={handlePasswordField}
					className="rounded-lg border-none"
				/>
				<div />
				<CustomRoundButton
					title="Register"
					disable={!usernameField.isValid || !passwordField.isValid}
					isLoading={stateFetch.loading}
					className="bg-primary w-full rounded-lg"
					isWithIcon={true}
				/>
			</form>
		</BaseRegisterLogin>
	)
}