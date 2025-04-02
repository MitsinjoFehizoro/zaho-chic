import React, { useState } from "react"
import { Field } from "../types/Field"

export const usePasswordValidation = () => {
	const [passwordField, setPasswordField] = useState<Field>({
		value: '', isValid: false, errorMessage: ''
	})

	const handlePasswordField = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length >= 4) {
			setPasswordField({ value: e.target.value, isValid: true, errorMessage: '' })
		} else {
			const errorMessage = 'Password must be at least 4 characters.'
			setPasswordField({ value: e.target.value, isValid: false, errorMessage: errorMessage })
		}
	}

	return {
		passwordField, handlePasswordField
	}
} 