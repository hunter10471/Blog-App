import Image from "next/image";
import Link from "next/link";
import Avatar from "../avatar/Avatar";

interface PostCardProps {
	img: string;
	title: string;
	desc: string;
	userId: string;
	createdAt: string;
	slug: string;
}

const PostCard = ({
	img,
	title,
	desc,
	userId,
	slug,
	createdAt,
}: PostCardProps) => {
	return (
		<Link
			href={`/blog/${slug}`}
			className="flex flex-col gap-5 w-[300px] mb-5 cursor-pointer rounded-lg transition-all duration-200 ease-in hover:bg-primaryLight shadow-md"
		>
			<div className="flex items-center w-full h-[280px] relative">
				<Image
					className="rounded-sm rounded-b-none object-cover"
					src={img}
					alt="post"
					fill
				/>
			</div>
			<div className="px-4 pb-6">
				<h1 className="font-heading font-bold text-[24px]">{title}</h1>

				<p className="text-gray-400 mb-2 text-justify line-clamp-3">{desc}</p>
				<div className="flex justify-between items-center mt-5">
					<Avatar userId={userId} createdAt={createdAt} />
				</div>
			</div>
		</Link>
	);
};

export default PostCard;
