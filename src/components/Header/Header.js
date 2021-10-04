import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import NavLinks from '../NavLinks/NavLinks';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
	return (
		<div className='bg-light fixed w-full'>
			<header className='py-4 container mx-auto flex justify-between items-center'>
				{/* header left */}
				<div className='flex items-center'>
					<div className='px-2 border-r border-gray-400'>
						<h1 className='font-bold text-2xl'>
							grow<span className='text-primary'>Skill</span>
						</h1>
					</div>

					<h4 className='px-2'>
						<span className='mr-1'>
							<FontAwesomeIcon icon={faSeedling} />
						</span>
						Keep Learning
					</h4>
				</div>
				{/* header right */}
				<div className='flex items-center space-x-2 lg:space-x-5'>
					<NavLinks />
					<SearchBar />
					<BtnPrimary>Sign Up</BtnPrimary>
				</div>
			</header>
		</div>
	);
};

export default Header;
