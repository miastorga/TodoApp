import './app.css'
import { Input } from './components/Input'
import { TodoList } from './components/TodoList'
function App() {
	return (
		<div className='container'>
			<main>
				<h1>Todo List</h1>
				<Input />
				<TodoList />
			</main>
		</div>
	)
}

export default App
