import React from 'react';
import {
	Button, Form, Input
} from 'antd';
import './style.css';
import StudyLight from '../../assets/landingPage/study_light.png';
import LadyDoctor from '../../assets/landingPage/lady_doctor.png';
import Star from '../../assets/landingPage/star.png';

// const { Option } = Select;

const onFinish = (values) => {
	console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

export const ContectUs = ({ contactRef }) => {
	return (
		<div className='flex flex-row mb-20 mt-24' ref={contactRef}>
			<div className='w-1/2'>
				<div className='border-2 border-black rounded-2xl bg-[#E4FFD7] w-1/2 m-auto'>
					<div className='flex flex-col px-10 py-5'>
						<h1 className='text-black my-5 text-left'>Contact Us</h1>
						<div className='mt-5'>
							<Form
								name='contactUs'
								wrapperCol={{
									span: 22,
								}}
								style={{
									maxWidth: 600,
								}}
								initialValues={{
									remember: true,
								}}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete='off'
							>
								<Form.Item
									name='fullname'
									rules={[
										{
											required: true,
											message: 'Please input your full name!',
										},
									]}
								>
									<Input
										placeholder='Full Name'
										className='border-2 border-black rounded-full p-2'
									/>
								</Form.Item>

								<Form.Item
									name='phone'
									rules={[
										{
											required: true,
											message: 'Please input your phone number!',
										},
									]}
								>
									<Input
										// addonBefore={prefixSelector}
										placeholder='Phone No'
										// style={{ border: '2px solid black', borderRadius: '15px', padding: '2px' }}
										className='border-2 border-black rounded-full p-2'
									/>
								</Form.Item>

								<Form.Item
									name='email'
									rules={[
										{
											type: 'email',
											message: 'The input is not valid E-mail!',
										},
										{
											required: true,
											message: 'Please input your E-mail!',
										},
									]}
								>
									<Input
										placeholder='Email'
										className='border-2 border-black rounded-full p-2'
									/>
								</Form.Item>

								<Form.Item
									wrapperCol={
										{
											// offset: 8,
											// span: 16,
										}
									}
									className='text-left '
								>
									<Button
										type='primary'
										htmlType='submit'
										className='bg-[#1A2F4E] h-10 p-auto px-10 text-white text-lg font-bold text-center align-middle rounded-full border-black-2 '
									>
                    Send Email
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</div>
			<div className='w-1/2 flex justify-center'>
				<div className='relative w-1/2 flex flex-row'>
					<div className='absolute top-32 z-0'> <img src={StudyLight} alt="study lamp" /></div>
					<div className='z-10 mx-10 px-5'> <img src={LadyDoctor} alt="Doctor" /> </div>
					<div className='absolute right-28 top-10 z-0'> <img src={Star} alt="star" /></div>
				</div>
			</div>
		</div>
	);
};
