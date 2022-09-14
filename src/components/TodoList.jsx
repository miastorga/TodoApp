import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useContext } from 'react'
import { Context } from '../TodoContext'
import { ListHeader } from './ListHeader'
import { Todo } from './Todo'
export const TodoList = () => {
	const [parent] = useAutoAnimate()

	const { todoItems, setTodoItems } = useContext(Context)
	return (
		<>
			<ul ref={parent}>
				<ListHeader todoItems={todoItems} />
				{todoItems &&
					todoItems.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							todoItems={todoItems}
							setTodoItems={setTodoItems}
						/>
					))}
			</ul>
		</>
	)
}
