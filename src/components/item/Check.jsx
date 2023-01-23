import { BsCheck2All } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
	return (
		<div className='border-2 rounded-lg border-pink-400 w-5 h-5 mr-2'>
			{isCompleted && <BsCheck2All size={24} className='text-yellow-200' />}
		</div>
	)
}

export default Check
