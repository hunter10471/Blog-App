"use server";
import { Post } from "@/models/Post.Model";
import { signIn, signOut } from "./auth";
import { dbConnection } from "./utils";
import { User } from "@/models/User.model";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const handleGithubLogin = async () => {
	await signIn("github");
};

export const handleLogout = async () => {
	await signOut();
};

export const addPost = async (data: FormData) => {
	const { title, description, img, slug, userId } = Object.fromEntries(data);
	try {
		await dbConnection();
		const newPost = new Post({
			title,
			slug,
			description,
			userId,
			img,
		});
		await newPost.save();
		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		throw new Error("There was an error in uploading new post.");
	}
};

export const deletePost = async (data: FormData) => {
	const { id } = Object.fromEntries(data);
	try {
		console.log(data, id);
		await dbConnection();
		await Post.findByIdAndDelete(id);
		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		throw new Error("There was an error in deleting the post.");
	}
};

export const addUser = async (data: FormData) => {
	const { username, avatar, email, password } = Object.fromEntries(data);
	try {
		await dbConnection();
		const newUser = new User({
			username,
			email,
			avatar,
			password,
		});
		await newUser.save();
		revalidatePath("/admin");
	} catch (error) {
		console.log(error);
		throw new Error("There was an error in creating a new user.");
	}
};

export const deleteUser = async (data: FormData) => {
	const { id } = Object.fromEntries(data);
	try {
		await dbConnection();
		await Post.deleteMany({ userId: id });
		await User.findByIdAndDelete(id);
		revalidatePath("/admin");
		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		throw new Error("There was an error in deleting the post.");
	}
};

export const handleRegister = async (data: FormData) => {
	const { username, email, password, avatar, confirmPassword } =
		Object.fromEntries(data);
	if (password !== confirmPassword) {
		throw new Error("Passwords do not match.");
	} else {
		try {
			await dbConnection();
			const user = await User.findOne({ email });
			let hashedPassword;
			if (typeof password === "string") {
				hashedPassword = await bcrypt.hash(password, 10);
			}
			if (user) {
				throw new Error("User already exists.");
			} else {
				const newUser = new User({
					username,
					email,
					password: hashedPassword,
					avatar,
				});
				await newUser.save();
			}
		} catch (error: any) {
			console.log(error);
			throw error;
		}
	}
};

export const handleLogin = async (data: FormData) => {
	const { username, password } = Object.fromEntries(data);
	try {
		await signIn("credentials", { username, password });
	} catch (error: any) {
		console.log(error);
		throw new Error("There was an error logging in.");
	}
};
