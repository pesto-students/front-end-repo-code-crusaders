import { Loading3QuartersOutlined } from '@ant-design/icons';
import BgLogo from '../../assets/logo/bg_logo.png';

const LoadingPage = () => {
	return (
		<div className='bg-[#CCD6E5] flex flex-col justify-center items-center h-screen'>
			<div>
				<img src={BgLogo} alt="Dentibridge" />
			</div>
			<div className='text-xl'>
				<Loading3QuartersOutlined spin/> Loading...
			</div>
		</div>
	);
};

export { LoadingPage };
