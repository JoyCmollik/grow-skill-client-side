import {
	faCalendarAlt,
	faSearch,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import AboutOverview from '../AboutOverview/AboutOverview';
import SectionTitle from '../SectionTitle/SectionTitle';
import Title from '../Title/Title';
import WorkFlow from '../WorkFlow/WorkFlow';

const About = () => {
	return (
		<div className='bg-lighter pt-28 pb-10'>
			<div className='container mx-auto py-5 space-y-5 lg:space-y-20'>
				<AboutOverview />

				<div>
					<SectionTitle moto='We work to fulfill your choices.'>
						Our Work Flow
					</SectionTitle>
					<div className='grid grid-cols-3 place-items-center gap-4'>
						<WorkFlow
							icon={faSearch}
							title='your best search option'
						>
							You may have found many options like us, but what we
							are assuring is the best service with trust and
							safety.
						</WorkFlow>
						<WorkFlow
							icon={faCalendarAlt}
							title='book when you want'
						>
							We always keep ourselves ready for your bookings.
							Set a date and simply register yourself.
						</WorkFlow>
						<WorkFlow icon={faUser} title='Satisfying user reviews'>
							People who took service from use always inspired us
							to work more and develop our services.
						</WorkFlow>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
