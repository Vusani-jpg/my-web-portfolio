"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";


export default function About() {
	const [mounted, setMounted] = useState(false);
import { cn } from "@/lib/utils";


	useEffect(() => {
		setMounted(true);
	}, []);

	const quickFacts = [
		{
			key: "software-engineer",
			icon: <Code className="h-5 w-5 text-primary-foreground" />,
			title: "Software Engineering",
			description: "Passionate about coding and innovative Technology ",
		},
		{
			key: "Software-development",
			icon: <Briefcase className="h-5 w-5 text-teal-400" />,
			title: "Software Development",
			description: "Building responsive, user-friendly applications",
		},
		{
			key: "continuous-learner",
			icon: <GraduationCap className="h-5 w-5 text-teal-400" />,
			title: "Mechanical Engineering",
			description: "Graduate from Cape Peninsula University of Technology",
		},
		{
			key: "johannesburg",
			icon: <MapPin className="h-5 w-5 text-white" />,
			title: "Johannesburg, Gauteng",
			description: "Based in RSA",
		},
	];

	return (
		<section id="about" className="py-20 relative scroll-mt-16">
			<SectionHeading title="About Me" subtitle="Get to know me better" />
			<div
				className={cn(
					"mx-auto space-y-6 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
					mounted && "opacity-100 translate-x-0",
				)}
			>
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
					<Image
						className="mx-auto object-cover max-w-screen-md float-end rounded-2xl shadow-lg shadow-gray-900/50 mt-0.5"
						src="/images/Ghost.jpg"
						alt="profile picture"
						width={374}
						height={350}
						priority
					/>

					<div className="box-content size-82 mx-auto bg-gray-900 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg">
						<p className=" text-gray-300 leading-relaxed">
							Aspiring Software Engineer passionate about building responsive,
							user-friendly applications and exploring the evolving
							possibilities of AI. Eager to thrive in collaborative development
							environments and continuously expand technical and creative skill
							sets.
						</p>
						<p className="text-gray-300 leading-relaxed mt-3">
							My journey in tech is fueled by curiosity and a passion for
							creating impactful solutions. I continuously learn and adapt to
							emerging technologies to stay ahead in a rapidly evolving
							innovative space.{" "}
						</p>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
					{quickFacts.map((fact) => (
						// Using key as index for simplicity, but in a real app, use a unique identifier
						<div
							key={fact.key}
							// biome-ignore lint/a11y/useSemanticElements: <explanation>
							role="listitem"
							className="bg-gray-900 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]"
						>
							<div className="flex items-center gap-4">
								<div>{fact.icon}</div>
								<div>
									<h3 className="font-medium text-gray-200">{fact.title}</h3>
									<p className="text-sm text-gray-400">{fact.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
