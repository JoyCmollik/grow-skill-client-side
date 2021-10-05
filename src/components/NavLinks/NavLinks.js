import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<nav className='hidden md:flex items-center lg:space-x-4'>
			<NavLink
				activeClassName='text-brand border-brand'
				exact
				to='/'
				className='px-2 py-1 hover:text-primary transition-colors duration-200 border-b border-transparent'
			>
				Home
			</NavLink>
			<NavLink
				activeClassName='text-brand border-brand'
				to='/about'
				className='px-2 py-1 hover:text-primary transition-colors duration-200 border-b border-transparent'
			>
				About us
			</NavLink>
			<NavLink
				activeClassName='text-brand border-brand'
				to='/services'
				className='px-2 py-1 hover:text-primary transition-colors duration-200 border-b border-transparent'
			>
				Services
			</NavLink>
			<NavLink
				activeClassName='text-brand border-brand'
				to='/blogs'
				className='px-2 py-1 hover:text-primary transition-colors duration-200 border-b border-transparent'
			>
				Blogs
			</NavLink>
		</nav>
	);
};

export default NavLinks;
