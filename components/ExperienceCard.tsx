"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 p-10 bg-gray-900 shadow-xl flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] mx-auto mt-12 snap-center hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2 },
        }}
        viewport={{
          once: true,
        }}
        className="w-24 h-24 rounded-full object-cover object-center xl:w-[120px] xl:h-[120px] border-4 border-gray-700"
        alt="DevOps ISIMA Club"
        src="https://media.licdn.com/dms/image/D560BAQFc3_vacwylmg/company-logo_200_200/0/1695671294775?e=1727913600&v=beta&t=ruHONi2EQO-lbcWkuuF75Wz3EKbUVJDrIKoU6LEAm9M"
      />
      <div className="px-0 md:px-5 text-center">
        <h4 className="text-2xl font-semibold text-white">
          Developer at DevOps ISIMA Club
        </h4>
        <p className="font-medium text-lg mt-2 text-gray-300">
          Software Development
        </p>
        <div className="flex justify-center space-x-2 my-2">
          {/* Tech Used */}
          {/* <img
              className="h-6 w-6 rounded-full"
              src="https://i.pinimg.com/564x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg"
              alt=""
          /> */}
        </div>
        <p className="uppercase py-2 text-gray-500">
          Started on 20/10/2023 - Ended on 15/05/2023
        </p>
        <ul className="list-disc space-y-2 ml-5 text-left text-base text-gray-400">
          <li>Developed various automation scripts.</li>
          <li>Managed CI/CD pipelines.</li>
          <li>Collaborated with team members on DevOps best practices.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard
