import React from 'react';
import cardImg from '../../images/cardrive.svg';

const Service = () => {
	return (
		<article className='flex flex-col justify-between w-96'>
			<div className=''>
				<img src={cardImg} alt='service' />
			</div>
			<div className='p-4'></div>
		</article>
	);
};

export default Service;
