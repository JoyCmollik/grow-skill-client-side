import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices/useServices';
import Service from '../Service/Service';
import Title from '../Title/Title';

const ServicesDemo = () => {
	const [services] = useServices();
	const [filteredServices, setFilteredServices] = useState([]);

	useEffect(() => {
		if (services) {
			const filtered = services.filter((service, index) => index < 4);
			setFilteredServices(filtered);
		}
	}, [services]);

	return (
		<div className='bg-lighter'>
			<div className='container mx-auto py-5 lg:py-20'>
				{/* title */}
				<div className='flex justify-between'>
					<Title
						subTitle='Services'
						mainTitle='There are many services that you can take
							from us.'
					/>
					<Link to='/services'>
						<button className='text-lg text-primary'>
							See All
						</button>
					</Link>
				</div>

				{/* content */}
				<div className='grid grid-cols-4 place-items-center gap-4 pt-10'>
					{filteredServices &&
						filteredServices.map((service) => (
							<Service key={service.id} service={service} />
						))}
				</div>
			</div>
		</div>
	);
};

export default ServicesDemo;
