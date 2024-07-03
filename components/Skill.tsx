import React from "react";
import { motion } from "framer-motion";

type Props = {
	directionLeft?: boolean;
	skillName?: string;
	url: string;
	level: string;
};

function Skill({ directionLeft, skillName, url, level }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{
					duration: 1.5,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				className="rounded-full w-20 h-20 xl:w-30 xl:h-30 object-cover border border-gray-500 filter group-hover:grayscale group-hover:scale-105 transition duration-300 ease-in-out shadow-lg"
				src={url}
				alt={skillName}
			/>
			<div
				className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gray-800 bg-opacity-80 rounded-full flex justify-center items-center w-20 h-20 xl:w-30 xl:h-30"
				style={{ top: 0, left: 0 }}
			>
				<p className="text-white text-xs md:text-sm">{skillName}</p>
			</div>
			<div
				className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-white bg-opacity-80 rounded-full flex justify-center items-center w-20 h-20 xl:w-30 xl:h-30"
				style={{ top: 0, left: 0 }}
			>
				<p className="text-black text-3xl font-bold">{level}%</p>
			</div>
		</div>
	);
}

export default Skill;
