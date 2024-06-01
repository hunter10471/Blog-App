import Button from "@/components/button/Button";
import Logo from "@/components/logo/Logo";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<Logo isColumn isLarge />
				<h2 className="font-thin my-5 max-w-[500px] text-justify">
					Join a vibrant community of passionate writers and readers on The
					Postbox. Connect with like-minded individuals, share your stories, and
					engage in meaningful conversations.
				</h2>
				<div className="flex gap-5 my-6">
					<Button isPrimary text="Learn More" />
					<Button isWhite text="Contact us" />
				</div>
				<Image
					className="grayscale-[1]"
					src={"/brands.png"}
					alt="brands"
					width={600}
					height={50}
				/>
			</div>
			<div>
				<Image
					unoptimized
					src={"/hero.gif"}
					alt="home-gif"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}
