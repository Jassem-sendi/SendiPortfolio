"use client";
import React from "react";
import { motion } from "framer-motion";

type SkillProps = {
  skillName?: string;
  url: string;
  level: string;
};

const skills: SkillProps[] = [
  {
    level: "70",
    skillName: "Next.js",
    url: "https://i.pinimg.com/736x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg",
  },
  {
    level: "70",
    skillName: "JavaScript",
    url: "https://i.pinimg.com/736x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg",
  },
  {
    level: "80",
    skillName: "React",
    url: "https://i.pinimg.com/564x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg",
  },
  {
    level: "50",
    skillName: "Firebase",
    url: "https://i.pinimg.com/564x/a5/c1/a7/a5c1a790c83da3e86168d2c1328929bd.jpg",
  },
  {
    level: "60",
    skillName: "MongoDB",
    url: "https://i.pinimg.com/564x/e8/ab/b4/e8abb49f605c7f61553c8268ef0a56aa.jpg",
  },
  {
    level: "70",
    skillName: "CSS",
    url: "https://i.pinimg.com/736x/5d/1c/c8/5d1cc864ae7eebae63a1c5738b446e3d.jpg",
  },
  {
    level: "100",
    skillName: "HTML",
    url: "https://i.pinimg.com/564x/0e/7d/4a/0e7d4ad55cdc3db527af6c3d72f41ad0.jpg",
  },
  {
    level: "80",
    skillName: "Tailwind CSS",
    url: "https://i.pinimg.com/564x/32/8e/a7/328ea78bb73cadbe6d28ffd0d2d8575c.jpg",
  },
  {
    level: "70",
    skillName: "PHP",
    url: "https://i.pinimg.com/564x/91/4a/cb/914acbb372d6ca7ae78fbf683b5af2aa.jpg",
  },
  {
    level: "80",
    skillName: "MySQL",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png/640px-SQL_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png",
  },
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="h-full flex flex-col justify-center items-center space-y-10 mx-auto p-5"
    >
      <div className="text-center space-y-2 mt-12">
        <h3 className="uppercase tracking-[15px] text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Skills
        </h3>
        <h3 className="uppercase tracking-[2px] text-gray-500 text-xs sm:text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={skill.url}
              alt={skill.skillName}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover mb-2 sm:mb-3"
            />
            <h4 className="text-sm sm:text-lg font-medium">{skill.skillName}</h4>
            <p className="text-xs sm:text-sm text-gray-500">{skill.level}% Proficiency</p>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 rounded-lg flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <p className="text-white text-lg font-bold">{skill.level}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
