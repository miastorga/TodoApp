import { useAutoAnimate } from '@formkit/auto-animate/react'
export const TodoList = ({ todoItems, setTodoItems }) => {
	const [parent] = useAutoAnimate()
	const checkBoxHandler = (e, todoItemMap) => {
		const changeChecked = todoItems.map((todo) => {
			if (todo.id === todoItemMap.id) {
				const isCompleted = e.target.checked
				return { ...todo, completed: isCompleted }
			}
			return todo
		})
		setTodoItems(changeChecked)
	}

	const removeHandler = (todoItemMap) =>
		setTodoItems(todoItems.filter((todo) => todo.id !== todoItemMap.id))

	return (
		<ul ref={parent}>
			{todoItems.map((todo) => (
				<li key={todo.id}>
					<input
						value={todo.title}
						type='checkbox'
						onChange={(e) => checkBoxHandler(e, todo)}
					/>
					<p className={todo.completed ? 'completed' : ''}>{todo.title}</p>
					<button className='remove' onClick={() => removeHandler(todo)}>
						remove
					</button>
				</li>
			))}
		</ul>
	)
}
