import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';
import Logo from '../../assets/logo/nav_logo_white.png';

const Navbar = ({ visible = true }) => {
	const dispatch = useDispatch();
	const {
		user, accessToken, error, loading
	} = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const [current, setCurrent] = useState('null');

	const onClick = (e) => {
		setCurrent(e.key);
	};

	useEffect(() => {
		if (accessToken) {
			dispatch(verifyUserDetails());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (error && !user && !loading) {
			navigate('/login');
		}
	}, [error, user, navigate, loading]);

	const logoutHandler = () => {
		dispatch(logoutUser());
		setTimeout(() => {
			navigate('/login', { state: { role: user.role } });
		}, 3000);
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

	if (user && user.role === 'doctor') {
		items[0].children[0].children.push({
			label: <NavLink to='/orders'>Orders</NavLink>,
			key: 'profile:orders',
		});
	}

	return (
		<header className='bg-[#1A2F4E]'>
			<div className='container h-16  m-auto flex flex-row justify-between'>
				<div className='flex flex-row justify-between'>

					<div className='h-auto w-52 align-middle m-auto'>
						<img src={Logo} alt="Dentibridge" />
					</div>
					<div className='m-auto mx-10 '>
						{ user && user.role === 'doctor'
							&& (<>
								<NavLink to='/home' className='mx-2 text-white no-underline text-2xl font-["Inria Sans"]'> Home </NavLink>
								<NavLink to='/labs' className='mx-2 text-white no-underline text-2xl font-["Inria Sans"]'> Labs </NavLink>
							</>)
						}
						{
							user && user.role === 'lab'
							&& (<>
								<NavLink to='/lab/orders' className='mx-2 text-white no-underline text-2xl font-["Inria Sans"]'> Orders </NavLink>
								<NavLink to='/lab/products' className='mx-2 text-white no-underline text-2xl font-["Inria Sans"]'> Products </NavLink>
							</>)
						}
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
