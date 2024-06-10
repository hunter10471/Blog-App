import { getPosts } from "@/api/post/post.api";
import { deletePost } from "@/lib/action";
import Image from "next/image";
import React from "react";

const AdminPosts = async () => {
	const posts = await getPosts();
	return (
		<div>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div key={post.id}>
					<div>
						<Image src={post.img} alt={post.title} width={50} height={50} />
						<span>{post.title}</span>
					</div>
					<form action={deletePost}>
						<input type="hidden" name="id" value={post._id.toString()} />
						<button>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};

export default AdminPosts;
