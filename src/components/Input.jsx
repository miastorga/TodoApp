import React from 'react'
import { useEffect, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useTodo } from '../hooks/useTodo'
import { Context } from '../TodoContext'

export const Input = () => {
	const { todo, setTodo, todoItems } = useContext(Context)
	const { addTodoHandler } = useTodo()
	const [storedValue, setValue] = useLocalStorage('todos', [])

	useEffect(() => {
		setValue(todoItems)
	}, [todoItems])

	return (
		<form onSubmit={addTodoHandler}>
			<label htmlFor='todo'></label>
			<input
				id='todo'
				type='text'
				value={todo}
				name='todo'
				placeholder='Add a To do'
				autoFocus={true}
				onChange={(e) => setTodo(e.target.value)}
			/>
		</form>
	)
}
