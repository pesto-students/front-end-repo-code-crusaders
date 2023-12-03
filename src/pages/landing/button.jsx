import React from 'react';
import './style.css';

export const Button = ({ text, className }) => {
	return (
		<div className={className}>
			<button
				className='landing-button h-10 p-auto px-5 text-black font-bold text-xl text-center align-middle
		rounded-full border-black-2'
			>
				{text}
			</button>
		</div>
	);
};
