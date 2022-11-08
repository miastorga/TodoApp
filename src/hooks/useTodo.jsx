import { useContext, useState } from 'react'
import { Context } from '../TodoContext'

export const useTodo = () => {
	const randomId = Math.random()
	const date = new Date()
	const DAY_AND_MONTH = date.getDate() + '/' + (date.getMonth() + 1)

	const { setTodoItems, todoItems, todo, setTodo } = useContext(Context)
	const [todoEditing, setTodoEditing] = useState(null)
	const [editingText, setEditingText] = useState('')

	const addTodoHandler = (e) => {
		e.preventDefault()

		if (todo.trim().length === 0) return null

		setTodoItems((prevTodo) => [
			...prevTodo,
			{
				id: randomId,
				title: todo.trim(),
				isCompleted: false,
				dateCreated: DAY_AND_MONTH,
			},
		])
		setTodo('')
	}

	const removeHandler = (todoId) => {
		setTodoItems(todoItems.filter((todo) => todo.id !== todoId))
	}

	const checkBoxHandler = (e, todoId) => {
		const changeChecked = todoItems.map((todo) => {
			if (todo.id === todoId) {
				const checked = e.target.checked
				todo.isCompleted = checked
			}
			return todo
		})
		setTodoItems(changeChecked)
	}

	const editHandler = (todoItem) => {
		const todoTitle = todoItem.title
		if (todoTitle.length !== 0) {
			const editedTodo = todoItems.map((todo) => {
				if (todo.id === todoItem.id) todo.title = editingText
				return todo
			})
			setTodoItems(editedTodo)
			setTodoEditing(null)
			setEditingText('')
		}
	}

	return {
		removeHandler,
		checkBoxHandler,
		editHandler,
		todoEditing,
		editingText,
		setTodoEditing,
		setEditingText,
		addTodoHandler,
	}
}
