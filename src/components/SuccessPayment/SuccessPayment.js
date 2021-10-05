import React from 'react';
import { Link } from 'react-router-dom';
import successImg from '../../images/success.svg';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

const SuccessPayment = () => {
	return (
		<div className='bg-lighter pt-28 pb-10'>
			<div className='container mx-auto flex flex-col justify-center items-center space-y-4'>
				<img
					className='w-1/4 lg:w-2/6'
					src={successImg}
					alt='not found'
				/>
				<h1 className='text-2xl lg:text-4xl text-primary font-bold'>
					Hurrah! We have heard you!!!!
				</h1>
				<p className='text-xl text-primary mb-2'>
					Soon we will reach out to you, stay tuned.
				</p>
				<Link to='/'>
					<BtnPrimary>Back to home</BtnPrimary>
				</Link>
			</div>
		</div>
	);
};

export default SuccessPayment;
