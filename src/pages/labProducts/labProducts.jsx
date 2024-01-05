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
	const { tabsCount } = useSelector((state) => state.product);
	const [tab, setTab] = React.useState(0);

	const tabs = ['All', 'Active', 'Inactive'];

	const getCount = React.useCallback(() => {
		dispatch(getProductCount());
	}, [dispatch]);

	React.useEffect(() => {
		getCount();
	}, [getCount]);

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
						onChange={setTab}
						items = { tabs.map((tab, i) => {
							return {
								label: `${tab} (${tabsCount[tab] || 0})`,
								key: i,
								// children: <ProductsTable tab={tab} id={i}/>,
							};
						})}
					/>
					<ProductsTable tab={tabs[tab]} id={tab}/>
				</div>
			</div>
		</div>
	);
};

export { LabProducts };
