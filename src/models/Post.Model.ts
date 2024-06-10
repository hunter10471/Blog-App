import { IPost } from "@/interfaces/Post.interface";
import mongoose, { Schema } from "mongoose";

const postSchema = new Schema<IPost>(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: false,
		},
		userId: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

export const Post =
	mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
