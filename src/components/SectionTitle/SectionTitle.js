import React from 'react';

const SectionTitle = (props) => {
	return (
		<div className='text-center py-5 lg:py-10 space-y-1'>
			<h2 className='text-2xl font-semibold tracking-wide'>
				{props.children}
			</h2>
			<p className='text-gray-500'>{props.moto ? props.moto : ''}</p>
		</div>
	);
};

export default SectionTitle;
