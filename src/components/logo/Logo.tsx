import Link from "next/link";

interface LogoProps {
	isLarge?: boolean;
	isColumn?: boolean;
}

const Logo = ({ isLarge, isColumn }: LogoProps) => {
	return (
		<Link
			href={"/"}
			className={`flex leading-[60px] font-heading gap-1 ${
				isLarge ? "text-[64px]" : "text-[32px]"
			} ${isColumn ? "flex-col" : ""}  font-heading font-thin`}
		>
			The{" "}
			<b
				className={`${
					isLarge && "font-extrabold pb-6"
				} border-b-4 border-b-button font-bold`}
			>
				PostBox
			</b>
		</Link>
	);
};

export default Logo;
