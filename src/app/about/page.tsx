import Image from "next/image";

const AboutPage = () => {
	return (
		<div>
			<div className="relative w-20 h-20">
				<Image src={"/about.png"} alt="about-us" fill />
			</div>
		</div>
	);
};

export default AboutPage;
