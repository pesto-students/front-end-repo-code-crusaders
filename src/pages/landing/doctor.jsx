import React from 'react';
// import { Button } from './button';
import './style.css';
import FluidLine from '../../assets/landingPage/fluied_line.png';
import Glass from '../../assets/landingPage/glass.png';
import Star from '../../assets/landingPage/star.png';
import Stethoscope from '../../assets/landingPage/stathoscope.png';
import DoctorLayer from '../../assets/landingPage/doctor_layer.png';

export const Doctor = () => {
	return (
		<div className='flex w-full h-auto'>
			<div className='text-black w-5/12 flex flex-col justify-end text-start'>
				<h1 className='w-2/3 mx-auto text-5xl'>
          Connecting Smiles With Precision: Your Dental Procurement Partner
				</h1>
				<p className='w-2/3 mx-auto text-2xl'>
          Let Dentibridge worry about your procurements
				</p>
				<div className='mx-auto my-5 w-2/3'>
					<button
						className='landing-button h-10 p-auto px-5 text-black font-bold text-xl text-center align-middle
		rounded-full border-black-2'
					>
            Doctor Sign-up
					</button>
					{/* <Button text='Doctor Sign-up' className='mx-auto my-5 w-2/3 text-2xl' /> */}
				</div>
			</div>
			<div className='flex justify-between w-7/12 my-10'>
				<div className='z-0 flex justify-around w-full ms-1/2'>
					<div className='flex flex-col ms-5'>
						<img src={Glass} alt='glass' />
						<img src={Stethoscope} alt='glass' />
					</div>
					<div className='flex flex-row w-1/2'>
						<div className='z-10 flex flex-col justify-end h-full'>
							<div className='h-5/6 w-64 bg-slate-950 rounded-3xl relative '>
								<img
									src={DoctorLayer}
									alt='Doctor'
									className='absolute bottom-5 right-5'
								/>
							</div>
						</div>
						<div className='flex flex-col w-full'>
							<div>
								<img src={Star} alt='glass' />
							</div>
							<div className='relative w-full'>
								<img src={FluidLine} alt='glass' className='absolute right-10 h-56 w-96' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
