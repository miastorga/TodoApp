import { useAutoAnimate } from '@formkit/auto-animate/react'
import { IconContext } from 'react-icons'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdDriveFileRenameOutline } from 'react-icons/md'
export const TodoList = ({ todoItems, setTodoItems, setTodo }) => {
	const [parent] = useAutoAnimate()

	const checkBoxHandler = (e, todoItem) => {
		const changeChecked = todoItems.map((todo) => {
			if (todo.id === todoItem.id) {
				const isCompleted = e.target.checked
				return { ...todo, isCompleted }
			}
			return todo
		})
		setTodoItems(changeChecked)
	}

	// *todo: refactorizat todoItems items linea 34-41
	const removeHandler = (todoItem) =>
		setTodoItems(todoItems.filter((todo) => todo.id !== todoItem.id))

	const editHandler = (todoItem) => {
		setTodo()
		console.log(todoItem)
	}
	return (
		<>
			<ul ref={parent}>
				{todoItems.map((todo) => (
					<li key={todo.id}>
						<span id='date-created'>{todo.dateCreated}</span>
						<div className='li-content'>
							<input
								value={todo.title}
								type='checkbox'
								onChange={(e) => checkBoxHandler(e, todo)}
							/>
							<p className={todo.isCompleted ? 'completed' : ''}>
								{todo.title}
							</p>
							<div>
								<IconContext.Provider value={{ size: '30px' }}>
									<button
										className='remove'
										onClick={() => removeHandler(todo)}>
										<TiDeleteOutline />
									</button>
									<button className='edit' onClick={() => editHandler(todo)}>
										<MdDriveFileRenameOutline />
									</button>
								</IconContext.Provider>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className={todoItems.length ? 'list-footer' : ''}>
				{todoItems.length > 0 && (
					<>
						<p>
							{todoItems.length === 1 ? (
								<>{todoItems.length} item</>
							) : (
								<>{todoItems.length} items</>
							)}
						</p>
						<div>
							<p>all</p>
							<p>actives</p>
							<p>completed</p>
						</div>
					</>
				)}
			</div>
		</>
	)
}
