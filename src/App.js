import TodoItem from './components/TodoItem'

const todos = [
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
	return (
		<div className='bg-gray-900 h-screen text-white'>
			{todos.map(todo => (
				<TodoItem key={todo} todo={todo} />
			))}
		</div>
	)
}

export default App
