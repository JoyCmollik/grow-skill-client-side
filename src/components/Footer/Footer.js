import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='bg-primary text-gray-200'>
			<div className='container mx-auto py-10 lg:pt-20'>
				<div className='grid grid-cols-4 pb-4 border-b border-lighter'>
					<div className='space-y-2 lg:space-y-4'>
						<h2 className='text-2xl font-bold text-white'>
							growSkill
						</h2>
						<p className='w-3/4'>
							We are always trying to provide our best service to
							you and all. Help us to do it.
						</p>
					</div>
					<div className='space-y-2 lg:space-y-4'>
						<h4 className='text-xl text-white'>Category</h4>
						<NavLink className='block' to='/'>
							Privacy & Policy
						</NavLink>
						<NavLink className='block' to='/'>
							Terms & Condition
						</NavLink>
						<NavLink className='block' to='/'>
							Customer Support
						</NavLink>
						<NavLink className='block' to='/'>
							Support
						</NavLink>
					</div>
					<div className='space-y-2 lg:space-y-4'>
						<h4 className='text-xl text-white'>Newsletter</h4>
						<p className='w-3/4'>
							Subscribe to our newsletter to get our latest price
							and offers.
						</p>
					</div>
					<div className='space-y-2 lg:space-y-4'>
						<h4 className='text-xl text-white'>Find us</h4>
						<p>(+880) 01 700000000</p>
						<p>email@email.com</p>
						<p>Dhaka, Bangladesh</p>
					</div>
				</div>

				<small className='block text-center py-2'>
					Developed by{' '}
					<a
						className='hover:text-brand'
						href='https://github.com/XoyCmollik'
					>
						Joy C Mollik{' '}
					</a>{' '}
					| A{' '}
					<a
						className='hover:text-brand'
						href='https://web.programming-hero.com/'
					>
						Programing Hero
					</a>{' '}
					Learner
				</small>
			</div>
		</footer>
	);
};

export default Footer;
