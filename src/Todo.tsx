import React from 'react'
import { ITodo } from './App'

interface IProps {
	todo: ITodo
	markTodoAsCompleted: Function
}

const Todo = ({ todo, markTodoAsCompleted }: IProps): JSX.Element => {
	return (
		<li style={{ display: 'flex', gap: '1rem' }}>
			<input
				type='checkbox'
				checked={todo.completed}
				onChange={() => markTodoAsCompleted(todo.id)}
			/>
			<p
				style={{
					textDecoration: todo.completed ? 'line-through' : 'none',
				}}
			>
				{todo.descrption}
			</p>
		</li>
	)
}

export default Todo
