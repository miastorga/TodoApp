import React from 'react'
import { useState, createContext } from 'react'

export const Context = createContext()

export const TodoProvider = ({ children }) => {
	const [todo, setTodo] = useState('')
	const [todoItems, setTodoItems] = useState(
		JSON.parse(localStorage.getItem('todos')) || []
	)

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
