import React from 'react';
// import {
// 	EditOutlined,
// 	EllipsisOutlined,
// 	SettingOutlined,
// } from '@ant-design/icons';
import { useNavigate, Outlet } from 'react-router';
import { LocationOn } from '@mui/icons-material';
import { Card, Rate } from 'antd';

const { Meta } = Card;

const LabCard = ({ lab, className, index }) => {
	const navigate = useNavigate();
	console.log('Lab Card prop', index);
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
				// <SettingOutlined key='setting' />,
				// <EditOutlined key='edit' />,
				<div key='view' className='text-left mx-5'>
					<button className=' text-black bg-white docButton'
						onClick={() => navigate(`/labs/${lab._id}`)}
					>
					View Lab
					</button> </div>,
				// <EllipsisOutlined key='ellipsis' />,
			]}
		>
			<Meta
				// avatar={
				// 	<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
				// }
				title={lab.lab?.name}
			/>
			<div className='flex my-2 text-lg'>
				<LocationOn />
				{/* <p> {lab.distance} KM, </p> */}
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
