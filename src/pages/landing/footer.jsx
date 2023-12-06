import React from 'react';
import {
	PhoneOutlined,
	MailOutlined,
	FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined
} from '@ant-design/icons';
import './style.css';

export const FooterComp = () => {
	return (
		<div className='h-auto w-full bg-[#C9D5FF] border-[#B2BCCA] border-2 rounded-t-[4rem] z-10 m-0 p-10 px-20'>
			<div className='flex flex-row justify-between'>
				<div className='gutter'>
					<p className='my-2 text-3xl'> DentiBridge</p>
					<p className='my-2 text-xl'><PhoneOutlined /> <span className='px-2'> +91 8574631258 </span></p>
					<p className='my-2 text-xl'><MailOutlined /> <span className='px-2'> dentibridge@support.com </span></p>
					<div className='my-2 flex flex-row justify-between py-2'>
						<div className='w-10 h-10 border-black border-0'>
							<FacebookOutlined style={{ fontSize: '40px' }}/>
						</div>
						<div className='w-10 h-10 border-black border-0'>
							<InstagramOutlined style={{ fontSize: '40px' }}/>
						</div>
						<div className='w-10 h-10 border-black border-0'>
							<LinkedinOutlined style={{ fontSize: '40px' }}/>
						</div>
						<div className='w-10 h-10 border-black border-0'>
							<TwitterOutlined style={{ fontSize: '40px' }}/>
						</div>
						<div className='w-10 h-10 border-black border-0'>
							<YoutubeOutlined style={{ fontSize: '40px' }}/>
						</div>
					</div>
				</div>
				<div className='w-1/3 flex flex-row text-black m-2 justify-evenly'>
					<ul className='m-2'>
						<li className='font-bold text-lg my-2'> Menu </li>
						<li> <a href="#doctors"> Doctors </a></li>
						<li> <a href="#labs"> Labs </a></li>
					</ul>
					<ul className='m-2'>
						<li className='font-bold text-lg my-2'> Company </li>
						<li> <a href="#aboutus" className='text-md '> About Us </a></li>
						<li> <a href="#contactus"> Contact Us </a></li>
					</ul>
				</div>
				<div>
					<div>
						<h1> Subscribe to our NewsLetter </h1>
						Form
					</div>
				</div>
			</div>
		</div>
	);
};
