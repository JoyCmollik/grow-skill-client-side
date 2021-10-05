import {
	faCheckCircle,
	faUser,
	faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import { faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutImg1 from '../../images/about-img.jpg';
import aboutImg2 from '../../images/aboutImg2.jpg';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

const AboutOverview = () => {
	return (
		<div className='grid lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 space-y-10 lg:space-y-0'>
			<div className='justify-self-center lg:justify-self-end'>
				<div className='relative'>
					<img
						className='w-80 md:w-96 rounded-xl'
						src={aboutImg1}
						alt='cycling'
					/>

					<img
						className='rounded-xl w-52 h-64 lg:h-72 absolute -bottom-10 -left-16'
						src={aboutImg2}
						alt='cycling'
					/>
					<p className='text-gray-500 text-xs lg:text-sm absolute top-20 -left-28 transform rotate-90'>
						<span className='font-semibold'>1000+</span> customer
						reviews.
					</p>
				</div>
			</div>
			<div className='space-y-4'>
				<h2 className='text-3xl font-semibold tracking-wide'>
					Achieve your goals <br /> with growSkill
				</h2>
				<p className='w-3/4'>
					Let us be your partner in learning cycling, driving, riding
					and swimming. We have been doing that since our service
					receivers are inspiring us to do so.
				</p>
				<ul className='space-y-1'>
					<li>
						<FontAwesomeIcon
							className='text-primary mr-2'
							icon={faCheckCircle}
						/>
						Level up your skills
					</li>
					<li>
						<FontAwesomeIcon
							className='text-primary mr-2'
							icon={faCheckCircle}
						/>
						Get trained by experts
					</li>
					<li>
						<FontAwesomeIcon
							className='text-primary mr-2'
							icon={faCheckCircle}
						/>
						Let us worry about your safety
					</li>
				</ul>
				<BtnPrimary>Register Today</BtnPrimary>
			</div>
		</div>
	);
};

export default AboutOverview;
