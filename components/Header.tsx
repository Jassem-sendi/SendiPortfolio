"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
			<motion.div
				initial={{ x: -300, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				{/* Social Icons */}
				<SocialIcon fgColor="gray" bgColor="transparent" url="https://www.facebook.com/profile.php?id=61561101369272" />
				<SocialIcon fgColor="gray" bgColor="transparent" url="https://instagram.com/jecemsendi" />
				<SocialIcon fgColor="gray" bgColor="transparent" url="https://www.linkedin.com/in/sendi-jassem-7a2b972b4/" />
				<SocialIcon fgColor="gray" bgColor="transparent" url="https://github.com/Jassem-sendi" />
				<SocialIcon fgColor="gray" bgColor="transparent" url="https://gmail.com/jassemsendi@gmail.com" />
			</motion.div>
			<motion.div
				initial={{ x: 300, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-500 cursor-pointer"
			>
				<Link href="#Contact">
					<SocialIcon fgColor="gray" bgColor="transparent" network="email" className="cursor-pointer" />
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
				</Link>
			</motion.div>
		</header>
	);
}

export default Header;
