import React from 'react'
import { useContext } from 'react'
import { Context } from '../TodoContext'

export const Input = () => {
	const { todo, setTodo, setTodoItems } = useContext(Context)

	const context = useContext(Context)
	const randomId = Math.random()
	const date = new Date()
	console.log(context)
	const addTodoHandler = (e) => {
		e.preventDefault()
		setTodoItems((prevTodo) => [
			...prevTodo,
			{
				id: randomId,
				title: todo,
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
				type='text'
				value={todo}
				name='todo'
				placeholder='Add a To do'
				onChange={(e) => setTodo(e.target.value)}
			/>
		</form>
	)
}
