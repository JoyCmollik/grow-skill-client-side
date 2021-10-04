import React from 'react';

const BtnPrimary = (props) => {
	return (
		<button className='bg-primary px-5 py-3 rounded text-white font-semibold'>
			{props.children}
		</button>
	);
};

export default BtnPrimary;
