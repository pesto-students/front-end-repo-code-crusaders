import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/navbar';
import { LabCard } from '../../components/labCard';
// import Hero from '../../assets/doctor/hero.jpg';

const labs = [
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
	{
		name: 'Dentalline Laboratory',
		city: 'surat',
		distance: '1',
		rating: 4.2,
	},
];

const Labs = () => {
	// const dispatch = useDispatch();
	// const {
	// 	labs
	// } = useSelector((state) => state.product);

	return (
		<div>
			<Navbar />
			<div className=''></div>
			<div className='container m-auto'>
				<div className='flex px-10 flex-wrap'>
					{labs && labs.map((lab, index) => <LabCard key={index} lab={lab} index={index} className='m-5'/>)}
				</div>
			</div>
		</div>
	);
};
export { Labs };
