import { getPosts } from "@/api/post/post.api";
import PostCard from "@/components/postCard/PostCard";
import { Post } from "@/interfaces/Post.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog - ThePostBox",
	description:
		"Explore a wide range of blogs on ThePostBox. Read about the latest trends, tips, and stories across different categories.",
};

const BlogPage = async () => {
	const posts: Post[] = await getPosts();
	return (
		<div className="flex gap-12 items-center flex-wrap">
			{posts.map((post) => (
				<PostCard
					title={post.title}
					desc={post.desc}
					img={post.img}
					userId={post.userId}
					slug={post.slug}
					createdAt={post.createdAt.toString().slice(4, 16)}
					key={post.id}
				/>
			))}
		</div>
	);
};

export default BlogPage;
