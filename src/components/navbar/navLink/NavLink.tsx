import { Link as LinkInterface } from "@/interfaces/Link.interface";
import Link from "next/link";

interface LinkProps {
	data: LinkInterface;
	path: string;
}

const NavLink = ({ data, path }: LinkProps) => {
	return (
		<Link
			className={`px-6 py-2 font-medium hover:text-gray-400 transition-all duration-200  ${
				data.selected || path === data.path
					? ` bg-white text-primary ${data.selected ? "" : "rounded-full"}  `
					: ""
			}  `}
			key={data.title}
			href={data.path || "/"}
		>
			{data.title}
		</Link>
	);
};

export default NavLink;
