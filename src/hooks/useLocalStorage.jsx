import { useState } from 'react'

export const useLocalStorage = (key) => {
	const INITIAL_VALUE = [
		{ id: 0, title: '', isCompleted: false, dateCreated: 0 },
	]

	// Inicializar localStorage, si existen item hazle un get, de lo contrario manten el valor inicial
	const [storedValue, setStoreValue] = useState(() => {
		try {
			const todo = localStorage.getItem(key)
			return todo ? JSON.parse(todo) : INITIAL_VALUE
		} catch (error) {
			return INITIAL_VALUE
		}
	})

	// Agrega al localStorage
	const setValue = (value) => {
		try {
			setStoreValue(value)
			localStorage.setItem('todos', JSON.stringify(value))
		} catch (error) {
			console.log(error)
		}
	}
	return [storedValue, setValue]
}
