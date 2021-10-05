import React from 'react';

const CartItem = (props) => {
	const { service_img, service_price, service_title, id } = props.cartItem;

	return (
		<div className='bg-lighter rounded grid grid-cols-12 shadow'>
			<div className='col-span-2'>
				<img
					className='w-40 h-40 object-cover'
					src={service_img}
					alt='cart item'
				/>
			</div>
			<div className='col-span-5 px-2 py-4'>
				<h2 className='text-xl capitalize font-semibold'>
					{service_title}
				</h2>
			</div>
			<div className='col-span-3 flex justify-center items-center'>
				<h2 className='text-xl text-primary capitalize font-semibold'>
					${service_price}
				</h2>
			</div>
			<div className='col-span-2 flex justify-center items-center'>
				<button
					onClick={() => props.handleRemove(id)}
					className='px-4 py-2 text-base text-white bg-red-400 rounded hover:bg-red-500 transition duration-100'
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItem;
