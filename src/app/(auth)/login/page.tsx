"use client";
import Button from "@/components/button/Button";
import { handleGithubLogin, handleLogin } from "@/lib/action";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const LoginPage = async () => {
	const [error, setError] = useState<Error | null>(null);
	const [passwordHidden, setPasswordHidden] = useState(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const data = new FormData(e.currentTarget);
			await handleLogin(data);
			setError(null);
		} catch (error: any) {
			console.log(error);
			setError(error);
		}
	};
	return (
		<div className="flex items-center justify-center flex-col ">
			<div className="flex flex-col items-center p-10 bg-primaryLight rounded-sm w-[400px] ">
				<form
					className="flex flex-col gap-5 mb-2 w-full"
					onSubmit={handleSubmit}
				>
					<h1 className="text-[32px] font-heading font-bold text-center">
						Login
					</h1>
					<input
						className="px-4 py-2 rounded-md bg-primary text-white text-lg"
						type="text"
						placeholder="Username"
						name="username"
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
					<div className="flex flex-col gap-2">
						<Button isPrimary text="Submit" />
						<span className="text-sm text-center text-gray-300">OR</span>
					</div>
				</form>
				<form className="w-full" action={handleGithubLogin}>
					<button className="flex w-full items-center cursor-pointer justify-center gap-2 py-3 px-2 bg-gray-950 hover:bg-gray-900 transition-all text-center font-heading font-medium capitalize hover:">
						<FaGithub size={20} /> Login with Github
					</button>
				</form>
				{error && (
					<span className="text-red-600 text-sm text-center mt-5">
						{error.message}
					</span>
				)}
				<Link
					href={"/register"}
					className="text-center text-gray-400 underline mt-5 font-light text-sm"
				>
					Don't have an account? Register.
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
