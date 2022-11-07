import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../TodoContext'
import { ListHeader } from './ListHeader'
import { Todo } from './Todo'
export const TodoList = () => {
	const [parent] = useAutoAnimate()
	const { todoItems, setTodoItems } = useContext(Context)

	useEffect(() => {
		const storageData = localStorage.getItem('todos')
		const data = JSON.parse(storageData)
		if (data) setTodoItems(data)
	}, [])

	return (
		<ul ref={parent}>
			<ListHeader />
			{todoItems.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	)
}
