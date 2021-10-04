import React from 'react';
import useServices from '../../hooks/useServices/useServices';
import Service from '../Service/Service';
import Title from '../Title/Title';

const Services = () => {
	const [services] = useServices();

	return (
		<div className='bg-lighter pt-28'>
			<div className='container mx-auto pb-5 space-y-5 lg:space-y-20'>
				<Title
					subTitle='Services'
					mainTitle='Choose the service that you want from us and let us prove ourselves.'
				/>

				<div className='grid md:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-4 gap-y-8'>
					{services &&
						services.map((service) => (
							<Service key={service.id} service={service} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Services;
