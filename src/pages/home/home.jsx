import { Navbar } from '../../components/navbar';
// import Hero from '../../assets/doctor/hero.jpg';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className=''>
				<div className='bg-[url("/src/assets/doctor/hero_bg.png")] bg-cover h-96 content-center flex items-center ps-10'>
					<div className='w-1/5 p-10 flex flex-col h-fit space-y-4 m-10'>
						<h1 className='text-[#1A2F4E] font-[Inria_Serif]'> Labs </h1>
						<p className='text-xl font-semibold'> Connect with Excellent Labs in your City and get Best Products hassle free </p>
						<button className='docButton w-1/2'> Find Labs </button>
					</div>
				</div>
			</div>
			<h1> Hello Doctor !</h1>
		</div>);
};
export { Home };
