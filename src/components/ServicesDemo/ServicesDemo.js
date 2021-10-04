import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices/useServices';
import Service from '../Service/Service';

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
					<div className=''>
						<p className='text-brand text-xl'>Services</p>
						<h2 className='text-3xl'>
							There are many services that <br /> you can take
							from us.
						</h2>
					</div>
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
