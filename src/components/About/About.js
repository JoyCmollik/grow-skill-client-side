import {
	faCalendarAlt,
	faSearch,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Title from '../Title/Title';
import WorkFlow from '../WorkFlow/WorkFlow';

const About = () => {
	return (
		<div className='bg-lighter pt-28 pb-10'>
			<div className='container mx-auto pb-5 space-y-5 lg:space-y-20'>
				<Title
					subTitle='About Us'
					mainTitle="We're those who are always ready to let you be more practical."
				/>

				<div>
					<h2 className='text-center text-2xl py-5 lg:py-10 font-semibold'>
						Our Work Flow
					</h2>
					<div className='grid grid-cols-3 place-items-center gap-4'>
						<WorkFlow
							icon={faSearch}
							title='your best search option'
							description='You may have found many options like us, but what we are
					assuring is the best service with trust and safety.'
						/>
						<WorkFlow
							icon={faCalendarAlt}
							title='book when you want'
							description='We always keep ourselves ready for your bookings. Set a date and 
						simply register yourself.'
						/>
						<WorkFlow
							icon={faUser}
							title='Satisfying user reviews'
							description='People who took service from use always inspired us to work more and develop our services.'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
