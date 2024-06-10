import { IUser } from "@/interfaces/User.interface";
import { dbConnection } from "@/lib/utils";
import { User } from "@/models/User.model";

export const getUser = async (id: string) => {
	try {
		dbConnection();
		const user = await User.findById(id).lean<IUser>();
		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching user.");
	}
};

export const getUsers = async () => {
	try {
		dbConnection();
		const users = await User.find().lean<IUser[]>();
		return users;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching users.");
	}
};
