interface LogoProps {
	isLarge?: boolean;
	isColumn?: boolean;
}

const Logo = ({ isLarge, isColumn }: LogoProps) => {
	return (
		<div
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
		</div>
	);
};

export default Logo;
