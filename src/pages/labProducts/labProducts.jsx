import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Tabs } from 'antd';
import { Navbar } from '../../components/navbar';
import { ProductsTable } from './ProductsTable';
import { getProductCount } from '../../store/products/productActions';

const LabProducts = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading, tabsCount } = useSelector((state) => state.product);

	const tabs = ['All', 'Active', 'Inactive'];

	const getCount = React.useCallback(() => {
		dispatch(getProductCount());
	}, [dispatch]);

	React.useEffect(() => {
		getCount();
	}, [getCount]);

	React.useEffect(() => {
		console.log(tabsCount);
	}, [tabsCount]);

	// const onTabChange = () => {
	// 	console.log('tabvalue changed');
	// };

	return (
		<div className='w-full'>
			<Navbar />
			<div className='w-full bg-[#e3e8ef]'>
				<div className='container m-auto py-3 flex justify-between'>
					<h2> Products </h2>
					<Button className='docButton' onClick={() => { navigate('/product/create'); }}>
            New Product
					</Button>
				</div>
			</div>

			<div className='container m-auto py-2'>
				<div>
					<Tabs
						// onChange={onTabChange}
						items = { tabs.map((tab, i) => {
							return {
								label: `${tab} (${tabsCount[tab] || 0})`,
								key: i,
								children: <ProductsTable tab={tab} id={i}/>,
							};
						})}
					/>
				</div>
			</div>
		</div>
	);
};

export { LabProducts };
