"use client";
import Button from "@/components/button/Button";
import { handleRegister } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
	const [passwordHidden, setPasswordHidden] = useState(false);
	const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const router = useRouter();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const formData = new FormData(e.currentTarget);
			await handleRegister(formData);
			router.push("/login");
			setError(null);
		} catch (error: any) {
			setError(error);
			console.log(error);
		}
	};
	return (
		<div className="flex items-center justify-center flex-col gap-10">
			<form
				className="flex flex-col p-10 gap-6 bg-primaryLight rounded-sm w-[400px]"
				onSubmit={onSubmit}
			>
				<h1 className="text-[32px] font-heading font-bold text-center">
					Register
				</h1>
				<input
					className="px-4 py-2 rounded-md bg-primary text-white text-lg"
					type="text"
					placeholder="Username"
					name="username"
				/>
				<input
					className="px-4 py-2 rounded-md bg-primary text-white text-lg"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<div className="relative">
					<input
						className="px-4 py-2 rounded-md bg-primary text-white text-lg w-full"
						type={passwordHidden ? "password" : "text"}
						placeholder="Password"
						name="password"
					/>
					{passwordHidden ? (
						<FaRegEye
							onClick={() => setPasswordHidden(false)}
							size={20}
							className="absolute right-[15px] top-[12px] cursor-pointer"
						/>
					) : (
						<FaRegEyeSlash
							size={20}
							className="absolute right-[15px] top-[12px] cursor-pointer"
							onClick={() => setPasswordHidden(true)}
						/>
					)}
				</div>
				<div className="relative">
					<input
						className="px-4 py-2 rounded-md bg-primary text-white text-lg w-full"
						type={confirmPasswordHidden ? "password" : "text"}
						placeholder="Confirm password"
						name="confirmPassword"
					/>
					{confirmPasswordHidden ? (
						<FaRegEye
							onClick={() => setConfirmPasswordHidden(false)}
							size={20}
							className="absolute right-[15px] top-[12px] cursor-pointer"
						/>
					) : (
						<FaRegEyeSlash
							size={20}
							className="absolute right-[15px] top-[12px] cursor-pointer"
							onClick={() => setConfirmPasswordHidden(true)}
						/>
					)}
				</div>
				<Button isPrimary text="Submit" />
				{error && (
					<span className="text-red-600 text-sm text-center">
						{error.message}
					</span>
				)}
				<Link
					href={"/login"}
					className="text-center text-gray-400 underline mt-2 font-light text-sm"
				>
					Already have an account? Login.
				</Link>
			</form>
		</div>
	);
};

export default RegisterPage;
