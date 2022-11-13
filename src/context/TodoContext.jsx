import React from 'react'
import { useState, createContext } from 'react'
import { useLocalStorage } from '/src/hooks/useLocalStorage'

export const Context = createContext()

export const TodoProvider = ({ children }) => {
	const [todoStorage] = useLocalStorage('todos')
	const [todo, setTodo] = useState('')
	const [todoItems, setTodoItems] = useState(todoStorage)

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
