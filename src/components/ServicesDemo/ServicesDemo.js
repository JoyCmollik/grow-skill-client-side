import React from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const ServicesDemo = () => {
	return (
		<div className='container mx-auto py-5 lg:py-20'>
			{/* title */}
			<div className='flex justify-between'>
				<div className=''>
					<p className='text-brand text-xl'>Services</p>
					<h2 className='text-3xl'>
						There are many services that <br /> you can take from
						us.
					</h2>
				</div>
				<Link to='/services'>
					<button className='text-lg text-primary'>See All</button>
				</Link>
			</div>

			{/* content */}
			<div className='grid grid-cols-4 gap-2 pt-10'>
				<Service />
			</div>
		</div>
	);
};

export default ServicesDemo;
