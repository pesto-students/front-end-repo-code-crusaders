import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';
import Logo from '../../assets/logo/nav_logo_white.png';

const Navbar = ({ visible = true }) => {
	const dispatch = useDispatch();
	const { user, accessToken, error } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const [current, setCurrent] = useState('null');

	const onClick = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};

	console.log(user);

	useEffect(() => {
		if (accessToken) {
			dispatch(verifyUserDetails());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (error && !user) {
			navigate('/login');
		}
	}, [error, user, navigate]);

	const logoutHandler = () => {
		dispatch(logoutUser());
	};

	if (!visible) {
		return <></>;
	}

	const items = [
		{
			label: (
				<UserOutlined className='text-white' style={{ fontSize: '28px' }}/>
			),
			key: 'SubMenu',
			// icon: <UserOutlined />,
			children: [
				{
					type: 'group',
					label: 'Personal details',
					children: [
						{
							label: 'Profile',
							key: 'profile:1',
						},
						{
							label: 'Addresses',
							key: 'profile:2',
						},
					],
				},
				{
					type: 'group',
					label: '',
					children: [
						{
							label: 'policies',
							key: 'policy:3',
						},
						{
							label: (
								<NavLink onClick={logoutHandler}>
                    Logout
								</NavLink>
							),
							key: 'logout:4',
						},
					],
				},
			],
		}
	];

	return (
		<header className='bg-[#1A2F4E]'>
			<div className='container h-16  m-auto flex flex-row justify-between'>
				<div className='flex flex-row justify-between'>

					<div className='h-auto w-52 align-middle m-auto'>
						<img src={Logo} alt="Dentibridge" />
					</div>
					<div className='m-auto mx-10 '>
						<NavLink to='/home' className='mx-2 text-white no-underline text-2xl font-["Inria Sans"]'> Home </NavLink>
						<NavLink to='/labs' className='mx-2 text-white no-underline text-2xl font-["Inria Sans"]'> Labs </NavLink>
					</div>
				</div>
				<div className='h-full flex flex-row justify-between'>
					<Menu
						onClick={onClick}
						selectedKeys={[current]}
						mode="horizontal"
						items={items}
						className='m-auto align-middle bg-[#1A2F4E] '/>;
				</div>
			</div>
		</header>
	);
};

export { Navbar };
