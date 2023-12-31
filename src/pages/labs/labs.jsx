import React from 'react';
import { Spin, Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/navbar';
import { LabCard } from '../../components/labCard';
import { getLabs } from '../../store/lab/labAction';

const Labs = () => {
	const dispatch = useDispatch();
	const {
		labs, loading, error, pagination
	} = useSelector((state) => state.lab);
	const [page, setPage] = React.useState(1);
	const pageLimit = 20;

	const fetchLabs = React.useCallback(() => {
		dispatch(getLabs({
			page,
			limit: pageLimit,
		}));
	}, [dispatch, page]);

	React.useEffect(() => {
		fetchLabs();
	}, [fetchLabs]);

	if (loading) {
		return (
			<div>
				<Navbar />
				<div className='bg-[#e8eaec] items-center flex justify-center p-20 my-20 align-middle border-2 container m-auto'>
					<Spin size="large">
					</Spin>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<div className=''></div>
			<div className='container m-auto'>
				<div className='flex px-10 flex-wrap'>
					{error && 'No Content...'}
					{labs && labs.map((lab, index) => <LabCard key={index} lab={lab} index={index} className='m-5'/>)}
				</div>
				<Pagination
					defaultCurrent={1}
					total={pagination.totalResult}
					current={page}
					defaultPageSize={pageLimit}
					// responsive={true}
					onChange={(newPage) => setPage(newPage)}
					className='flex justify-center items-center my-5'
				/>
			</div>
		</div>
	);
};
export { Labs };
