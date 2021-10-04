import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<nav className='flex items-center'>
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
				About Us
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
			<NavLink
				activeClassName='text-brand border-brand'
				to='/cart'
				className='px-2 py-1 hover:text-primary transition-colors duration-200 border-b border-transparent'
			>
				Cart
			</NavLink>
		</nav>
	);
};

export default NavLinks;
