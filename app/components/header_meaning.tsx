"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';

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

    const quotes = [
        "Find a friend who is so different from you, and you can’t believe how much you have in common.",
        "Yet somehow we think we can grow, feeding on flowers and fireworks, without completing the cycle back to reality.",
        "The internet may be making us shallow, but it’s making us think we’re deep.",
        "[It is] not only those whose dreams are flouted but also to those who never realize that they may dream.",
        "Will you take that phony dream and burn it before something happens?",
        "Standing on the bare ground — my head bathed by the blithe air, and uplifted into infinite space — all mean egotism vanishes. I become a transparent eye-ball; I am nothing; I see all; the currents of the Universal Being circulate through me; I am part or particle of God.",
        "A rich man’s war, and a poor man’s fight.",
        "Thy love afar is spite at home.",
        "I never really had a Charlie Parker. But I tried. I actually fucking tried. And that's more than most people ever do.",
        "Maybe I'm one of those people that has always wanted to do it, but it's like a pipe dream for me, you know? And then, you said it, you change your dreams, and then you grow up.",
        "Seita. Thank you.",
        "When a measure becomes a target, it ceases to be a good measure.",
        "Why do we close our eyes when we pray, kiss, or dream? Because the most beautiful things in life are not seen but felt by heart.",
        "What we do every day matters more than what we do once in a while.",
        "It is amazing what you can accomplish if you do not care who gets the credit.",
        "Maybe life has no equal trade, maybe you can give up all you got, and get nothing back. Even if I can't prove it's true, I have to try",
        "'It hasn't even been 1/100th of my life.' 'It's interesting, isn't it? That this 1/100th changed you.'",
        "Great Scott!",
        "One of the advantages of designing without pencil and paper is that you’re almost forced to avoid all avoidable complexities.",
        "Are we also losing our capacity for rage?",
        "What? This isn't true! I didn't write this! Mima's Ghost: Of course you didn't. The real Mima is writing this.",
        "You mustn't be afraid to dream a little bigger, darling."
    ];

    const attributions = [
        "Nye",
        "Fahrenheit 451",
        "Nicholas Carr",
        "Citizens of the republic",
        "Death of a Salesman",
        "Ralph Waldo Emerson",
        "I'm not sure",
        "Ralph Waldo Emerson",
        "Fletcher, Whiplash",
        "Mia",
        "Grave of the Fireflies",
        "Goodhart’s law",
        "Denzel Washington",
        "Lewis Howes",
        "Harry S. Truman",
        "Edward Elric",
        "Frieren, then Eisen",
        "Doc and Marty",
        "Dijkstra",
        "Byung-Chul Han",
        "Perfect Blue",
        "Inception"
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random()*quotes.length);
        setQuote(quotes[randomIndex]);
        setAttribution(attributions[randomIndex]);
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
                        <img
                            src="/library2.jpeg"
                            alt="peaceful landscape"
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
