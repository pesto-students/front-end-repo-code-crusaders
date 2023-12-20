/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
	Flex,
	Input, Button, Checkbox, Form
} from 'antd';
import { Toaster } from 'react-hot-toast';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';
import SecondaryLogo from '../../assets/logo/secondary_logo.png';
import Logo from '../../assets/logo/primary_logo.png';

export const Login = () => {
	const { user, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const email = useRef('');
	const password = useRef('');

	useEffect(() => {
		console.log('user', user);
		if (user) {
			if (user.role === 'doctor') {
				navigate('/home', { successLogin: true });
			} else if (user.role === 'lab') {
				navigate('/dashboard', { successLogin: true });
			}
		}
	}, [navigate, user]);

	// const onFinish = () => {
	// 	console.log('Received values of form: ');
	// };
	const signinUser = async (values) => {
		// e.preventDefault();

		dispatch(
			loginUser({
				email: values.email,
				password: values.password,
			})
		)
			.unwrap()
			.catch((errorData) => {
				errorToast(errorData.error);
			});
	};
	// const onFinish = (values) => {
	// 	console.log('Received values of form: ', values);
	// 	console.log('EMail: ', values.email);
	// 	console.log('Password: ', values.password);
	// };

	return (
		<div className='w-full flex h-screen'>
			<div className='w-2/5 flex items-center justify-center gap-10'>
				<div className='flex flex-col p-20 items-start '>
					<div className='flex flex-col p-10 p-x-20 items-center gap-10 align-stretch'>
						<img src={Logo} alt="Main Logo" className='back-image object-cover'/>
					</div>
					<div className="flex flex-col p-10 p-x-5 items-start gap-10">
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{
								remember: true,
							}}
							onFinish={signinUser}
						>
							<Form.Item
								name="email"
								rules={[
									{
										required: true,
										message: 'Please input your Email Address!',
									},
									{
										type: 'email'
									}
								]}
							>
								<Flex>
									<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" />
								</Flex>
							</Form.Item>
							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: 'Please input your Password!',
									},
								]}
							>
								<Flex>
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
									/>
								</Flex>

							</Form.Item>
							<Form.Item>
								<Form.Item name="remember" valuePropName="checked" noStyle>
									<Checkbox>Remember me</Checkbox>
								</Form.Item>

								<a className="login-form-forgot" href="">
          Forgot password
								</a>
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit" className="docButton">
          Log in
								</Button>
        Or <a href="/login">register now!</a>
							</Form.Item>
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
		// 	<form onSubmit={signinUser}>
		// 		<div>
		// 			<h1>Sign In</h1>
		// 			<p className='mt-4 mb-8 text-lime-700'>
	//     If you don't have an account <br />
	//     You can{' '}
		// 				<Link to='/register/doctor' className='link'>
	//       Register here !
		// 				</Link>
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<label className='block text-primary-grey text-[13px] font-medium pb-1'>
	//     Email
		// 			</label>
		// 			<div className='relative'>
		// 				<input
		// 					className='inputField w-full mb-8'
		// 					name='email'
		// 					placeholder='Enter your email'
		// 					id='email'
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
		// 					className='inputField w-full mb-8'
		// 					name='password'
		// 					placeholder='Enter your password'
		// 					id='password'
		// 					ref={(e) => {
		// 						password = e;
		// 					}}
		// 					type='password'
		// 					required
		// 				/>
		// 			</div>
		// 		</div>
		// 		<button type='submit' className='primaryButton mt-4'>
		// 			{loading ? 'Loading...' : 'Login'}
		// 		</button>
		// 	</form>
		// </section>
	);
};
