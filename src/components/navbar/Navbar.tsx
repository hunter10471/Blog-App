import { auth } from "@/lib/auth";
import Logo from "../logo/Logo";
import Links from "./links/Links";

const Navbar = async () => {
	const session = await auth();
	return (
		<nav className="h-[120px] flex items-center justify-between">
			<Logo />
			<Links session={session} />
		</nav>
	);
};

export default Navbar;
