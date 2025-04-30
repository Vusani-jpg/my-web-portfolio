import Navbar from "../../components/ui/Navbar";
import { ArrowDown } from "lucide-react"
// import About from "../../components/sections/about";
import Link from "next/link";
import Hero from "../../components/sections/Hero";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Navbar />
      <Hero />
    
    
    <div 
       className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"/>
     <Link href="#about" aria-label="Scroll to About section">
       <ArrowDown className=" h-15 w-15" />
     </Link>
     
   </div>
   
    
  );
}
