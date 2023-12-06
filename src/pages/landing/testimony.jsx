import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Customer from '../../assets/landingPage/customer.png';
import './style.css';

export const Testimony = () => {
	return (
		<div>
			<div className='p-2 my-14'>
				<h1 className='text-black text-4xl'>What our Customers say about us</h1>
			</div>

			<div className='w-full'>
				{/* <div> */}
				<div className='flex justify-center my-20'>
					<div className='z-0 relative bg-[#FF7B5E] border-black border-4 rounded-3xl rounded-bs-[2rem] rounded-te-[2rem] rounded-ee-[2rem] h-[19.5rem] w-80'>
						<img
							src={Customer}
							alt='Customer'
							className='z-10 absolute border-2 border-black rounded-3xl right-1 bottom-1 '
						/>
					</div>
					<div className='w-[40rem]'>
						<div className=' text-black flex justify-end w-full'>
							<span className='p-1 px-2 h-auto w-auto border-black border-2 rounded-md m-1 '>
								<LeftOutlined />
							</span>
							<span className='p-1 px-2 h-auto w-auto border-black border-2 rounded-md m-1'>
								<RightOutlined />
							</span>
						</div>
						<div className='h-52 border-black border-y-4 border-e-4 bg-[#5A61FF] w-full rounded-e-3xl p-5 flex flex-col justify-between'>
							<div className='text-white text-3xl text-justify m-2 font-sans '>
                “It has become easy to procure products for my patients through
                DentiBridge”
							</div>
							<div className='text-white flex flex-col text-md text-left font-bold'>
								<span> Genelia D'Souza </span>
								<span> Dentist </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
