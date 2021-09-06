import Link from "next/link";
const Navbar = () => {
	return (
		<div className='py-2 mx-auto w-full bg-gray-300 text-center flex justify-around'>
			<Link href='/'>ObbySoft home page.</Link>
			<Link href='/about'>about</Link>
		</div>
	);
};

export default Navbar;
