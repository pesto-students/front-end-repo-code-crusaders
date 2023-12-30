/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	Input, Button, Form, message
} from 'antd';
import { Toaster } from 'react-hot-toast';
import { errorToast, successToast } from '../../utils';
import SecondaryLogo from '../../assets/logo/bg_logo.png';
import Logo from '../../assets/logo/nav_logo_black.png';

const LabRegister = ({ role }) => {
	// const dispatch = useDispatch();
	const navigate = useNavigate();

	const { loading, error, success } = useSelector((state) => state.auth);
	const [form] = Form.useForm();

	const validatePassword = (_, value) => {
		if (value.length < 8) {
			return Promise.reject(new Error('Password must be at least 8 characters'));
		}
		if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
			return Promise.reject(new Error('Password must contain at least 1 letter and 1 number'));
		}
		return Promise.resolve();
	};
	const onFinish = (values) => {
		console.log('form ', values);
		const params = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			password: values
		};

		// return false;
	};

	const onFinishFailed = (errorInfo) => {
		message.error(`Form validation error!${errorInfo}`);
		console.log('Failed:', errorInfo);

		return false;
	};

	return (
		<div className='w-full flex h-screen'>
			<div className='w-2/5 flex items-center justify-center overflow-hidden bg-[#CCD6E5]'>
				<div className=''>
					<img
						src={SecondaryLogo}
						alt='Background Logo'
						className='back-image object-cover h-full'
					/>
				</div>
			</div>
			<div className='w-3/5 flex items-center justify-center overflow-y-scroll'>
				<div className='flex flex-col m-auto w-1/2'>
					<div className='p-10'>
						<img src={Logo} alt='Main Logo' className='' />
					</div>
					<div className='flex flex-col p-10 p-x-5 items-start gap-10'>
						<Form
							form={form}
							name='labRegister'
							// layout='horizontal'
							// labelCol={{ span: 6 }}
							// wrapperCol={{ span: 16 }}
							initialValues={{
								firstName: 'krushit',
								lastName: 'dudhat',
								email: 'k@gmail.com',
								password: '1234dfewf',
								confirm: '12343e2322',
								address1: '23 A, john',
								address2: 'nava faliya',
								labName: 'new Tech Lab',
								state: 'gujarat',
								city: 'surat',
								country: 'india',
								pincode: '234598',
								regID: '2335432523'
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							className='w-full'
						>
							<div className='flex justify-between'>
								<Form.Item
									name='firstName'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please input your First Name!',
										},
									]}
								>
									<Input placeholder='First Name' />
								</Form.Item>

								<Form.Item
									name='lastName'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please input your LastName!',
										},
									]}
								>
									<Input placeholder='Last Name' />
								</Form.Item>
							</div>

							<Form.Item
								name='email'
								className='mx-1'
								rules={[
									{
										type: 'email',
										message: 'Please Enter valid Email Address',
									},
									{
										required: true,
										message: 'Please enter your Email Address!',
									},
								]}
							>
								<Input placeholder='Email Address' />
							</Form.Item>

							<div className='flex justify-between'>
								<Form.Item
									name='password'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please enter your Password!',
										},
										{
											validator: validatePassword,
										}
									]}
									hasFeedback
								>
									<Input.Password placeholder='Password' />
								</Form.Item>

								<Form.Item
									name='confirm'
									className='w-1/2 mx-1'
									dependencies={ ['password'] }
									hasFeedback
									rules={[
										{
											required: true,
											message: 'Please confirm your password!',
										},
										({ getFieldValue }) => ({
											validator(_, value) {
												if (!value || getFieldValue('password') === value) {
													return Promise.resolve();
												}
												return Promise.reject(new Error('The new password that you entered do not match!'));
											},
										}),
									]}
								>
									<Input.Password placeholder='Confirm Password' />
								</Form.Item>
							</div>

							<div className='flex justify-between'>
								<Form.Item
									name='regID'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please input your Lab Registration ID!',
										},
									]}
								>
									<Input placeholder='Lab Registration ID' />
								</Form.Item>
								<Form.Item
									name='labName'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please input your Lab Name!',
										},
									]}
								>
									<Input placeholder='Lab Name' />
								</Form.Item>
							</div>

							<Form.Item
								name='address1'
								className=' mx-1'
								rules={[
									{
										required: true,
										message: 'Please enter your address!',
									},
								]}
							>
								<Input placeholder='House No. / street name / block' />
							</Form.Item>
							<Form.Item
								name='address2'
								className=' mx-1'
								rules={[
									{
										required: true,
										message: 'Please enter your address!',
									},
								]}
							>
								<Input placeholder='Area, landmark' />
							</Form.Item>

							<div className='flex justify-between'>
								<Form.Item
									name='city'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please enter your City!',
										},
									]}
								>
									<Input placeholder='City' />
								</Form.Item>

								<Form.Item
									name='state'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please enter your State!',
										},
									]}
								>
									<Input placeholder='State' />
								</Form.Item>
							</div>

							<div className='flex justify-between'>
								<Form.Item
									name='pincode'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please enter your Pincode',
										},
									]}
								>
									<Input placeholder='Pincode' />
								</Form.Item>

								<Form.Item
									name='country'
									className='w-1/2 mx-1'
									rules={[
										{
											required: true,
											message: 'Please enter your country!',
										},
									]}
								>
									<Input placeholder='Country' />
								</Form.Item>
							</div>

							<Form.Item className='w-full'>
								<div className='flex flex-col space-y-3 w-full items-center'>
									<Button
										type='primary'
										htmlType='submit'
										className='docButton w-1/2'
										loading={loading}
									>
                    Sign up
									</Button>
									<div className='flex w-full'>
										<hr className='w-1/2 bg-gray-200 border-0 dark:bg-gray-700' />
										<span className='font-semibold'> OR </span>
										<hr className='w-1/2 bg-gray-200 border-0 dark:bg-gray-700' />
									</div>
									<Button className='docButton w-1/2' onClick={() => navigate('/login')}>
                    Log in
									</Button>
								</div>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export { LabRegister };
