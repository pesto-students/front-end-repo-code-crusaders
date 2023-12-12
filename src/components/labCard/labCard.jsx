import { Card } from 'antd';

const LabCard = () => {
	return (
		<>
			<Card title='Card title' bordered={false} style={{ width: 300 }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		</>
	);
};

export { LabCard };
