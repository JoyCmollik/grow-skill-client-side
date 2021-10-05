import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import useServices from '../../hooks/useServices/useServices';
import { addToCart } from '../../utilities/localdb/localdb';
import Service from '../Service/Service';
import Title from '../Title/Title';

const ServicesDemo = () => {
	const [services] = useServices();
	const [filteredServices, setFilteredServices] = useState([]);
	const [cart, setCart] = useContext(CartContext);

	useEffect(() => {
		if (services) {
			const filtered = services.filter((service, index) => index < 4);
			setFilteredServices(filtered);
		}
	}, [services]);

	const handleService = (newService) => {
		const isExisting = cart.find((service) => service.id === newService.id);

		if (!isExisting) {
			setCart([...cart, newService]);
			addToCart(newService.id);
		}
	};

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
						<button className='hidden md:block text-lg text-primary'>
							See All
						</button>
					</Link>
				</div>

				{/* content */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 pt-10'>
					{filteredServices &&
						filteredServices.map((service) => (
							<Service
								key={service.id}
								service={service}
								handleService={handleService}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default ServicesDemo;
