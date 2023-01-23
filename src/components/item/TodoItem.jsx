import Check from './Check'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo, changeTodo }) => {
	return (
		<button
			className='flex items-center mb-3 rounded-2xl bg-gray-800 p-5 w-full'
			onClick={() => changeTodo(todo._id)}
		>
			<Check isCompleted={todo.isCompleted} />

			<span className={cn({ 'line-through': todo.isCompleted })}>
				{todo.title}
			</span>
			<BsTrash />
		</button>
	)
}

export default TodoItem
