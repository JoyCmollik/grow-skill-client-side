import React from 'react';

const RecentBlog = (props) => {
	const { blog_img, blog_date, blog_title } = props.blog;

	return (
		<div className='h-24 bg-light rounded flex space-x-2'>
			<img
				className='w-24 object-cover rounded-l'
				src={blog_img}
				alt='blog'
			/>
			<div className='p-2 space-y-1'>
				<p className='text-gray-500'>{blog_date}</p>
				<button className='text-lg font-bold text-left hover:text-primary'>
					{blog_title}
				</button>
			</div>
		</div>
	);
};

export default RecentBlog;
