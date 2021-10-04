import {
	faCalendarAlt,
	faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const {
		service_category,
		service_duration,
		service_img,
		service_price,
		service_rating,
		service_rating_count,
		service_students,
		service_title,
	} = props.service;

	console.log(service_students);

	return (
		<article
			className='flex flex-col justify-between bg-white rounded-lg shadow-lg'
			style={{ width: '340px' }}
		>
			<div className='w-5/6 mx-auto'>
				<img src={service_img} alt='service' className='object-cover' />
			</div>
			{/* body */}
			<div className='p-4 space-y-5'>
				{/* first part */}
				<div className='flex justify-between items-center'>
					<p className='px-3 py-1 bg-light rounded text-base'>
						{service_category}
					</p>
					<h4 className='text-brand text-xl'>${service_price}</h4>
				</div>

				{/* second part */}
				<h2 className='text-xl font-semibold capitalize'>
					{service_title}
				</h2>

				{/* third part */}
				<div className='flex justify-between items-center border-b-2 border-light pb-2'>
					<p className='text-base text-gray-500'>
						<FontAwesomeIcon
							icon={faCalendarAlt}
							className='mr-2'
						/>
						{service_duration} days
					</p>
					<p className='text-base text-gray-500'>
						<FontAwesomeIcon icon={faUserCircle} className='mr-2' />
						{service_students} Students
					</p>
				</div>

				{/* fourth part */}
				<div className='flex justify-between items-center pt-2'>
					<p className='text-base text-gray-500 flex items-center space-x-1'>
						<span>{service_rating}</span>
						<ReactStars
							count={5}
							edit={false}
							isHalf={true}
							value={service_rating}
							size={24}
							activeColor='#ffd700'
						/>
						<span>{service_rating_count}</span>
					</p>
					<Link to='/services'>
						<button className='bg-primary rounded-full px-3 py-2 text-white'>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default Service;
