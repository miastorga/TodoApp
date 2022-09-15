import { Button } from './Button'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdDriveFileRenameOutline } from 'react-icons/md'
export const Todo = ({ todo, todoItems, setTodoItems }) => {
	const checkBoxHandler = (e, todoItem) => {
		const changeChecked = todoItems.map((todo) => {
			if (todo.id === todoItem.id) {
				const isCompleted = e.target.checked
				return { ...todo, isCompleted }
			}
			return todo
		})
		setTodoItems(changeChecked)
		localStorage.setItem('todos', JSON.stringify(todoItems))
	}
	const removeHandler = (todoItem) =>
		setTodoItems(todoItems.filter((todo) => todo.id !== todoItem.id))

	const editHandler = (todoItem) => {
		setTodo()
		console.log(todoItem)
	}
	return (
		<li className='li-item'>
			<span id='date-created'>{todo.dateCreated}</span>
			<div className='li-content'>
				<input
					value={todo.title}
					type='checkbox'
					onChange={(e) => checkBoxHandler(e, todo)}
				/>
				<p className={todo.isCompleted ? 'completed' : ''}>{todo.title}</p>
				<div>
					<Button className={'remove'} onCLick={() => removeHandler(todo)}>
						<TiDeleteOutline />
					</Button>
					<Button className={'edit'} onCLick={() => editHandler(todo)}>
						<MdDriveFileRenameOutline />
					</Button>
				</div>
			</div>
		</li>
	)
}
