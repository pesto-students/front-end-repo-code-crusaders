import React, { useRef } from 'react';
import { Layout, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Navbar } from './navbar';
import { Doctor } from './doctor';
import { Lab } from './lab';
import { States } from './states';
import { Testimony } from './testimony';
import { ContectUs } from './contactUs';
import { FooterComp } from './footer';
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

const Landing = () => {
	const navigate = useNavigate();
	const doctorRef = useRef();
	const labRef = useRef();
	const aboutRef = useRef();
	const contactRef = useRef();

	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

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
						<div className='mx-3'>
							<button
								className='landing-button h-10 p-auto px-5 text-black font-bold text-xl text-center align-middle
							rounded-full border-black-2'
								onClick={() => navigate('/login', { state: { role: 'doctor' } })}
							>
                Doctor Login
							</button>
						</div>
						<div className='mx-3'>
							<button
								className='landing-button h-10 p-auto px-5 text-black font-bold text-xl text-center align-middle
							rounded-full border-black-2'
								onClick={() => navigate('/login', { state: { role: 'lab' } })}
							>
                Lab Login
							</button>
						</div>
						{/* <Button className='mx-3' text='Doctor Login' /> */}
						{/* <Button className='mx-3' text='Lab Login' /> */}
					</div>
				</Header>
				<Content style={contentStyle}>
					<Navbar
						category={{
							doctorRef, labRef, aboutRef, contactRef
						}}
						scroll={scrollToSection}
					/>
					<Doctor doctorRef={doctorRef} />
					<div className='m-20'></div>
					<Lab labRef={labRef} />
					<div className='m-32'></div>

					{/* about us section --- */}
					<States aboutRef={aboutRef} />
					<Testimony />
					<ContectUs contactRef={contactRef} />
				</Content>
				<Footer className='bg-[#E5E5EF] p-0'>
					<FooterComp />
				</Footer>
			</Layout>
		</Space>
	);
};
export { Landing };
