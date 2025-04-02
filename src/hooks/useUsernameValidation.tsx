import React, { useState } from "react"
import { Field } from "../types/Field"

export const useUsernameValidation = () => {
	const [usernameField, setUsernameField] = useState<Field>({
		value: '', isValid: false, errorMessage: ''
	})

	const handleUsernameField = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length >= 3) {
			setUsernameField({ value: e.target.value, isValid: true, errorMessage: '' })
		} else {
			const errorMessage = 'Username must be at least 3 characters.'
			setUsernameField({ value: e.target.value, isValid: false, errorMessage: errorMessage })
		}
	}

	return {
		usernameField, handleUsernameField
	}
} 