/* eslint-disable import/no-unresolved */
import { generateComponents } from '@uploadthing/react';
import { generateReactHelpers } from '@uploadthing/react/hooks';
import { createUploadthing } from 'uploadthing/server';

export const uploadthingURL = `${process.env.REACT_APP_BACKEND_URL}/api/v1/product/image`;

const f = createUploadthing({
	errorFormatter: (err) => {
		// console.log('Error uploading file', err.message);
		// console.log('  - Above error caused by:', err.cause);
		return { message: err.message };
	},
});

export const uploadRouter = {
	productImage: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 4,
		},
	}).onUploadComplete((data) => {
		// eslint-disable-next-line no-console
		console.log('upload completed', data);
	}),
};

export const { UploadButton, UploadDropzone, Uploader } = generateComponents({
	url: uploadthingURL,
});

export const { useUploadThing } = generateReactHelpers({ url: uploadthingURL });
