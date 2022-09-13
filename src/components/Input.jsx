import React from 'react'

export const Input = ({ setTodo, setTodoItems, todo, todoItems }) => {
	const randomId = Math.random()
	const date = new Date()

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
		// *todo: Agregar todo al localstorage
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
