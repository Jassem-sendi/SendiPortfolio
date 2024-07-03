"use client";
import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

function Hero() {
	const [text, count] = useTypewriter({
		words: [
			"Hi, My Name Is Jassem",
			"I love Coding 💻",
			"< And I love Coffee 😃 />",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden bg-gray-900">
			<BackgroundCircles />
			<Image
				className="relative rounded-full mx-auto border-4 border-white shadow-lg object-cover"
				src="https://i.ibb.co/YpwXS8s/Whats-App-Image-2024-06-26-at-5-42-46-PM.jpg"
				alt="Photo Of Me"
				width={150}
				height={150}
			/>
			<div className="space-y-4 z-20">
				<h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
					Software Student
				</h2>
				<h1 className="text-3xl font-semibold text-white lg:text-6xl px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="orange" />
				</h1>
				<div className="hidden md:flex space-x-4 justify-center mt-4 pt-5">
					{["About", "Experience", "Skills", "Projects", "Contact"].map(
						(buttonText) => (
							<Link key={buttonText} href={`#` + buttonText}>
								<button
									key={buttonText}
									className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs text-gray-500 tracking-widest 
									transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"
								>
									{buttonText}
								</button>
							</Link>
						),
					)}
				</div>
			</div>
		</div>
	);
}

export default Hero;
