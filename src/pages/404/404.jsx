import { useNavigate } from 'react-router';
import BgLogo from '../../assets/logo/bg_logo.png';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className='bg-[#CCD6E5] flex flex-col justify-center items-center h-screen'>
			<div>
				<img src={BgLogo} alt='Dentibridge' />
			</div>
			<div className='text-lg space-y-5 text-center'>
				<h1>:( 404: Page Not Found. </h1>
				<h2> Sorry, the page you visited does not exist. </h2>
				<button className='docButton' onClick={() => navigate('/home')}>
					Back Home
				</button>
			</div>
		</div>
	);
};

export { NotFound };
