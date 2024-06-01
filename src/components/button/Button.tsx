interface ButtonProps {
	onClick?: () => void;
	isPrimary?: boolean;
	isWhite?: boolean;
	text: string;
}

const Button = ({ onClick, isPrimary, isWhite, text }: ButtonProps) => {
	return (
		<button
			className={`font-heading font-medium px-6 py-2 border-2 transition-all ${
				isPrimary
					? "bg-button border-button hover:text-button hover:bg-transparent"
					: isWhite
					? "bg-white text-primary hover:bg-transparent hover:text-white hover:border-white"
					: " border-white hover:bg-white hover:text-primary"
			}
		
			  `}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
