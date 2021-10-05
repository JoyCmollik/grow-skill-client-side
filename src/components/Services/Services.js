import React, { useContext } from 'react';
import { CartContext } from '../../App';
import useServices from '../../hooks/useServices/useServices';
import { addToCart } from '../../utilities/localdb/localdb';
import Service from '../Service/Service';
import Title from '../Title/Title';

const Services = () => {
	const [services] = useServices();
	const [cart, setCart] = useContext(CartContext);

	const handleService = (newService) => {
		const isExisting = cart.length
			? cart.find((service) => service.id === newService.id)
			: false;

		if (!isExisting) {
			setCart([...cart, newService]);
			addToCart(newService.id);
		}
	};

	return (
		<div className='bg-lighter pt-28 pb-10'>
			<div className='container mx-auto pb-5 space-y-5 lg:space-y-20'>
				<Title
					subTitle='Services'
					mainTitle='Choose the service that you want from us and let us prove ourselves.'
				/>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-4 gap-y-8'>
					{services &&
						services.map((service) => (
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

export default Services;
