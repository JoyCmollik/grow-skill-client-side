import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import RecentBlog from '../RecentBlog/RecentBlog';
import Title from '../Title/Title';

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [recentBlogs, setRecentBlogs] = useState([]);

	useEffect(() => {
		fetch('./fake_blogs.json')
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	useEffect(() => {
		if (blogs) {
			const recent = blogs.filter((blog, index) => index < 4);
			setRecentBlogs(recent);
		}
	}, [blogs]);

	return (
		<div className='bg-lighter pt-28'>
			<div className='container mx-auto pb-5 space-y-5 lg:space-y-20'>
				<Title
					subTitle='Blogs'
					mainTitle='Look for articles written by experts.'
				/>

				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 lg:col-span-8'>
						<div className='grid grid-cols-1 md:grid-cols-2 place-items-center lg:place-items-end gap-8 lg:px-20'>
							{blogs &&
								blogs.map((blog) => (
									<Blog key={blog.id} blog={blog} />
								))}
						</div>
					</div>
					<div className='col-span-12 lg:col-span-4'>
						<div className='space-y-8'>
							<h4 className='text-xl'>Recent Blogs</h4>
							<div className='space-y-4'>
								{recentBlogs.map((blog) => (
									<RecentBlog key={blog.id} blog={blog} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
