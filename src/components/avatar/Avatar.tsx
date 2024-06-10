import { getUser } from "@/api/user/user.api";
import Image from "next/image";
import React from "react";

interface AvatarProps {
	userId: string;
	createdAt: string;
	large?: boolean;
}

const Avatar = async ({ userId, createdAt, large }: AvatarProps) => {
	const user = await getUser(userId);
	if (user)
		return large ? (
			<div className="flex items-center gap-4 my-5">
				<div className=" h-10 w-10 relative object-cover">
					<Image
						className="rounded-full object-cover"
						src={user.avatar || "/avatar.png"}
						alt="avatar"
						fill
					/>
				</div>
				<div className="flex gap-6">
					<div className="flex flex-col text-sm">
						<span className=" text-gray-400 font-bold">Author</span>
						<span className="">{user.username}</span>
					</div>
					<div className="flex flex-col text-sm">
						<span className="text-sm text-gray-400 font-bold">Published</span>
						<span className="">{createdAt}</span>
					</div>
				</div>
			</div>
		) : (
			<div className="flex items-center gap-3">
				<div className=" h-10 w-10 relative object-cover">
					<Image
						className="rounded-full object-cover"
						src={user.avatar || "/avatar.png"}
						alt="avatar"
						fill
					/>
				</div>
				<div className="flex flex-col">
					<span className="text-sm">{user.username}</span>
					<span className=" text-xs text-gray-400">{createdAt}</span>
				</div>
			</div>
		);
};

export default Avatar;
