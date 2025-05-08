"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Hero() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	return (
		<section className="min-h-screen flex flex-col justify-center items-center relative">
			<div
				className={cn(
					"text-center space-y-6 max-w-4xl px-4 opacity-0 transform translate-y-8 transition-all duration-1000",
					mounted && "opacity-100 translate-y-0",
				)}
			>
				<div>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
						VUSANI MATSIGILA
					</h1>
					<p className="text-2xl items-end ml-16 mt-4 mx-auto">
						Software Developer &bull; Mechanical Engineer
					</p>
					<div className="pt-4 flex flex-wrap gap-4 justify-center">
						<Link
							href="#projects"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
						>
							View Projects
						</Link>
						<a
							href="/files/My CV.pdf"
							download
							className="inline-flex items-center gap-2 bg-gray-800/50 text-teal-400 border border-teal-500/30 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
						>
							Download CV
							<Image
								className="ml-2"
								aria-hidden
								src="/file.svg"
								alt="File icon"
								width={16}
								height={16}
							/>
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
				<Link href="#about" aria-label="Scroll to About section">
					<ArrowDown className=" justify-center items-center h-15 w-15" />
				</Link>
			</div>
		</section>
	);
}
