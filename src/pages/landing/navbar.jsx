import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './style.css';

export const Navbar = ({ category, scroll }) => {
	//   const handleScroll = () => {
	// 	const { scrollY } = window;

	// 	// You can adjust these values based on your layout and design
	// 	const doctorOffset = 0;
	// 	const labOffset = document.getElementById('about').offsetTop;
	// 	const contactOffset = document.getElementById('contact').offsetTop;

	// 	if (scrollY < aboutOffset) {
	// 		setActiveSection('home');
	// 	} else if (scrollY < contactOffset) {
	// 		setActiveSection('about');
	// 	} else {
	// 		setActiveSection('contact');
	// 	}
	// };

	return (
		<div className='slate-custom h-12 border-b-2 border-[#A3CE9B]'>
			<div className='text-black flex flex-row h-full ms-20'>
				<div className='text-black text-xl my-auto p-auto h-auto border-e-[#A3CE9B] border-2'>
					<MenuOutlined />
					<span className='mx-5'>Categories</span>
				</div>
				<div className='h-full align-middle text-center p-auto my-auto'>
					<ul className='flex flex-row m-2 p-auto text-xl'>
						<li
							className='h-12 mx-2 my-auto cursor-pointer'
							onClick={() => scroll(category.doctorRef)}
						>
              Doctor
						</li>
						<li
							className='h-12 mx-2 my-auto cursor-pointer'
							onClick={() => scroll(category.labRef)}
						>
              Lab
						</li>
						<li
							className='h-12 mx-2 my-auto cursor-pointer'
							onClick={() => scroll(category.aboutRef)}
						>
              About Us
						</li>
						<li
							className='h-12 mx-2 my-auto cursor-pointer'
							onClick={() => scroll(category.contactRef)}
						>
              Contact Us
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
