import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext } from 'react'
import { Context } from '/src/context/TodoContext'
import { Todo } from './Todo'
export const TodoList = () => {
	const [parent] = useAutoAnimate()
	const { todoItems } = useContext(Context)

	return (
		<ul ref={parent}>
			{todoItems.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	)
}
