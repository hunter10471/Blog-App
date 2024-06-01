"use client";
import { Link as LinkInterface } from "@/interfaces/Link.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "../navLink/NavLink";
import { IoMdMenu } from "react-icons/io";

const links: LinkInterface[] = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/about" },
	{ title: "Contact", path: "/contact" },
	{ title: "Blog", path: "/blog" },
];
const Links = () => {
	const [open, setOpen] = useState(false);
	const session = true;
	const isAdmin = true;
	const path = usePathname();

	return (
		<div className="flex items-center gap-6 font-heading">
			<div className="hidden md:block">
				{links.map((link) => (
					<NavLink key={link.title} data={link} path={path} />
				))}
				{session ? (
					<>
						{isAdmin && (
							<Link href={"/admin"} className="px-6 py-2 font-medium ">
								Admin
							</Link>
						)}
						<button className="px-6 py-2 font-medium  bg-white text-primary">
							Logout
						</button>
					</>
				) : (
					<button className="px-6 py-2 font-medium ">Login</button>
				)}
			</div>
			<div className="md:hidden ">
				<button onClick={() => setOpen((prev) => !prev)}>
					<IoMdMenu size={25} />
				</button>

				<div
					className={`absolute flex flex-col justify-center items-center gap-4  top-[100px] right-0 
						${open ? "translate-x-0" : "translate-x-[100%]"}
						 transition-all ease-in duration-300 w-[50%] h-[calc(100vh-100px)]`}
				>
					{links.map((link) => (
						<NavLink key={link.title} data={link} path={path} />
					))}
					{session ? (
						<>
							{isAdmin && (
								<Link href={"/admin"} className="px-6 py-2 font-medium ">
									Admin
								</Link>
							)}
							<button className="px-6 py-2 font-medium rounded-md bg-white text-primary">
								Logout
							</button>
						</>
					) : (
						<button className="px-6 py-2 font-medium rounded-md">Login</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Links;
