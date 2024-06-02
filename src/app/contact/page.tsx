import Button from "@/components/button/Button";
import Image from "next/image";

const ContactPage = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex-1">
				<Image
					className="rounded-tr-[30%] rounded-br-[30%] rounded-bl-[30%] rounded-tl-[50%] my-5"
					src={"/contact.png"}
					alt="contact us"
					width={500}
					height={500}
				/>
			</div>
			<div className="flex-1">
				<h1 className="text-[36px] font-heading font-bold mb-4 text-center">
					Contact us
				</h1>
				<form className="flex flex-col gap-5">
					<input
						className="px-4 py-2 focus:outline-button bg-primaryLight"
						type="text"
						name="name"
						placeholder="Full Name"
					/>
					<input
						className="px-4 py-2 focus:outline-button bg-primaryLight"
						type="email"
						name="email"
						placeholder="someone@mail.com"
					/>
					<input
						className="px-4 py-2 focus:outline-button bg-primaryLight"
						type="tel"
						name="phone"
						placeholder="Phone Number"
					/>
					<textarea
						className="px-4 py-2 focus:outline-button bg-primaryLight"
						name="message"
						cols={30}
						rows={10}
						placeholder="Message"
					></textarea>
					<Button text="Submit" isPrimary />
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
