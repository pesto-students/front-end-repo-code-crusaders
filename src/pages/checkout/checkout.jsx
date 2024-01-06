import { useLocation, useNavigate } from 'react-router';
import { Empty } from 'antd';
import { Navbar } from '../../components/navbar';

const Checkout = () => {
	const navigate = useNavigate();
	const orderState = useLocation();
	const product = orderState?.state?.product;

	return (
		<div>
			<Navbar />
			<div className='bg-[#CCD6E5] flex flex-col justify-center items-center h-screen space-y-2'>
				<div className='w-1/2'>
					{product
						? (<div>
							<h3> Congratulations! Your Order of {product.name} has been placed. you can track your order at <a href="/orders"> Orders </a></h3>
						</div>) : (
							<Empty
								image={Empty.PRESENTED_IMAGE_SIMPLE}
								description='Nothing to see here'
							/>)}
				</div>
				<div className='text-lg space-x-5 text-center flex'>
					<button className='docButton' onClick={() => navigate('/labs')}>
          Shop More
					</button>
					<button className='docButton' onClick={() => navigate('/home')}>
          Home
					</button>
				</div>
			</div>
		</div>
	);
};

export { Checkout };
