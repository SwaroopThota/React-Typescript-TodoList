import { useState } from 'react'

interface IProps {
	addTodo: Function
}

const AddTodo = ({ addTodo }: IProps) => {
	const [todo, setTodo] = useState<string>('')
	return (
		<>
			<input
				type='text'
				placeholder='Enter Your Todo...'
				value={todo}
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					setTodo(e.currentTarget.value)
				}
				style={{ width: '80%' }}
			/>
			<button
				onClick={() => {
					if (!todo.trim()) return
					addTodo(todo.trim())
					setTodo('')
				}}
			>
				Add
			</button>
		</>
	)
}

export default AddTodo
