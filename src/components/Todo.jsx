import { Button } from './Button'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { useState } from 'react'
export const Todo = ({ todo, todoItems, setTodoItems }) => {
	const [todoEditing, setTodoEditing] = useState(null)
	const [editingText, setEditingText] = useState('')
	const checkBoxHandler = (todoId) => {
		const changeChecked = todoItems.map((todo) => {
			if (todo.id === todoId) {
				todo.isCompleted = !todo.isCompleted
			}
			return todo
		})
		setTodoItems(changeChecked)
		localStorage.setItem('todos', JSON.stringify(todoItems))
	}
	const removeHandler = (todoId) =>
		setTodoItems(todoItems.filter((todo) => todo.id !== todoId))

	const editHandler = (todoItem) => {
		const todoTitle = todoItem.title
		if (todoTitle.length !== 0) {
			const editedTodo = todoItems.map((todo) => {
				if (todo.id === todoItem.id) todo.title = editingText
				return todo
			})
			setTodoItems(editedTodo)
			setTodoEditing(null)
			setEditingText('')
		}
	}
	return (
		<li className='li-item'>
			<span id='date-created'>{todo.dateCreated}</span>
			<div className='li-content'>
				<input
					value={todo.title}
					type='checkbox'
					onChange={() => checkBoxHandler(todo.id)}
				/>
				{todoEditing === todo.id ? (
					<input
						className='input-edit '
						type='text'
						autoFocus={true}
						onChange={(e) => setEditingText(e.target.value)}
						value={editingText}
					/>
				) : (
					<p className={todo.isCompleted ? 'completed' : ''}>{todo.title}</p>
				)}

				<div>
					{todoEditing === todo.id ? (
						<>
							<button onClick={() => setTodoEditing(null)} className={'remove'}>
								<RiArrowGoBackLine />
							</button>
							<button className={'edit'} onClick={() => editHandler(todo)}>
								<AiOutlineCheck />
							</button>
						</>
					) : (
						<>
							<Button
								className={'remove'}
								onCLick={() => removeHandler(todo.id)}>
								<TiDeleteOutline />
							</Button>
							<Button
								className={'edit'}
								onCLick={() => setTodoEditing(todo.id)}>
								<MdDriveFileRenameOutline />
							</Button>
						</>
					)}
				</div>
			</div>
		</li>
	)
}
