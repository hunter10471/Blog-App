import Button from "@/components/button/Button";
import Logo from "@/components/logo/Logo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "ThePostBox - Your Source for the Latest Blogs and Articles",
	description:
		"Discover insightful blogs and articles on ThePostBox. Stay updated with the latest trends, tips, and stories from various fields.",
};

export default function Home() {
	return (
		<div className="flex items-center justify-center md:justify-between">
			<div className="flex flex-col items-center text-center md:text-left md:block">
				<Logo isColumn isLarge />
				<h2 className="font-thin my-5 max-w-[500px] md:text-justify">
					Join a vibrant community of passionate writers and readers on The
					Postbox. Connect with like-minded individuals, share your stories, and
					engage in meaningful conversations.
				</h2>
				<div className="flex gap-5 my-6">
					<Link href={"/blog"}>
						<Button isPrimary text="Our Blog" />
					</Link>
					<Link href={"/contact"}>
						<Button isWhite text="Contact us" />
					</Link>
				</div>
				<Image
					className="grayscale-[1] mt-5 md:mt-0"
					src={"/brands.png"}
					alt="brands"
					width={500}
					height={50}
				/>
			</div>
			<div className="hidden md:block">
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
