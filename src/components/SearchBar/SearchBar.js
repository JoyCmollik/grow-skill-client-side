import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../App';

const SearchBar = () => {
	const [cart, setCart] = useContext(CartContext);

	return (
		<div className='hidden lg:flex px-5 py-3 rounded items-center bg-white'>
			<div className='flex items-center space-x-2 pr-2 text-gray-400 focus-within:text-gray-900'>
				<FontAwesomeIcon icon={faSearch} />
				<input
					className='bg-none outline-none border-0 text-gray-400 focus:text-gray-900 font-light'
					type='text'
					placeholder='search...'
				/>
			</div>
			<div className='pl-2 border-l'>
				<NavLink to='/cart' className='text-gray-500 relative'>
					<FontAwesomeIcon icon={faCartPlus} className='text-xl' />
					<p className='bg-primary text-white text-xs px-1 py-0.5 rounded absolute -top-2 -right-4'>
						{cart ? cart.length : 0}
					</p>
				</NavLink>
			</div>
		</div>
	);
};

export default SearchBar;
