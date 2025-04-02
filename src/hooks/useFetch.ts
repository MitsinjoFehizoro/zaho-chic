import { useEffect, useState } from "react"

export interface StateFetch<T> {
	data: T | null,
	loading: boolean,
	error: string | null
}
const useFetch = <T>(service: () => Promise<T>) => {

	const [stateFetch, setStateFetch] = useState<StateFetch<T>>({
		data: null, loading: false, error: null
	})

	const fetchData = async () => {
		setStateFetch({ data: null, loading: true, error: null })
		try {
			const data = await service();
			setStateFetch({ data: data, loading: false, error: null })
		} catch (error) {
			const errorMessage = "Failed to retrieved data."
			setStateFetch({ data: null, loading: false, error: errorMessage })
		}
	}

	return { stateFetch, fetchData }
}

export default useFetch