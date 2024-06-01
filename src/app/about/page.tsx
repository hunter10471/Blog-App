import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="flex items-center justify-between gap-10">
			<div className="flex flex-col flex-1 gap-8 ">
				<h2 className="text-button font-black text-2xl">Our Story</h2>
				<h1 className="flex flex-col font-heading font-bold text-[36px]">
					{" "}
					<span className="whitespace-nowrap">
						Craft. Connect. Captivate.
					</span>{" "}
					<span> Your Writing Journey Starts Here.</span>
				</h1>
				<p>
					We believe in the power of stories. Here at The Postbox, we're
					passionate about empowering writers to share their voices with the
					world. We built a platform that makes blogging effortless and
					engaging, so you can focus on what matters most: crafting killer
					content. Join our vibrant community of storytellers and let your words
					take flight.
				</p>
				<div className="flex justify-between gap-5 max-w-[500px]">
					<div>
						<h3 className="text-button font-black text-2xl">5K+</h3>
						<span className="text-sm font-thin">Users Joined </span>
					</div>
					<div>
						<h3 className="text-button font-black text-2xl">10K+</h3>
						<span className="text-sm font-thin">Posts Submitted</span>
					</div>
					<div>
						<h3 className="text-button font-black text-2xl">2K+</h3>
						<span className="text-sm font-thin">Positive Reviews</span>
					</div>
				</div>
			</div>
			<div className="flex-1">
				<Image
					className="rounded-tr-[60%] rounded-br-[40%] rounded-bl-[40%] rounded-tl-[20%]"
					src={"/about.png"}
					alt="about us"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default AboutPage;
