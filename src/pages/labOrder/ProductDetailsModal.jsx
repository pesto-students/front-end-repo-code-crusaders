import React from 'react';
import { Modal } from 'antd';

export const ProductDetailsModal = ({ order, open, setOpen }) => {
	if (!order) {
		return <></>;
	}

	return (
		<>
			<Modal
				title={`Order ID: ${order._id}`}
				open={open}
				onOk={() => setOpen(false)}
				cancelButtonProps={{ style: { display: 'none' } }}
				okButtonProps={{ style: { backgroundColor: '#1A2F4E' } }}
				width={800}
			>
				{/* Render order details inside the modal */}
				<div className='flex '>
					{/* Product Details Section */}
					<div className='m-2 flex flex-col space-y-2 w-1/2'>
						<h2>Product Details</h2>
						<p>Product Name: {order.product.name}</p>
						<p>Metal: {order.product.details.metal}</p>
						<p>Features: {order.product.details.features}</p>
						<p>
              Specification:
							{order.product.details.specifications}
						</p>
						<p>
              Material Composition:
							{order.product.details.materialComposition}
						</p>
						{/* Add more product details as needed */}
					</div>

					{/* Order Details Section */}
					<div className='flex flex-col space-y-2 w-1/2'>
						<h2>Order Details</h2>
						<p>Order Date: {order.orderDate}</p>
						<p>Status: {order.status}</p>
						<p>Notes: {order.notes}</p>
						{/* Add more order details as needed */}
					</div>
				</div>
			</Modal>
		</>
	);
};
