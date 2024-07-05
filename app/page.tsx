import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="h-screen text-white snap-y snap-mandatory overflow-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 z-0 bg-gray-900">
			{/* Header */}
			<Header />

			{/* Hero */}
			<section id="Hero" className="snap-start">
				<Hero />
			</section>

			{/* About */}
			<section id="About" className="snap-center">
				<About />
			</section>

			{/* Experience */}
{/* 			<section id="Experience" className="snap-center">
				<Experience />
			</section> */}

			{/* Skills */}
			<section id="Skills" className="snap-start">
				<Skills />
			</section>

			{/* Projects */}
{/* 			<section id="Projects" className="snap-start">
				<Projects />
			</section> */}

			{/* Contact */}
			<section id="Contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href={"#Hero"}>
				<footer className="sticky bottom-4 w-full cursor-pointer flex justify-center items-center z-20">
					<div className="flex flex-col items-center space-y-2 relative">
						<Image
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer"
							src="https://i.ibb.co/YpwXS8s/Whats-App-Image-2024-06-26-at-5-42-46-PM.jpg"
							alt="Logo"
							width={40}
							height={40}
						/>
					</div>
				</footer>
			</Link>
		</main>
	);
}
