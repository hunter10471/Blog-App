"use client";
import { ILink } from "@/interfaces/Link.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "../navLink/NavLink";
import { IoMdMenu } from "react-icons/io";
import { handleLogout } from "@/lib/action";
import { Session } from "next-auth";

const links: ILink[] = [
	{ title: "About", path: "/about" },
	{ title: "Contact", path: "/contact" },
	{ title: "Blog", path: "/blog" },
];

interface LinksProps {
	session: Session | null;
}

const Links = ({ session }: LinksProps) => {
	const [open, setOpen] = useState(false);
	const path = usePathname();
	const isAdmin = session?.user ? session.user.isAdmin : false;
	return (
		<div className="flex items-center gap-6 font-heading">
			<div className="hidden md:flex">
				{links.map((link) => (
					<NavLink key={link.title} data={link} path={path} />
				))}
				{session?.user ? (
					<>
						{isAdmin && (
							<NavLink
								path={"/admin"}
								data={{ path: "/admin", title: "Admin" }}
							/>
						)}
						<form action={handleLogout}>
							<button className="px-6 py-2 font-medium mx-4  bg-white text-primary">
								Logout
							</button>
						</form>
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
							<form action={handleLogout}>
								<button className="px-6 py-2 font-medium rounded-md mx-4 bg-white text-primary">
									Logout
								</button>
							</form>
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
