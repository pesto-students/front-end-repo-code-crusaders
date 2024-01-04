import React from 'react';
import { useNavigate, Outlet } from 'react-router';
import { LocationOn } from '@mui/icons-material';
import { Card, Rate } from 'antd';

const { Meta } = Card;

const LabCard = ({ lab, className }) => {
	const navigate = useNavigate();
	return (
		<Card
			className={`border-2 w-80 p-2 shadow-2xl ${className}`}
			cover={
				<img
					alt={lab.lab?.name}
					src={lab.image}
				/>
			}
			actions={[
				<div key='view' className='text-left mx-5'>
					<button className=' text-black bg-white docButton'
						onClick={() => navigate(`/labs/${lab._id}`)}
					>
					View Lab
					</button> </div>,
			]}
		>
			<Meta
				title={lab.lab?.name}
			/>
			<div className='flex my-2 text-lg'>
				<LocationOn />
        &nbsp;
				<p> {lab.city},</p>
				<p> {lab.address && lab.address[0]?.state}</p>
			</div>
			<div>
				<Rate allowHalf={true} defaultValue={lab.lab?.rating} disabled className=''/>
				<span> {parseFloat(lab.lab?.rating).toFixed(1)} </span>
			</div>
			<Outlet />
		</Card>
	);
};

export { LabCard };
