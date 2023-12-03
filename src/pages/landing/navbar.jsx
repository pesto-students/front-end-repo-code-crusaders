import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './style.css';

export const Navbar = () => {
	return (
		<div className='slate-custom h-12 border-b-2 border-[#A3CE9B]'>
			<div className='text-black flex flex-row h-full ms-20'>
				<div className='text-black text-xl my-auto p-auto h-auto border-e-[#A3CE9B] border-2'>
					<MenuOutlined />
					<span className='mx-5'>Categories</span>
				</div>
				<div className='h-full align-middle text-center p-auto my-auto'>
					<ul className='flex flex-row m-2 p-auto text-xl'>
						<li className='h-12 mx-2 my-auto'>Doctor</li>
						<li className='h-12 mx-2 my-auto'>Lab</li>
						<li className='h-12 mx-2 my-auto'>About Us</li>
						<li className='h-12 mx-2 my-auto'>Contact Us</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
