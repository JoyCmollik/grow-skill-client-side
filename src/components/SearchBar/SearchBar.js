import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SearchBar = () => {
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
				<FontAwesomeIcon icon={faCartPlus} />
			</div>
		</div>
	);
};

export default SearchBar;
