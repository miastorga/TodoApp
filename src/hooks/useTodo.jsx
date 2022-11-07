import { useContext, useState } from 'react'
import { Context } from '../TodoContext'

export const useTodo = () => {
	const { setTodoItems, todoItems } = useContext(Context)

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
	}
}
