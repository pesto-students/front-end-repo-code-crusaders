import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { Carousel } from 'antd';
import Customer from '../../assets/landingPage/customer.png';
import './style.css';

const testimonyData = [
	{
		name: "Genelia D'Souza",
		position: 'Dentist',
		message:
      '“It has become easy to procure products for my patients through DentiBridge”',
	},
	{
		name: 'John Doe',
		position: 'CEO, Example Company',
		message:
      '“DentiBridge helped streamline our supply chain and improve efficiency by 20%!',
	},
	{
		name: 'Jane Smith',
		position: 'Dental Hygienist',
		message:
      "“I can finally focus more on my patients thanks to DentiBridge's easy-to-use platform.”",
	},
	{
		name: 'Michael Jones',
		position: 'Dental Assistant',
		message:
      "“DentiBridge saved me hours of paperwork every week. It's a lifesaver!”",
	},
	{
		name: 'David Miller',
		position: 'Dental Lab Technician',
		message:
      '“DentiBridge has made communication with dentists seamless and efficient.”',
	},
];

export const Testimony = () => {
	const [tindex, setTindex] = React.useState(2);

	const changeIndex = (left = false, right = false) => {
		if (left) {
			if (tindex === 0) {
				setTindex(testimonyData.length - 1);
			} else {
				setTindex(tindex - 1);
			}
		} else if (right) {
			if (tindex === testimonyData.length - 1) {
				setTindex(0);
			} else {
				setTindex(tindex + 1);
			}
		}
	};

	return (
		<div>
			<div className='p-2 my-14'>
				<h1 className='text-black text-4xl'>What our Customers say about us</h1>
			</div>

			<div className='w-full  overflow-hidden'>
				<div className='w-full justify-center flex'>
					{/* <div> */}
					{testimonyData.map((elem, index) => (
						<div key={index}
							className={` ${index === tindex ? 'visible' : 'hidden'}`}
						>
							<div className='box flex flex-row justify-center my-20 w-screen'>
								<div className='z-0 relative bg-[#FF7B5E] border-black border-4 rounded-3xl rounded-bs-[2rem] rounded-te-[2rem] rounded-ee-[2rem] h-[19.5rem] w-80'>
									<img
										src={Customer}
										alt='Customer'
										className='z-10 absolute border-2 border-black rounded-3xl right-1 bottom-1 '
									/>
								</div>
								<div className='w-[40rem]'>
									<div className=' text-black flex justify-end w-full'>
										<span
											className='p-1 px-2 h-auto w-auto border-black border-2 rounded-md m-1 hover:cursor-pointer'
											onClick={() => changeIndex(true)}
										>
											<LeftOutlined />
										</span>
										<span
											className='p-1 px-2 h-auto w-auto border-black border-2 rounded-md m-1 hover:cursor-pointer'
											onClick={() => changeIndex(false, true)}
										>
											<RightOutlined />
										</span>
									</div>
									<div className='h-52 border-black border-y-4 border-e-4 bg-[#5A61FF] w-full rounded-e-3xl p-5 flex flex-col justify-between'>
										<div className='text-white text-2xl text-left m-2 font-sans '>
											{elem.message}
										</div>
										<div className='text-white flex flex-col text-md text-left font-bold'>
											<span> {elem.name} </span>
											<span> {elem.position} </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
