import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<div>
			<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
				VUSANI MATSIGILA
			</h1>
			<p className="text-2xl items-end ml-16 mt-4">
				Software Developer · Mechanical Engineer
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
	);
}
