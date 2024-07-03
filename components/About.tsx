"use client";
import { motion } from "framer-motion";
import React from "react";

function About() {
	return (
		<motion.div
			initial={{
				x: -200,
				opacity: 0,
			}}
			whileInView={{
				x: 0,
				opacity: 1,
			}}
			viewport={{ once: true }}
			transition={{
				duration: 1.5,
			}}
			className="flex relative flex-col text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-8 md:space-y-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{ once: true }}
				transition={{
					duration: 1.5,
				}}
				src="https://i.ibb.co/YpwXS8s/Whats-App-Image-2024-06-26-at-5-42-46-PM.jpg"
				alt="Photo Of Me"
				className="rounded-full object-cover md:rounded-lg w-56 h-56 md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] shadow-lg"
			/>
			<div className="space-y-4 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here Is a{" "}
					<span className=" underline decoration-slate-500">Little</span>{" "}
					Background :
				</h4>
				<motion.p
					initial={{
						x: 200,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					viewport={{ once: true }}
					transition={{
						duration: 1.5,
					}}
					className="text-base md:text-lg text-gray-400"
				>
					Sendi Jassem, a 19-year-old software developer, is currently pursuing
					a degree in computer science at ISIMA University. Passionate about
					crafting digital experiences 🌐, Sendi thrives on creating websites 💻
					and solving intricate problems within the realm of software
					development. With a keen aptitude for learning 📚, Sendi approaches
					challenges with enthusiasm and efficiency ⚡, always seeking to expand
					their skill set and tackle new technologies 🚀. In the dynamic world
					of coding, Sendi Jassem stands out as a dedicated and quick-witted
					developer, poised to make significant strides in the field 🧑‍💻.
				</motion.p>
			</div>
		</motion.div>
	);
}

export default About;
