import React from 'react';
import { Modal, Image } from 'antd';

export const ProductDetailsModal = ({ product, open, setOpen }) => {
	if (!product) {
		return <></>;
	}

	return (
		<>
			<Modal
				title={`Product ID: ${product._id}`}
				open={open}
				onOk={() => setOpen(false)}
				cancelButtonProps={{ style: { display: 'none' } }}
				okButtonProps={{ style: { backgroundColor: '#1A2F4E' } }}
				width={800}
			>
				<div className='flex '>
					<div className='m-2 flex flex-col space-y-2 w-1/2'>
						<h2>Product Details</h2>
						<p>Product Name: {product.name}</p>
						<p>Metal: {product.details.metal}</p>
						<p>Features: {product.details.features}</p>
						<p>
              Specification:
							{product.details.specifications}
						</p>
						<p>
              Material Composition:
							{product.details.materialComposition}
						</p>
					</div>
					<div className='flex flex-col space-y-2 w-1/2'>
						<Image
							src={product.images[0]}
							preview={false}
							rootClassName='w-2/3 m-auto my-3 flex justify-center shadow-md p-1 border-2 border-slate-400 bg-slate-300'
							height={''}
						/>
					</div>
				</div>
			</Modal>
		</>
	);
};
