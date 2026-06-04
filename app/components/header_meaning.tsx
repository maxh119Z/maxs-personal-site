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
        "Great Scott!"
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
        "Doc and Marty"
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random()*quotes.length);
        setQuote(quotes[randomIndex]);
        setAttribution(attributions[randomIndex]);
        setIsVisible(true);
    }, []);

    return (
        <header className="px-5 md:px-10 py-3 flex w-full flex-col">
            <div className="flex w-full text-2xl grow mb-4">
                <div className="w-19/48 flex items-start">
                    <Link href="/">Max Zhang</Link>
                </div>
                <div className="w-29/48 flex items-start gap-6">
                    <Link href="/drawings">drawings</Link>
                    <Link href="/projects">projects</Link>
                    <Link href="/meaning">life</Link>
                    <Link href="/movies">movies</Link>
                </div>
            </div>
            <div className="mt-4 flex flex-row w-full items-start">
                <div className="w-19/48 flex flex-col gap-4">
                    <Image
                        src="/selfie.jpeg"
                        alt="Max Zhang"
                        width={256}
                        height={256}
                        className="aspect-square object-cover"
                    />
                    <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                        <h2 className="opacity-80">{quote}</h2>
                        <h3 className="opacity-50"> {attribution}<button onClick={()=>window.location.reload()} className="pointer-events-auto ml-5 text-[#0064C7]">Refresh</button><Link className="ml-5 text-[#0064C7]" href="https://github.com/maxh119Z/simple-personal-quotes" target="_blank" rel="noopener noreferrer">your own mac widget</Link></h3>
                    </div>
                </div>
                <div id="welcome" className="w-29/48 flex flex-col h-[calc(100vh-100px)]">
                    <div className="text-2xl">
                        <Image
                            src="/meaningheader.png"
                            alt="meaning header"
                            width={338}
                            height={171}
                            className="object-cover -ml-1"
                        />
                        <p className="mt-2 text-xl">cool stickers and a macchiato</p>
                    </div>
                    <div className={`relative mt-auto mb-4 ml-auto mr-12 w-fit max-w-full ${shake ? "shakec" : ""}`}>
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
