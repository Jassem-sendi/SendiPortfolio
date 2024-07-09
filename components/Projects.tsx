"use client";
import React from "react";
import { motion } from "framer-motion";

type Project = {
	logoUrl: string;
	name: string;
	index: number;
	description: string;
};

const projects: Project[] = [
	{
		logoUrl:
			"https://i.pinimg.com/564x/87/9b/17/879b1757a4d6755390ee5cc2be93f5b4.jpg",
		name: "A Memory Game ",
		index: 1,
		description:
			"Mastermind is a classic code-breaking game where players guess a hidden sequence of numbers within limited attempts, using color-coded feedback for hints. Built with Next.js and React, it features dynamic input generation, interactive feedback, and a responsive design for both desktop and mobile devices. The game includes a hint system and uses CSS Modules for scoped styling.",
	},
	
];

const Projects: React.FC = () => {
	return (
		<div className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-24">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10">
				Projects
			</h3>
			<div className="absolute top-1/4 w-full h-96 bg-gray-700 -skew-y-12 z-0" />
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory space-x-4 p-10 mt-12 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 z-10 bg-gray-900">
				{projects.map((project, index) => (
					<motion.div
						key={index}
						className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
						initial={{
							opacity: 0,
							scale: 0.8,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.6 },
						}}
						whileHover={{
							scale: 1.05,
							y: -10,
							transition: { duration: 0.3 },
						}}
						viewport={{
							once: true,
						}}
					>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 2 },
							}}
							viewport={{
								once: true,
							}}
							src={project.logoUrl}
							alt={`Project ${project.index}`}
							className="w-64 h-64 object-cover rounded-lg"
						/>
						<div className="space-y-10 px-0 py-0 md:px-10 max-w-2xl text-center">
							<h5 className="text-[5px] md:text-2xl  font-semibold text-white">
								<span className="underline decoration-orange-400">
									Case Study {project.index} of {projects.length}:
								</span>{" "}
								{project.name}
							</h5>
							<p className="text-sm md:text-lg  text-gray-300">
								{project.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Projects;
