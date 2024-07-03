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
			"https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/201731cd-77d0-4e01-84ad-6297255ddfbb/TN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_85e5f9dd-e9d2-4f03-a97f-1f47f61fd149_small.jpg",
		name: "A Movie Recommendations Next.js App with Vector Embeddings",
		index: 1,
		description:
			"The Movie Recommendations Next.js App with Vector Embeddings is a web application designed to provide personalized movie recommendations using advanced machine learning techniques. Leveraging vector embeddings, a sophisticated method in natural language processing and recommendation systems.",
	},
	{
		logoUrl:
			"https://i.pinimg.com/564x/d2/ab/e3/d2abe34678e65300c2a3c15169368ee8.jpg",
		name: "Generative AI App with Next.js 14",
		index: 2,
		description:
			"The Generative AI App with Next.js 14 is an innovative web application that harnesses the power of artificial intelligence to generate creative content in real-time. Built on Next.js 14, this app integrates cutting-edge technologies including OpenAI's GPT (Generative Pre-trained Transformer) models",
	},
	// Add more projects as needed
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
