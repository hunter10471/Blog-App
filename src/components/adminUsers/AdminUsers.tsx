import { getUsers } from "@/api/user/user.api";
import { deleteUser } from "@/lib/action";
import Image from "next/image";
import React from "react";

const AdminUsers = async () => {
	const users = await getUsers();
	return (
		<div>
			<h1>Users</h1>
			{users.map((user) => (
				<div key={user._id.toString()}>
					<div>
						<Image width={50} height={50} src={user.avatar} alt="avatar" />
						<span>{user.username}</span>
					</div>
					<form action={deleteUser}>
						<input type="hidden" name="id" value={user._id.toString()} />
						<button>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};

export default AdminUsers;
