import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [isHome, setIsHome] = useState<boolean>(true);
	const router = useRouter();

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 700) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		if (router.pathname === "/") {
			setIsHome(true);
			window.addEventListener("scroll", handleScroll, { capture: false, passive: true });
		} else {
			setIsHome(false);
		}
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [router.pathname]);

	return (
		<div
			className={`py-2 mx-auto w-full text-center flex justify-around sticky top-0 ${
				isHome ? (scrolled ? " bg-gray-500 text-black" : " bg-transparent text-white") : " bg-gray-300 "
			} transition-all duration-500 z-10 `}>
			<Link href='/'>ObbySoft home page.</Link>
			<Link href='/about'>about</Link>
			<Link href='/pricing'>pricing</Link>
		</div>
	);
};

export default Navbar;
