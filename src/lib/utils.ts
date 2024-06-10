import mongoose from "mongoose";

const connection: { isConnected: boolean } = {
	isConnected: false,
};

export const dbConnection = async () => {
	try {
		if (connection.isConnected) {
			return;
		}
		const db = await mongoose.connect(process.env.MONGO_URL as string);
		connection.isConnected = true;
	} catch (error) {
		console.log(error);
	}
};
