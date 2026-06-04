"use client"
import Link from "next/link";
import Header from "../components/header_movies";
import Footer from "../components/footer";
import { useState } from "react";


const movies: [string, number][] = [
    ["Trust and Betrayal (all 4 episodes)", 8.9],
    ["Memento", 8],
    ["Truman Show", 7.9],
    ["Shawshank Redemption", 8.4],
    ["Project Hailmary", 7.9],
    ["LalaLand", 8.6],
    ["Back to the Future", 8.7],
    ["Back to the Future Part II", 7.5],
    ["Back to the Future Part 3", 7.8],
    ["WarGames", 7.4],
    ["Life is Beautiful", 8],
    ["Look Back", 7.6],
    ["The Imitation Game", 7.4],
    ["Whiplash", 8],
    ["Whisper of the Heart", 7.6],
    ["The Prestige", 8.2],
    ["Grave of the Fireflies", 9.1],
    ["Spirited Away", 8.7],
    ["Princess Mononoke", 8.3],
    ["Howl’s Moving Castle", 7.4],
    ["The Lord of the Rings (all 3)", 9],
    ["Hamilton", 8.2],
    ["Avatar 3", 7],
    ["Mission: Impossible – Final Reckoning", 6.4],
    ["The Grudge", 6],
    ["Gladiator", 7.6],
    ["Free Solo", 6],
    ["Pluto episode 1", 9],
    ["The Boys", 7.9],
    ["Frieren Sea1", 9],
    ["Berserk", 8.7],
    ["FullMetal Alchemist", 9],
    ["Frieren Sea2", 8],
];

export default function moviesPage(){
    const [hopinvisible, setivisible] = useState(false);
    const [showRankings, setShowRankings] = useState(false);
    const clickhop = () =>{
        // e.preventDefault();
        setivisible(true);

    }
    return (
            <div className="flex flex-col flex-1 items-center justify-center text-black bg-white font-sans">
                <Header></Header>
                <main className="relative w-full flex-1 px-10">
                   {/* THE COOL SHIT */}
                   <div className="mt-15 text-center align-center grid grid-cols-3 grid-rows-3  h-[calc(100vh)]">
                        {/* <div className="w-full h-1/3 flex flex-row"> */}
                            <div className="grid grid-rows-2 gap-4 min-h-0">
                                <img
                                src="movies/blurryrryan.png"
                                alt="ryan"
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                                <img
                                src="movies/lotr.png"
                                alt="ryan"
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col">
                                {!hopinvisible && <a href="#title" onClick={clickhop}>hop in, click</a>}

                                <img
                                src="movies/groupphoto.png"
                                alt="grouphoto"
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />


                            </div>
                            
                            <img
                            src="movies/watching movies.png"
                            alt="amc"
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        {/* </div> */}
                        {/* <div className="w-full h-1/3 flex flex-row"> */}
                            <img
                            src="movies/michael.png"
                            alt="michael"
                            className="w-full p-5 h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                            <div className="mt-7 flex flex-col">
                                <h1 id = "title" className="text-4xl self-center ">Part-time at AMC Theaters</h1>
                                <h2 className="text-1xl text-gray">since august 2025. ask me about weird work stories</h2>
                            </div>
                            
                            <img
                            src="movies/coworkers.png"
                            alt="ghibli heron"
                            className="w-full h-full mt-1 py-2 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        {/* </div> */}
                        {/* <div className="w-full h-1/3 flex flex-row"> */}
                           <div className="grid grid-cols-2 gap-4 min-h-0">
                                <img
                                src="movies/amc.png"
                                alt="amc"
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                                <img
                                src="movies/dartboard.png"
                                alt="dartboard"
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <img
                            src="movies/akazagood.png"
                            alt="akaza"
                            className="w-5/6 mb-15 ml-5 self-center h-5/6 object-contain transition-transform duration-300 hover:scale-105"
                            />
                            <img
                            src="movies/michael1.png"
                            alt="gmichael"
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        {/* </div> */}

                   </div>

                    {/* movies in genearl */}
                    <h1 className="mt-15 text-4xl mb-3 self-center ">Movies, films, and anime in general</h1>
                    <h1 className=" text-2xl mb-7 self-center ">Mostly from during Junior year. I usually watch something every week. This started because of <a className="text-[#0064C7]" href="#title">AMC</a> and surprisingly AP Lang, which made media more interesting in general. Follow my new <Link className="text-[#0064C7]" href="https://letterboxd.com/maxz119/" target="_blank" rel="noopener noreferrer">letterboxd.</Link></h1>


                    <div className="mb-15 w-full">
                        <button
                            onClick={() => setShowRankings(!showRankings)}
                            className="text-xl text-[#0064C7] hover:opacity-70"
                        >
                            recent watches {showRankings ? "▲" : "▼"}
                        </button>
                        <div
                            className={`
                                mt-2 overflow-hidden transition-all duration-500 ease-in-out
                                ${showRankings ? "opacity-100" : "max-h-0 opacity-0"}
                            `}
                        >
                            <div className="w-full flex flex-row gap-10 h-[80vh]">
                                <div className="w-1/2 overflow-y-auto">
                                    <table className="w-full border-collapse border border-gray-300 text-left font-sans">
                                        <thead className="sticky top-0 bg-white">
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2">Movies (top = more recently watched)</th>
                                                <th className="border border-gray-300 px-4 py-2 w-32">Rating / 10</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {movies.map(([title, rating]) => (
                                                <tr key={title}>
                                                    <td className="border border-gray-300 px-4 py-1">{title}</td>
                                                    <td className="border border-gray-300 px-4 py-1">{rating}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="w-1/2 flex flex-col">
                                    <p className="mb-3">Lossy metrics (Rating /10) aren't nice. Feel free to skim through braindumps I write down after watches. Some are detailed, some aren't.</p>
                                    <iframe className="flex-1" src="/pdfjs/web/viewer.html?file=/movies/life.pdf"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
    );
}