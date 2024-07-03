"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
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
			className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl min-h-screen justify-center items-center mx-auto space-y-10 xl:space-y-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>
			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs">
				Hover over a skill for current proficiency
			</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5">
				<Skill
					level="70"
					skillName="Next.js"
					url="https://i.pinimg.com/736x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg"
					directionLeft={true}
				/>
				<Skill
					level="70"
					skillName="JavaScript"
					url="https://i.pinimg.com/736x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg"
				/>
				<Skill
					level="80"
					skillName="React"
					url="https://i.pinimg.com/564x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg"
					directionLeft={true}
				/>
				<Skill
					level="50"
					skillName="Firebase"
					url="https://i.pinimg.com/564x/a5/c1/a7/a5c1a790c83da3e86168d2c1328929bd.jpg"
				/>
				<Skill
					level="60"
					skillName="MongoDB"
					url="https://i.pinimg.com/564x/e8/ab/b4/e8abb49f605c7f61553c8268ef0a56aa.jpg"
					directionLeft={true}
				/>
				<Skill
					level="70"
					skillName="CSS"
					url="https://i.pinimg.com/736x/5d/1c/c8/5d1cc864ae7eebae63a1c5738b446e3d.jpg"
				/>
				<Skill
					level="100"
					skillName="HTML"
					url="https://i.pinimg.com/564x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg"
					directionLeft={true}
				/>
				<Skill
					level="80"
					skillName="Tailwind CSS"
					url="https://i.pinimg.com/564x/32/8e/a7/328ea78bb73cadbe6d28ffd0d2d8575c.jpg"
				/>
				<Skill
					level="70"
					skillName="PHP"
					url="https://i.pinimg.com/564x/91/4a/cb/914acbb372d6ca7ae78fbf683b5af2aa.jpg"
					directionLeft={true}
				/>
				<Skill
					level="80"
					skillName="MySQL"
					url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png/640px-SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png"
				/>
			</div>
		</motion.div>
	);
}

export default Skills;
