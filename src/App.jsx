import { useState } from 'react'
import './app.css'
import { Input } from './components/Input'
import { TodoList } from './components/TodoList'
function App() {
	const [todo, setTodo] = useState('')
	const [todoItems, setTodoItems] = useState([])
	return (
		<div className='container'>
			<main>
				<h1>Todo List</h1>
				<Input
					todo={todo}
					setTodo={setTodo}
					setTodoItems={setTodoItems}
					todoItems={todoItems}
				/>
				<TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
			</main>
		</div>
	)
}

export default App
