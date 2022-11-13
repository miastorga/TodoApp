import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext } from 'react'
import { Context } from '/src/context/TodoContext'
import { ListHeader } from './ListHeader'
import { Todo } from './Todo'
export const TodoList = () => {
	const [parent] = useAutoAnimate()
	const { todoItems } = useContext(Context)

	return (
		<ul ref={parent}>
			<ListHeader />
			{todoItems.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	)
}
