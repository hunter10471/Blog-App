import { getPost } from "@/api/post/post.api";
import Avatar from "@/components/avatar/Avatar";
import Image from "next/image";

export async function generateMetadata({ params }: PageProps) {
	const { slug } = params;
	const post = await getPost(slug);

	return {
		title: `${post?.title} - ThePostBox`,
		description: post?.desc,
	};
}

const SinglePostPage = async ({ params }: PageProps) => {
	const post = await getPost(params.slug);
	if (post)
		return (
			<div className="flex gap-10 md:gap-20 flex-col md:flex-row">
				<div className="relative md:flex-1 md:h-[70vh] h-[50vh]">
					<Image
						src={post.img}
						className="object-cover rounded-md"
						alt="blog"
						fill
					/>
				</div>
				<div className="flex-[2] flex flex-col">
					<h1 className="font-heading text-[42px] font-bold">{post.title}</h1>
					<Avatar
						userId={post.userId}
						createdAt={post.createdAt.toString().slice(4, 16)}
						large
					/>
					<p className="text-justify mt-5 text-white/80">{post.desc}</p>
				</div>
			</div>
		);
};

export default SinglePostPage;
