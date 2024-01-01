import { NavLink } from 'react-router-dom';
import { Navbar } from '../../components/navbar';
// import Hero from '../../assets/doctor/hero.jpg';
import { LabCard } from '../../components/labCard';
import { ServiceCard } from '../../components/serviceCard';
import { FooterComp } from '../landing/footer';

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
];

const services = [
	{ name: 'Golden Cover', },
	{ name: 'Golden Cover', },
	{ name: 'Golden Cover', },
	{ name: 'Golden Cover', },
];

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className=''>
				<div className='bg-[url("/src/assets/doctor/hero_bg.png")] bg-cover h-96 content-center flex items-center ps-10'>
					<div className='container m-auto'>
						<div className='w-1/5 p-2 flex flex-col h-fit space-y-4 m-10'>
							<h1 className='text-[#1A2F4E] font-[Inria_Serif]'> Labs </h1>
							<p className='text-xl font-semibold'> Connect with Excellent Labs in your City and get Best Products hassle free </p>
							<button className='docButton w-1/2'> Find Labs </button>
						</div>
					</div>
				</div>
			</div>
			<div className='my-5 mb-10'>
				<div className='container mx-auto'>
					<div className='flex justify-evenly'>
						{labs && labs.map((lab, index) => <LabCard key={index} lab={lab} className='m-5'/>)}
					</div>
					<div className='flex justify-end mb-5'>
						<NavLink to={'/labs'}>
							{'See More >>>'}
						</NavLink>
					</div>
				</div>
				<div className='container mx-auto my-5'>
					<div className='flex justify-start'>
						<h3> Top Services </h3>
					</div>
					<div>
						<div className='flex justify-evenly'>
							{services && services.map((service, index) => <ServiceCard key={index} service={service} className='m-5' />)}
						</div>
					</div>
				</div>
			</div>
			<FooterComp />
		</div>);
};
export { Home };
