import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Blog = (props) => {
	const {
		blog_img,
		blog_author,
		blog_avatar,
		blog_category,
		blog_date,
		blog_title,
	} = props.blog;

	return (
		<article
			className='flex flex-col justify-between bg-white rounded-lg shadow hover:shadow-lg transition duration-200 cursor-pointer'
			style={{ width: '380px', height: '100%' }}
		>
			<div>
				<img
					src={blog_img}
					alt='service'
					className='object-cover mx-auto rounded-t-lg'
					style={{
						width: '100%',
						height: '240px',
					}}
				/>
			</div>
			{/* body */}
			<div className='p-4 space-y-5'>
				{/* first part */}
				<span className='px-3 py-1 bg-light rounded text-base w-auto'>
					{blog_category}
				</span>

				{/* second part */}
				<h2 className='text-xl font-semibold capitalize'>
					{blog_title}
				</h2>

				{/* third part */}
				<div className='flex justify-between items-center border-b-2 border-light pb-2'>
					<div className='flex items-center space-x-2'>
						<img
							className='rounded-full object-cover w-10 h-10'
							src={blog_avatar}
							alt='avatar'
						/>
						<p className='text-base text-gray-500 text-xs'>
							{blog_author}
						</p>
					</div>
					<p className='text-base text-gray-500 text-xs'>
						<FontAwesomeIcon icon={faClock} className='mr-2' />
						{blog_date}
					</p>
				</div>
			</div>
		</article>
	);
};

export default Blog;
