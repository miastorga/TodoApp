import React from 'react'
import { useEffect, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useTodo } from '../hooks/useTodo'
import { Context } from '/src/context/TodoContext'

export const Input = () => {
	const { todo, setTodo, todoItems } = useContext(Context)
	const { addTodoHandler } = useTodo()
	const [_, setTodoStorage] = useLocalStorage('todos')

	useEffect(() => {
		setTodoStorage(todoItems)
	}, [todoItems])

	return (
		<form onSubmit={addTodoHandler} className='form'>
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
