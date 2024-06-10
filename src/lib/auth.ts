import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { DefaultSession } from "next-auth";
import { dbConnection } from "./utils";
import { User } from "@/models/User.model";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: DefaultSession["user"] & {
			id?: string;
			isAdmin?: boolean;
		};
	}
}

const login = async (credentials: { username?: string; password?: string }) => {
	try {
		await dbConnection();
		let isPasswordCorrect = false;
		const user = await User.findOne({ username: credentials.username });
		if (!user) {
			throw new Error("Incorrect credentials!");
		}
		if (credentials.password) {
			isPasswordCorrect = await bcrypt.compare(
				credentials.password,
				user.password
			);
		}
		if (!isPasswordCorrect) {
			throw new Error("Incorrect credentials!");
		}
		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const {
	auth,
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					const user = await login(
						credentials as { username: string; password: string }
					);
					return user;
				} catch (error: any) {
					console.log(error);
					throw new Error(error.message);
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			if (account?.provider === "github") {
				await dbConnection();
				try {
					const user = await User.findOne({ email: profile?.email });
					if (!user && profile) {
						const newUser = new User({
							username: profile.login,
							email: profile.email,
							avatar: profile.avatar_url,
						});
						await newUser.save();
					}
				} catch (error) {
					console.log(error);
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks,
	},
});
