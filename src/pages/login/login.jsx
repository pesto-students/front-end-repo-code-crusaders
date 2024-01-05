/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
	Input, Button, Checkbox, Form
} from 'antd';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';
import LabLogo from '../../assets/logo/bg_logo.png';
import Logo from '../../assets/logo/nav_logo_black.png';

export const Login = () => {
	const { user, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleValue = useLocation();

	useEffect(() => {
		if (user) {
			if (user.role === 'doctor') {
				navigate('/home', { successLogin: true });
			} else if (user.role === 'lab') {
				navigate('/lab/products', { successLogin: true });
			}
		}
	}, [navigate, user]);

	const navigateSignup = () => {
		if (roleValue.state?.role === 'lab') {
			navigate('/register/lab');
		} else {
			navigate('/register/doctor');
		}
	};

	const signinUser = async (values) => {
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

	return (
		<div className='w-full flex h-screen'>
			<div className='w-2/5 flex items-center justify-center overflow-y-scroll'>
				<div className='flex flex-col items-center m-auto '>
					<div className='w-1/2 p-10'>
						<img src={Logo} alt="Main Logo" className=''/>
					</div>
					<div className="flex flex-col w-1/2 px-10 items-start ">
						<Form
							name="login"
							className="login-form w-full space-y-10"
							initialValues={{
								remember: true,
								email: roleValue.state?.role === 'lab' ? 'lab1@example.com' : 'dkhno389@gmail.com',
								password: 'Test@123'
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
										type: 'email',
										message: 'Please input valid Email Address!',
									},
								]}
								className='w-full'
							>
								<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" className='w-full text-lg' />
							</Form.Item>

							<div className=' w-full'>
								<Form.Item
									name="password"
									rules={[
										{
											required: true,
											message: 'Please input your Password!',
										},
									]}
									className='m-0 w-full'
								>
									<Input.Password
										prefix={<LockOutlined className="site-form-item-icon" />}
										type="password"
										placeholder="Password"
										className='w-full text-lg'
									/>
								</Form.Item>
								<Form.Item className='flex justify-end w-full mb-0'>
									<button className="login-form-forgot text-blue-600 underline ">
									Forgot password
									</button>
								</Form.Item>
							</div>

							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<Form.Item className=''>
								<div className='flex flex-col space-y-3'>
									<Button type="primary" loading={loading} htmlType="submit" className="docButton"> Log in </Button>
									<div className='flex w-full'>
										<hr className='w-1/2 bg-gray-200 border-0 dark:bg-gray-700' />
										<span className='font-semibold'> OR </span>
										<hr className='w-1/2 bg-gray-200 border-0 dark:bg-gray-700' />
									</div>
									<Button className='docButton' onClick={navigateSignup}> Sign up </Button>
								</div>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
			<div className='w-3/5 flex items-center justify-center bg-[#CCD6E5]'>
				<div>
					<img src={LabLogo}
						alt='Background Logo'
						className='back-image object-cover h-full' />
				</div>
			</div>
		</div>
	);
};
