import { DefaultUser, DefaultSession } from "next-auth";

declare module "next-auth" {
	interface User extends DefaultUser {
		id?: string;
		isAdmin?: boolean;
	}
	interface Session {
		user: {
			id?: string;
			isAdmin?: boolean;
		} & DefaultSession["user"];
	}
	interface JWT {
		id?: string;
	}
}
