import { AiOutlineCheck } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { useTodo } from '../hooks/useTodo'
export const Todo = ({ todo }) => {
	const {
		checkBoxHandler,
		removeHandler,
		editHandler,
		setEditingText,
		setTodoEditing,
		todoEditing,
		editingText,
	} = useTodo()

	return (
		<li className='li-item'>
			<span id='date-created'>{todo.dateCreated}</span>
			<div className='li-content'>
				<input
					value={todo.title}
					type='checkbox'
					onChange={(e) => checkBoxHandler(e, todo.id)}
				/>

				{todoEditing === todo.id ? (
					<input
						className='input-edit'
						type='text'
						autoFocus={true}
						onChange={(e) => setEditingText(e.target.value)}
						value={editingText}
					/>
				) : (
					<p className={todo.isCompleted ? 'completed todo-text' : 'todo-text'}>
						{todo.title}
					</p>
				)}
				<div>
					{todoEditing === todo.id ? (
						<>
							<button onClick={() => setTodoEditing(null)} className={'remove'}>
								<RiArrowGoBackLine />
							</button>
							<button
								type='submit'
								className={'edit'}
								onClick={() => editHandler(todo)}>
								<AiOutlineCheck />
							</button>
						</>
					) : (
						<>
							<button
								className={'remove'}
								onClick={() => removeHandler(todo.id)}>
								<TiDeleteOutline />
							</button>
							<button
								className={'edit'}
								onClick={() => setTodoEditing(todo.id)}>
								<MdDriveFileRenameOutline />
							</button>
						</>
					)}
				</div>
			</div>
		</li>
	)
}
