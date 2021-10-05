import React from 'react';

const Title = (props) => {
	const { mainTitle, subTitle } = props;
	return (
		<div className='text-center md:text-left'>
			<p className='text-brand text-xl'>{subTitle}</p>
			<h2 className='text-3xl lg:w-2/4'>{mainTitle}</h2>
		</div>
	);
};

export default Title;
