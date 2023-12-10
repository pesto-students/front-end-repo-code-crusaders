import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';
import Logo from '../../assets/logo/nav_logo_white.png';

const Navbar = ({ visible }) => {
	const dispatch = useDispatch();
	const { user, accessToken } = useSelector((state) => state.auth);

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

	const logoutHandler = () => {
		dispatch(logoutUser());
	};

	if (!visible) {
		return <></>;
	}

	const items = [
		{
			label: 'Navigation Three - Submenu',
			key: 'SubMenu',
			icon: <UserOutlined />,
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
							key: 'policy:4',
						},
					],
				},
			],
		}
	];

	return (
		<header className='bg-[#1A2F4E]'>
			{/* <div>
				<span>
					{user ? `Logged in as ${user.email}` : "You're not logged in"}
				</span>
				<div>
					{user ? (
						<NavLink onClick={logoutHandler}>
              Logout
						</NavLink>
					) : (
						<NavLink to='/login'>
              Login
						</NavLink>
					)}
				</div>
			</div>
			<nav>
				<ul>
					<li><NavLink to='/'>Home</NavLink></li>
				</ul>
			</nav> */}
			<div className='container'>
				<div className='flex'>

					<div>
						<img src={Logo} alt="Dentibridge" />
					</div>
					<div>
						<NavLink to='/home' />
						<NavLink to='/labs' />
					</div>
				</div>
				<div>
					return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
				</div>
			</div>
		</header>
	);
};

export { Navbar };
