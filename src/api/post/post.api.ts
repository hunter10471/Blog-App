import { IPost } from "@/interfaces/Post.interface";
import { dbConnection } from "@/lib/utils";
import { Post } from "@/models/Post.Model";

export const getPosts = async () => {
	try {
		await dbConnection();
		const posts = await Post.find().lean<IPost[]>();
		return posts;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch posts.");
	}
};

export const getPost = async (slug?: string) => {
	try {
		if (!slug) return null;
		await dbConnection();
		const post: IPost | null = await Post.findOne({ slug }).lean<IPost>();
		return post;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching post.");
	}
};
