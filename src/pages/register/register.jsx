import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Input, Button, Form, Row, Col
} from 'antd';
import { errorToast, successToast } from '../../utils';
import SecondaryLogo from '../../assets/logo/bg_logo.png';
import Logo from '../../assets/logo/nav_logo_black.png';
import { registerUser } from '../../store/auth/authActions';

export const Register = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.auth);
	const [validationError, setValidationError] = useState('');
	const [form] = Form.useForm();

	// const onFinish = (values) => {
	// 	console.log('Received values of form: ', values);
	// };
	console.log(validationError);
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
			const params = {
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
				country: e.country,
			};
			dispatch(
				registerUser({
					body: params,
					role: 'doctor'
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
							name='doctorRegister'
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
										<Button htmlType="submit" className='docButton' loading={loading}>
              Register
										</Button>
            Or <a href="/login">Login Now!</a>
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
	);
};
