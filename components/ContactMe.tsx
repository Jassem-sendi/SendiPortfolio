"use client";
import { PhoneIcon, HomeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type Props = {};

function ContactMe({}: Props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const mailtoLink = `mailto:jassemsendi@gmail.com?subject=Contact%20from%20${firstName}%20${lastName}&body=${encodeURIComponent(
			`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
		)}`;
		window.location.href = mailtoLink;
	};

	return (
		<div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center space-y-8 md:space-y-0">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>
			<div className="flex flex-col space-y-10 w-full md:w-auto">
				
				<div className="space-y-4">
					<div className="flex items-center space-x-5">
						<PhoneIcon className="text-white h-7 w-7 animate-pulse" />
						<p className="text-lg">+216 21 048 372</p>
					</div>
					<div className="flex items-center space-x-5">
						<svg
							className="text-white h-7 w-7 animate-pulse"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
							<path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
						</svg>
						<p className="text-lg">jassemsendi@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5">
						<HomeIcon className="text-white h-7 w-7 animate-pulse" />
						<p className="text-lg">Sened Gafsa 2190</p>
					</div>
					<form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
						<input
							className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="text"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<input
							className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<button
							className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactMe;
