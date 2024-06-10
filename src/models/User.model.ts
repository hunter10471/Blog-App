import { IUser } from "@/interfaces/User.interface";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 60,
		},
		password: {
			type: String,
			required: false,
			min: 6,
		},
		avatar: {
			type: String,
			required: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const User =
	mongoose.models.User || mongoose.model<IUser>("User", userSchema);
