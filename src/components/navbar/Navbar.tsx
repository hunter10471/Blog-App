import Logo from "../logo/Logo";
import Links from "./links/Links";

const Navbar = () => {
	return (
		<nav className="h-[120px] flex items-center justify-between">
			<Logo />
			<Links />
		</nav>
	);
};

export default Navbar;
