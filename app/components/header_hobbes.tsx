"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [quote, setQuote] = useState("");
    const [attribution, setAttribution] = useState("");
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
        <div className="flex w-full text-2xl grow mb-4">
            <div className="w-19/48 flex items-start">
                <Link href="/">Max Zhang</Link>
            </div>
            <div className="w-29/48 flex flex items-start gap-6">
                <Link href="/drawings">drawings</Link>
                <Link href="/projects">projects</Link>
                <Link href="/meaning">life</Link>
                <Link href="/movies">movies</Link>
            </div>
        </div>
        <div className="mt-4 flex flex-row w-full">
            <div className="w-19/48"> 
                <Image
                    src="/selfie.jpeg"
                    alt="Max Zhang"
                    width={256}
                    height={256}
                    className="aspect-square object-cover"
                />
            </div>
        <div id="welcome" className="relative w-29/48 text-2xl">
            <Image
                src="/8w8hnpsle8la1.jpg"
                alt="calvin_hobbes"
                width={541}
                height={172}
                className="object-cover -ml-1"
            />
            <Link href = "https://www.reddit.com/r/calvinandhobbes/comments/8f52ej/i_colorized_my_favorite_calvin_and_hobbes_strip/" className="mt-2 text-xl">Link to comic strip</Link>
        </div>

        
        </div>
        <div className={`mt-4 w-1/3 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h2 className="opacity-80">{quote}</h2>
            <h3 className="opacity-50"> {attribution}<button onClick={()=>window.location.reload()} className = "pointer-events-auto ml-5 text-[#0064C7]">Refresh</button><Link className="ml-5 text-[#0064C7]" href="https://github.com/maxh119Z/simple-personal-quotes">your own mac widget</Link></h3>
        </div>

    </header>
    );
}
