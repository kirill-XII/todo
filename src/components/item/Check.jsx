import { BsCheck2All } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={`border-2 rounded-lg border-pink-400 ${
				isCompleted ? 'bg-pink-400' : ''
			} w-5 h-5 mr-2 flex items-center justify-center`}
		>
			{isCompleted && <BsCheck2All size={24} className='text-yellow-200' />}
		</div>
	)
}

export default Check
