import React from 'react';
import {
	PhoneOutlined,
	MailOutlined,
	FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './style.css';

const onFinish = (values) => {
	console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

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
				<div className='w-1/3 flex flex-row text-[#575757] m-2 justify-evenly'>
					<ul className='m-2 leading-loose'>
						<li className='font-bold text-black text-lg my-2'> Menu </li>
						<li> <a href="#doctors" className='no-underline text-[#575757] hover:text-black'> Doctors </a></li>
						<li> <a href="#labs" className='no-underline text-[#575757] hover:text-black'> Labs </a></li>
					</ul>
					<ul className='m-2 leading-loose'>
						<li className='font-bold text-black text-lg my-2'> Company </li>
						<li> <a href="#aboutus" className='no-underline text-[#575757] hover:text-black'> About Us </a></li>
						<li> <a href="#contactus" className='no-underline text-[#575757] hover:text-black'> Contact Us </a></li>
					</ul>
				</div>
				<div>
					<div className='w-2/3'>
						<h1> Subscribe to our Newsletter </h1>
						<div className='mt-5'>
							<Form
								name='subNewsletter'
								wrapperCol={{
									span: 22,
								}}
								className='max-w-full w-full'
								initialValues={{
									remember: true,
								}}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete='on'
							>
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
									className=''
								>
									<Input
										placeholder='Email'
										className='border-2 border-black rounded-full p-2 w-full'
									/>
								</Form.Item>

								<Form.Item
									wrapperCol={
										{
											// offset: 8,
											// span: 16,
										}
									}
									className='pe-5'
								>
									<Button
										type='primary'
										htmlType='submit'
										className='bg-[#5395ff] h-10 w-full text-black text-lg font-bold text-center align-middle rounded-full border-black border-2'
									>
                    Subscribe Now
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
