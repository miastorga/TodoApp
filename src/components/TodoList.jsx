import { useAutoAnimate } from '@formkit/auto-animate/react'
import { IconContext } from 'react-icons'
import { TiDeleteOutline } from 'react-icons/ti'
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

	// *todo: refactorizat todoItems items linea 34-41
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
						<IconContext.Provider value={{ size: '2rem' }}>
							<TiDeleteOutline />
						</IconContext.Provider>
					</button>
				</li>
			))}
			<div className='list-footer'>
				{todoItems.length > 0 && (
					<>
						<p>
							{todoItems.length === 1 ? (
								<>
									{todoItems.length} <>item</>
								</>
							) : (
								<>
									{todoItems.length} <>items</>
								</>
							)}{' '}
						</p>
						<div>
							<p>all</p>
							<p>activos</p>
							<p>completados</p>
						</div>
					</>
				)}
			</div>
		</ul>
	)
}
