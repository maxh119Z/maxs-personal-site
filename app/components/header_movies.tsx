"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation'
import { QUOTES } from './quotes';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [quote, setQuote] = useState("");
    const [attribution, setAttribution] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/'
    const [lightbox, setLightbox] = useState<string | null>(null);

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
        <div onClick={() => setLightbox("/tierlist.png")} className="mt-4 flex flex-row w-full max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
            <div className="w-19/48 max-md:w-auto">
                <Image
                    src="/selfie.jpeg"
                    alt="Max Zhang"
                    width={256}
                    height={256}
                    className="aspect-square object-cover"
                />
            </div>
        <div id="welcome" className="relative w-29/48 text-2xl max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
            <Image
                src="/tierlist.png"
                alt="tierlist"
                width={540}
                height={172}
                className="object-cover -ml-1 max-md:w-full max-md:h-auto max-md:ml-0"
            />
            <p  className="mt-2 text-xl">junior year watches</p>
        </div>


        </div>
        <div className={`mt-4 w-1/3 transition-opacity duration-1000 max-md:mt-8 max-md:mb-6 max-md:w-2/3 max-md:mx-auto max-md:text-center ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h2 className="opacity-80">{quote}</h2>
            <h3 className="opacity-50"> {attribution}<button onClick={()=>window.location.reload()} className = "pointer-events-auto ml-5 text-[#0064C7]">Refresh</button><Link className="ml-5 text-[#0064C7]" href="https://github.com/maxh119Z/simple-personal-quotes" target="_blank" rel="noopener noreferrer">your own mac widget</Link></h3>
        </div>

        {lightbox && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-8 cursor-zoom-out"
                    onClick={() => setLightbox(null)}
                >
                    <img
                        src={lightbox}
                        alt="fullscreen"
                        className="max-h-[75vh] max-w-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                
                </div>
        )}

    </header>

    
    );
}
