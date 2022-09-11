import React from 'react'

export const Input = ({ setTodo, setTodoItems, todo }) => {
	const randomId = Math.random()

	const addTodoHandler = (e) => {
		e.preventDefault()
		setTodoItems((prevTodo) => [
			...prevTodo,
			{ id: randomId, title: todo, completed: false },
		])
		setTodo('')
	}

	return (
		<form onSubmit={addTodoHandler}>
			<input
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
		</form>
	)
}
