import React from 'react';
import { Layout, Space } from 'antd';
import { Button } from './button';
import { Navbar } from './navbar';
import { Doctor } from './doctor';
import { Lab } from './lab';
import { States } from './states';
import Navlogo from '../../assets/logo/nav_logo_white.png';

const {
	Header, Footer, Content
} = Layout;

const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#1A2F4E',
};
const contentStyle = {
	textAlign: 'center',
	minHeight: '100vh',
	// lineHeight: '',
	color: '#fff',
	backgroundColor: '#E5E5EF',
};
// const siderStyle = {
// 	textAlign: 'center',
// 	lineHeight: '120px',
// 	color: '#fff',
// 	backgroundColor: '#3ba0e9',
// };
const footerStyle = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea',
};
const Landing = () => {
	return (
		<Space
			direction='vertical'
			style={{
				width: '100%',
			}}
			size={[0, 48]}
		>
			<Layout>
				<Header style={headerStyle} className='flex justify-between'>
					<div className='h-auto w-52 align-middle m-auto mx-2'>
						<img src={Navlogo} alt='DentiBridge' />
					</div>
					<div className='flex flex-row'>
						<Button className='mx-3' text='Doctor Login' />
						<Button className='mx-3' text='Lab Login' />
					</div>
				</Header>
				<Content style={contentStyle}>
					<Navbar />
					<Doctor />
					<div className='m-20'></div>
					<Lab />
					<div className='m-32'></div>

					{/* about us section --- */}
					<States />
					<div>
						testimony
					</div>
				</Content>
				<Footer style={footerStyle}>Footer</Footer>
			</Layout>
		</Space>
	);
};
export { Landing };
