import React from 'react'
import { useEffect, useContext } from 'react'
import { Context } from '../TodoContext'

export const Input = () => {
	const { todo, setTodo, setTodoItems, todoItems } = useContext(Context)
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoItems))
	}, [todoItems])
	const randomId = Math.random()
	const date = new Date()
	const addTodoHandler = (e) => {
		e.preventDefault()

		if (todo.trim().length === 0) return null

		setTodoItems((prevTodo) => [
			...prevTodo,
			{
				id: randomId,
				title: todo.trim(),
				isCompleted: false,
				dateCreated: date.getDate() + '/' + (date.getMonth() + 1),
			},
		])
		setTodo('')
	}

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
