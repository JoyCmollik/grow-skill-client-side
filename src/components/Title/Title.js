import React from 'react';

const Title = (props) => {
	const { mainTitle, subTitle } = props;
	return (
		<div>
			<p className='text-brand text-xl'>{subTitle}</p>
			<h2 className='text-3xl'>{mainTitle}</h2>
		</div>
	);
};

export default Title;
