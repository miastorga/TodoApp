import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Context } from '../TodoContext'
import { ListHeader } from './ListHeader'
import { Todo } from './Todo'
export const TodoList = () => {
	const [parent] = useAutoAnimate()
	const { todoItems, setTodoItems } = useContext(Context)
	const [storedValues, setValue] = useLocalStorage('todos')

	useEffect(() => {
		storedValues
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
