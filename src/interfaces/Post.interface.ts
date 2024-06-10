import { Document } from "mongoose";

export interface IPost extends Document {
	_id: string;
	title: string;
	img: string;
	userId: string;
	slug: string;
	description: string;
	createdAt: Date;
}
