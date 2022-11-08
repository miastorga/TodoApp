import React from 'react'
import { useState, createContext } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

export const Context = createContext()

export const TodoProvider = ({ children }) => {
	const [storedValues] = useLocalStorage('todos')
	const [todo, setTodo] = useState('')
	const [todoItems, setTodoItems] = useState(storedValues)

	return (
		<Context.Provider
			value={{
				todo,
				setTodo,
				todoItems,
				setTodoItems,
			}}>
			{children}
		</Context.Provider>
	)
}
