import { useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

export interface ITodo {
	id: number
	completed: boolean
	descrption: string
}
const App = () => {
	let initialTodos: ITodo[] = [
		{ id: 1, completed: false, descrption: 'Learn Typescript' },
	]
	const [todos, setTodos] = useState<ITodo[]>(initialTodos)

	const addTodo = (todo: string) =>
		setTodos([
			...todos,
			{ id: todos.length + 1, completed: false, descrption: todo },
		])

	const markTodoAsCompleted = (id: number) => {
		const todo = todos.find((todo) => todo.id === id)
		if (todo) {
			todo.completed = !todo.completed
			setTodos([...todos])
		}
	}

	return (
		<>
			<h1>Todo-List:</h1>
			<AddTodo addTodo={addTodo} />
			<TodoList todos={todos} markTodoAsCompleted={markTodoAsCompleted} />
		</>
	)
}

interface ITodoListProps {
	todos: ITodo[]
	markTodoAsCompleted: Function
}

function TodoList({ todos, markTodoAsCompleted }: ITodoListProps) {
	return (
		<>
			<h2>Todos:</h2>
			<hr />
			<ul>
				{todos.map((todo) => (
					<Todo
						todo={todo}
						markTodoAsCompleted={markTodoAsCompleted}
						key={todo.id}
					/>
				))}
			</ul>
		</>
	)
}
export default App
