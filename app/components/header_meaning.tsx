"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { QUOTES } from './quotes';

const CATEGORIES = [
    { id: "badminton",  label: "badminton" },
    { id: "locked-fun", label: "locked + fun moments" },
    { id: "school",     label: "school" },
    { id: "other",      label: "other" },
];

export default function HeaderMeaning({ shake = false }: { shake?: boolean }) {
    const [isVisible, setIsVisible] = useState(false);
    const [quote, setQuote] = useState("");
    const [attribution, setAttribution] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className="mt-4 flex flex-row w-full items-start max-md:flex-col max-md:items-center">
                <div className="w-19/48 flex flex-col gap-4 max-md:w-2/3 max-md:items-center">
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
                <div id="welcome" className="w-29/48 flex flex-col h-[calc(100vh-100px)] max-md:w-full max-md:h-auto max-md:items-center">
                    <div className="text-2xl max-md:flex max-md:flex-col max-md:items-center">
                        <Image
                            src="/meaningheader.png"
                            alt="meaning header"
                            width={338}
                            height={171}
                            className="object-cover -ml-1 max-md:ml-0 max-md:w-full max-md:h-auto"
                        />
                        <p className="mt-2 text-xl">cool stickers and a macchiato</p>
                    </div>
                    <div className={`relative mt-auto mb-4 ml-auto mr-12 w-fit max-w-full max-md:mt-4 max-md:mr-0 max-md:ml-auto ${shake ? "shakec" : ""}`}>
                        <Image
                            src="/library2.jpeg"
                            alt="peaceful landscape"
                            width={1024}
                            height={768}
                            sizes="67vh"
                            className="h-[40vh] w-[67vh] max-w-full object-cover block"
                        />
                        <nav
                            className="absolute inset-0 flex items-center justify-center px-8 font-serif italic"
                            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
                        >
                            <ul className="space-y-5 text-white text-center">
                                <li className="text-sm uppercase tracking-[0.3em] not-italic opacity-80 mb-4">contents</li>
                                {CATEGORIES.map((cat) => (
                                    <li key={cat.id}>
                                        <a href={`#${cat.id}`} className="text-3xl">
                                            {cat.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
