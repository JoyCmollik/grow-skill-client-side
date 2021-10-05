import React from 'react';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import bannerBg from '../../images/banner-bg.svg';

const Banner = () => {
	return (
		<div className='bg-light h-screen flex items-center'>
			<div className='container p-2 md:p-0 space-y-4 md:space-y-0 mx-auto grid lg:grid-cols-2 justify-between items-center'>
				{/* left banner */}
				<div className='space-y-4'>
					<h1 className='text-4xl font-light capitalize text-brand'>
						Start Today
					</h1>
					<h1 className='text-5xl font-bold uppercase'>
						Help us to grow <br /> your daily life skills
					</h1>
					<p className='text-gray-700 text-lg'>
						We introduce you to the best instructors <br /> who just
						focus on training you better.
					</p>
					<BtnPrimary>Get Started</BtnPrimary>
				</div>
				{/* right banner */}
				<div className='flex items-center'>
					<img
						src={bannerBg}
						alt='pics'
						className='w-auto object-cover rounded-tl-3xl rounded-tr rounded-br-3xl rounded-bl mx-auto'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
