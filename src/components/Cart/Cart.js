import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../../App';
import useServices from '../../hooks/useServices/useServices';
import { removeCart, removeFromCart } from '../../utilities/localdb/localdb';
import CartItem from '../CartItem/CartItem';
import SectionTitle from '../SectionTitle/SectionTitle';

const Cart = () => {
	const [services] = useServices();
	const [cart, setCart] = useContext(CartContext);
	const history = useHistory();

	const handleRemove = (removeId) => {
		const newCart = cart.filter(
			(cartItem) => parseInt(cartItem.id) !== removeId
		);
		setCart(newCart);
		removeFromCart(removeId);
	};

	const handleCheckout = () => {
		setCart([]);
		removeCart();
		history.push('/success');
	};

	return (
		<div className='bg-lighter pt-28 pb-10'>
			<div className='container mx-auto'>
				<SectionTitle moto='find your selected packages here'>
					My Cart
				</SectionTitle>

				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-8 shadow rounded p-10 bg-light space-y-8'>
						{cart.length
							? cart.map((cartItem) => (
									<CartItem
										key={cartItem.id}
										cartItem={cartItem}
										handleRemove={handleRemove}
									/>
							  ))
							: 'Your cart is empty'}
					</div>
					<div className='col-span-4 shadow rounded p-10 bg-light space-y-8'>
						<div className='bg-lighter p-4 rounded shadow flex justify-between items-center'>
							<p className='text-lg'>Total Selected:</p>
							<p className='text-lg font-semibold'>
								{cart ? cart.length : 0}
							</p>
						</div>
						<div className='bg-lighter p-4 rounded shadow flex justify-between items-center'>
							<p className='text-lg'>To Pay:</p>
							<p
								className={`text-lg font-semibold ${
									cart.length !== 0 ? 'text-brand' : ''
								}`}
							>
								$
								{cart.reduce(
									(prev, curr) => prev + curr.service_price,
									0
								)}
							</p>
						</div>
						{cart.length ? (
							<button
								className='w-full text-center bg-primary text-xl rounded text-white font-bold p-4 block'
								onClick={handleCheckout}
							>
								Confirm To Buy
							</button>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
