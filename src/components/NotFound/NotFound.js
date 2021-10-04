import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404.svg';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

const NotFound = () => {
	return (
		<div className='bg-lighter pt-28 pb-10'>
			<div className='container mx-auto flex flex-col justify-center items-center space-y-4'>
				<img
					className='w-1/4 lg:w-2/6'
					src={errorImg}
					alt='not found'
				/>
				<h1 className='text-2xl lg:text-4xl text-primary font-bold'>
					Page Not Found!
				</h1>
				<p className='text-xl text-primary mb-2'>
					Please try searching some other pages.
				</p>
				<Link to='/'>
					<BtnPrimary>Back to home</BtnPrimary>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
