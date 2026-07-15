"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation'
import { QUOTES } from './quotes';

export default function Header({ children }: { children?: React.ReactNode } = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const [quote, setQuote] = useState("");
    const [attribution, setAttribution] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/'

    useEffect(() => {
        const picked = QUOTES[Math.floor(Math.random()*QUOTES.length)];
        setQuote(picked.quote);
        setAttribution(picked.attribution);

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
        {isHomePage && (
            <>
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
                    <div id="welcome" className="w-29/48 text-2xl max-md:w-2/3">
                        <h1 className="font-bold">Welcome!</h1>
                        <p className="mt-2 text-base">
                            My name is Max Zhang. I am currently a junior at Irvington High School. In my freetime, you may find me <Link className="text-[#4A90E2]" href="/drawings">drawing</Link>, performing <Link className="text-[#4A90E2]" href="/projects">research</Link>, playing <Link className="text-[#4A90E2]" href="/meaning">badminton</Link>, or working at <Link className="text-[#4A90E2]" href="https://www.amctheatres.com/" target="_blank" rel="noopener noreferrer">AMC Theaters</Link> (and much more). This site is my everything collection. For more technical people, I am interested in multilingual AI safety research, mechanistic interpretability, and measurement science. Special thanks to my mentors thus far: <Link className="text-[#4A90E2]" href="https://ai.stanford.edu/~sttruong/" target="_blank" rel="noopener noreferrer">Sang Truong</Link>, <Link className="text-[#4A90E2]" href="https://nathanhu0.github.io/" target="_blank" rel="noopener noreferrer">Nathan Hu</Link>, and <Link className="text-[#4A90E2]" href="https://www.linkedin.com/in/haihaoliu/" target="_blank" rel="noopener noreferrer">Haihao Liu</Link>. Feel free to leave feedback! I spent a while learning and personally coding a good portion of this site.
                        </p>
                    </div>
                </div>
                <div className={`mt-4 w-1/3 transition-opacity duration-1000 max-md:mt-8 max-md:mb-6 max-md:w-2/3 max-md:mx-auto max-md:text-center ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="opacity-80">{quote}</h2>
                    <h3 className="opacity-50"> {attribution}<button onClick={()=>window.location.reload()} className="pointer-events-auto ml-5 text-[#0064C7]">Refresh</button><Link className="ml-5 text-[#0064C7]" href="https://github.com/maxh119Z/simple-personal-quotes" target="_blank" rel="noopener noreferrer">your own mac widget</Link></h3>
                </div>
            </>
        )}
        {!isHomePage && (
            <div className="mt-4 flex flex-row w-full gap-6 items-stretch max-md:flex-col max-md:items-center">
                <div className="w-19/48 flex flex-col max-md:w-2/3 max-md:items-center">
                    <Image
                        src="/selfie.jpeg"
                        alt="Max Zhang"
                        width={256}
                        height={256}
                        className="aspect-square object-cover"
                    />
                    <div className={`mt-4 transition-opacity duration-1000 max-md:mt-8 max-md:mb-6 max-md:text-center ${isVisible ? "opacity-100" : "opacity-0"}`}>
                        <h2 className="opacity-80">{quote}</h2>
                        <h3 className="opacity-50"> {attribution}<button onClick={()=>window.location.reload()} className="pointer-events-auto ml-5 text-[#0064C7]">Refresh</button><Link className="ml-5 text-[#0064C7]" href="https://github.com/maxh119Z/simple-personal-quotes" target="_blank" rel="noopener noreferrer">your own mac widget</Link></h3>
                    </div>
                </div>
                {children && (
                    <div className="w-29/48 max-md:w-full">
                        {children}
                    </div>
                )}
            </div>
        )}

    </header>
    );
}
