import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../TodoContext'
import { ListHeader } from './ListHeader'
import { Todo } from './Todo'
export const TodoList = () => {
	const [parent] = useAutoAnimate()
	const { setTodo, todoItems, setTodoItems, localStorageTodos } =
		useContext(Context)
	return (
		<>
			<ul ref={parent}>
				<ListHeader />
				{todoItems.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						todoItems={todoItems}
						setTodoItems={setTodoItems}
						setTodo={setTodo}
					/>
				))}
			</ul>
		</>
	)
}
