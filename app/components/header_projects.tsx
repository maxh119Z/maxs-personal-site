"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/'

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
    <header className="px-5 md:px-10 py-3 flex w-full flex-col">
        <div className="flex w-full text-2xl grow mb-4 max-md:flex-col">
            <div className="w-19/48 flex items-start max-md:w-full max-md:justify-between max-md:items-center">
                <Link href="/">Max Zhang</Link>
                <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="hidden max-md:block text-3xl leading-none" aria-label="menu">☰</button>
            </div>
            <div className={`w-29/48 flex items-start gap-6 max-md:w-full max-md:flex-col max-md:gap-2 max-md:mt-3 ${menuOpen ? '' : 'max-md:hidden'}`}>
                <Link href="/drawings">drawings</Link>
                <Link href="/projects">projects</Link>
                <Link href="/meaning">life</Link>
                <Link href="/movies">movies</Link>
            </div>
        </div>
        <div className="mt-4 flex flex-row w-full max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
            <div className="w-19/48 max-md:w-auto">
                <Image
                    src="/selfie.jpeg"
                    alt="Max Zhang"
                    width={256}
                    height={256}
                    className="aspect-square object-cover"
                />
            </div>
            <div id="welcome" className="relative w-29/48 text-2xl flex flex-row items-start gap-6 max-md:w-full max-md:flex-col max-md:items-center">
                <div className="flex w-2/3 flex-col max-md:w-full max-md:items-center">
                    <Image
                    src="/began.png"
                    alt="max derek kai"
                    width={389}
                    height={172}
                    className="object-cover max-md:w-full max-md:h-auto"
                />
                    <Link href = "https://neurips.cc/virtual/2025/loc/mexico-city/133196" className="mt-2 text-xl">Balcón del Zócalo</Link>

                </div>
                <div className="h-[256] border-x-1 border-solid border-[#E5E5E5] max-md:hidden"></div>
                <div id="new-section text-right justify-end" className="w-1/3 text-2xl max-md:w-full">

                    <h2 className="font-black text-[#666] mb-10 max-md:mb-3">Contents</h2>
                    <div className="flex flex-col gap-3 max-md:items-center">
                        <a href="#research" className="font-semibold text-[#333] text-base">Research</a>
                        <a href="#projects" className="font-semibold text-[#333] text-base">Projects</a>
                        <a href="#hackathons" className="font-semibold text-[#333] text-base">Hackathons</a>
                        {/* <p className="font-semibold text-[#333] text-base">Awards</p> */}

                    </div>

                </div>

            </div>
            
        

        
        </div>
        <div className={`mt-4 w-1/3 transition-opacity duration-1000 max-md:mt-8 max-md:mb-6 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* <h2 className="opacity-80">{quote}</h2>
            <h3 className="opacity-50"> {attribution}<button onClick={()=>window.location.reload()} className = "pointer-events-auto ml-5 text-[#0064C7]">Refresh</button><Link className="ml-5 text-[#0064C7]" href="https://github.com/maxh119Z/simple-personal-quotes" target="_blank" rel="noopener noreferrer">your own mac widget</Link></h3> */}
        </div>

    </header>
    );
}
