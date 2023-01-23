import { useState } from 'react'
import TodoItem from './components/item/TodoItem'

const data = [
	{
		_id: '3234hj54646',
		title: 'Finish the essay collaboration',
		isCompleted: false,
	},
	{
		_id: '3236f754',
		title: 'Read next chapter of the book',
		isCompleted: false,
	},
	{
		_id: '3235354zv324',
		title: 'Send the finished assignment',
		isCompleted: false,
	},
]

const App = () => {
	const [todos, setTodos] = useState(data)
	return (
		<div className=' text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-4'>Todo for junior</h1>
			<div>
				{' '}
				{todos.map(todo => (
					<TodoItem key={todo} todo={todo} />
				))}
			</div>
		</div>
	)
}

export default App
