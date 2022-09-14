import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

export const TodoProvider = ({ children }) => {
	const [todo, setTodo] = useState('')
	const [todoItems, setTodoItems] = useState([])

	return (
		<Context.Provider value={{ todo, setTodo, todoItems, setTodoItems }}>
			{children}
		</Context.Provider>
	)
}
