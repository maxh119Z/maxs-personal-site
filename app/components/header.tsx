"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation'

export default function Header({ children }: { children?: React.ReactNode } = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const [quote, setQuote] = useState("");
    const [attribution, setAttribution] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/'

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
                            My name is Max Zhang. I am currently a junior at Irvington High School. In my freetime, you may find me <Link className="text-[#4A90E2]" href="/drawings">drawing</Link>, watching <Link className="text-[#4A90E2]" href="/movies">movies</Link>, playing <Link className="text-[#4A90E2]" href="/meaning">badminton</Link>, or working my part-time at <Link className="text-[#4A90E2]" href="https://www.amctheatres.com/" target="_blank" rel="noopener noreferrer">AMC Theaters</Link> (and much more). This site is also my everything collection of technical research and personal projects, and everything else that matters. For more technical people, I am interested in multilingual AI safety research, mechanistic interpretability, and measurement science. Special thanks to my mentors thus far: <Link className="text-[#4A90E2]" href="https://ai.stanford.edu/~sttruong/" target="_blank" rel="noopener noreferrer">Sang Truong</Link>, <Link className="text-[#4A90E2]" href="https://nathanhu0.github.io/" target="_blank" rel="noopener noreferrer">Nathan Hu</Link>, and <Link className="text-[#4A90E2]" href="https://www.linkedin.com/in/haihaoliu/" target="_blank" rel="noopener noreferrer">Haihao Liu</Link>. Feel free to leave feedback! I spent a while learning and personally coding a good portion of this site.
                        </p>
                    </div>
                </div>
                <div className={`mt-4 w-1/3 transition-opacity duration-1000 max-md:w-2/3 max-md:mx-auto max-md:text-center ${isVisible ? "opacity-100" : "opacity-0"}`}>
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
                    <div className={`mt-4 transition-opacity duration-1000 max-md:text-center ${isVisible ? "opacity-100" : "opacity-0"}`}>
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
