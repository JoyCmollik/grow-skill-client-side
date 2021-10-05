import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WorkFlow = (props) => {
	const { icon, title } = props;

	return (
		<div className='flex flex-col justify-between items-center space-y-5 hover:text-brand'>
			<div className='bg-primary px-5 py-4 rounded text-white'>
				<FontAwesomeIcon icon={icon} className='text-2xl' />
			</div>
			<h2 className='text-xl capitalize'>{title}</h2>
			<p className='text-gray-500 text-center w-3/4 mx-auto'>
				{props.children}
			</p>
		</div>
	);
};

export default WorkFlow;
