/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
	Flex,
	Input, Button, Checkbox, Form, Row, Col
} from 'antd';
import { Toaster } from 'react-hot-toast';
import { errorToast, successToast } from '../../utils';
import SecondaryLogo from '../../assets/logo/Secondary-logo.png';
import Logo from '../../assets/logo/logo.PNG';
import Email from '../../assets/logo/Email.png';
import { registerUser } from '../../store/auth/authActions';

export const Register = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.auth);
	const [validationError, setValidationError] = useState('');
	const fullName = useRef('');
	const email = useRef('');
	const password = useRef('');
	const [form] = Form.useForm();
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};
	const signUpUser = (e) => {
		// e.preventDefault();
		// e.stopPropagation();
		// validation for all fields
		if (
			!e.firstName.trim
	  || !e.lastName.trim
	  || !e.email.trim
		) {
			setValidationError('All fields are required');
		} else {
			dispatch(
				registerUser({
					firstName: e.firstName,
					lastName: e.lastName,
					email: e.email,
					password: e.password,
					doctorId: e.doctor,
					hospital_name: e.hospital,
					address: e.address,
					city: e.city,
					pincode: e.pincode,
					state: e.state,
					country: e.country
				})
			)
				.unwrap()
				.then(() => {
					e.target.reset();
					successToast('User Registered Successfully');
				})
				.catch((errorData) => {
					errorToast(errorData.error);
				});
		}
	};

	return (
		<div className='w-full flex h-screen'>
			<div className='w-2/5 flex items-center justify-center gap-10'>
				<div className='flex flex-col p-20 items-start'>
					<div className='flex flex-col p-10 p-x-20 items-center gap-10 align-stretch'>
						<img src={Logo} alt="Main Logo" className='back-image object-cover'/>
					</div>
					<div className="flex flex-col p-10 p-x-5 items-start gap-10">
						<Form
							form={form}
							layout="horizontal"
							// labelCol={{ span: 6 }}
							// wrapperCol={{ span: 16 }}
							initialValues={{
								remember: true,
							}}
							onFinish={signUpUser}
						>
							<Row gutter={24} className='flex px-4'>

								<Form.Item

									name="firstName" className='mx-1' rules={[
										{
											required: true,
											message: 'Please input your First Name!',
										}]}>

									<Input placeholder='First Name' />

								</Form.Item>

								<Form.Item

									name="lastName" className='mx-1' rules={[
										{
											required: true,
											message: 'Please input your LastName!',
										}]}>

									<Input placeholder = 'Last Name' />

								</Form.Item>

							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name="email" rules={[
										{
											type: 'email'
										},
										{
											required: true,
											message: 'Please enter your Email Address!'
										}
									]} >
										<Input placeholder = 'Email Address' />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name="doctor" rules={[
										{
											required: true,
											message: 'Please input your Doctor ID!',
										}]}>
										<Input placeholder='Doctor ID ' />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name="password" rules={[
										{
											required: true,
											message: 'Please enter your Password!',
										}]}>
										<Input.Password placeholder='Password'/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name="confirmPassword" rules={[
										{
											required: true,
											message: 'Re-enter password!',
										}]}>
										<Input.Password placeholder='Confirm Password'/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name="hospital" rules={[
										{
											required: true,
											message: 'Please enter your Hospital Name!',
										}]}>
										<Input placeholder='Hospital' />
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={24}>
									<Form.Item name="address" rules={[
										{
											required: true,
											message: 'Please enter your address!',
										}]}>
										<Input.TextArea placeholder='Enter your Address here'/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={12}>
									<Form.Item name="city" rules={[
										{
											required: true,
											message: 'Please enter your City!',
										}]}>
										<Input placeholder='City'/>
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item name="state" rules={[
										{
											required: true,
											message: 'Please enter your State!',
										}]}>
										<Input placeholder='State'/>
									</Form.Item>
								</Col>
							</Row>
							<Row gutter={24}>
								<Col span={12}>
									<Form.Item name="pincode" rules={[
										{
											required: true,
											message: 'Please enter your Pincode',
										}]}>
										<Input placeholder='Pincode' />
									</Form.Item>
								</Col>
								<Col span={12}>
									<Form.Item name="country" rules={[
										{
											required: true,
											message: 'Please enter your country!',
										}]}>
										<Input placeholder='Country' />
									</Form.Item>
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<Form.Item>
										<Button htmlType="submit" className='docButton'>
              Register
										</Button>
            Or <a href="#">Login Now!</a>
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</div>
			<div className='w-3/5 flex items-center justify-center' style = {{ backgroundColor: '#CCD6E5' }}>
				<div className=''>
					<img src={SecondaryLogo}
						alt='Background Logo'
						className='back-image object-cover h-full' />
				</div>
			</div>
		</div>
		// <section className='p-8'>
		// 	<Toaster />
		// 	<form onSubmit={signUpUser}>
		// 		<div>
		// 			<h1>Sign Up</h1>
		// 			<p className='mt-4 mb-8'>
	//     If you already have an account registered <br />
	//     You can{' '}
		// 				<Link to='/login' className='link'>
	//       Login here !
		// 				</Link>
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<label className='block text-primary-grey text-[13px] font-medium pb-1'>
	//     Full Name
		// 			</label>
		// 			<div className='relative'>
		// 				<input
		// 					className='inputField mb-8 w-full'
		// 					name='fullName'
		// 					placeholder='Enter your full name'
		// 					id='fullName'
		// 					onChange={() => setValidationError('')}
		// 					ref={(e) => {
		// 						fullName = e;
		// 					}}
		// 					type='text'
		// 					required
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<label className='block text-primary-grey text-[13px] font-medium pb-1'>
	//     Email
		// 			</label>
		// 			<div className='relative'>
		// 				<input
		// 					className='inputField mb-8 w-full'
		// 					name='email'
		// 					placeholder='Enter your email'
		// 					id='email'
		// 					onChange={() => setValidationError('')}
		// 					ref={(e) => {
		// 						email = e;
		// 					}}
		// 					type='email'
		// 					required
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<label className='block text-primary-grey text-[13px] font-medium pb-1'>
	//     Password
		// 			</label>
		// 			<div className='relative'>
		// 				<input
		// 					className='inputField mb-8 w-full'
		// 					name='password'
		// 					placeholder='Enter your password'
		// 					id='password'
		// 					onChange={() => setValidationError('')}
		// 					ref={(e) => {
		// 						password = e;
		// 					}}
		// 					type='password'
		// 					required
		// 				/>
		// 			</div>
		// 		</div>
		// 		{validationError && (
		// 			<p className='text-left text-red-500'>{validationError}</p>
		// 		)}
		// 		<button type='submit' className='primaryButton'>
		// 			{loading ? 'Loading...' : 'Register'}
		// 		</button>
		// 	</form>
		// </section>
	);
};
