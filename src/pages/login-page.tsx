
import { CustomInput } from "../components/global/form/custom-input";
import { CustomRoundButton } from "../components/global/form/custom-round-button";
import { useUsernameValidation } from "../hooks/useUsernameValidation";
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import useFetch from "../hooks/useFetch";
import { loginUserService } from "../services/user-service";
import { User } from "../types/User";
import { useEffect, useState } from "react";
import { BaseRegisterLogin } from "../components/register-login/base-register-login";
import { useAuthContext } from "../hooks/useAuthContext";

export function LoginPage() {
	const { usernameField, handleUsernameField } = useUsernameValidation()
	const { passwordField, handlePasswordField } = usePasswordValidation()
	const { login } = useAuthContext()
	const { stateFetch, fetchData } = useFetch<User>(() => loginUserService({ username: usernameField.value, password: passwordField.value }))
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		fetchData()
	}
	
	useEffect(() => {
		if (stateFetch.data) {
			login(stateFetch.data.data.token)
		}
	}, [stateFetch])

	return (
		<BaseRegisterLogin mode="login" >
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