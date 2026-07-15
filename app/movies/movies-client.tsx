"use client"
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header_movies";
import Footer from "../components/footer";
import { MOVIES } from "../components/movies";
import { useState } from "react";

// collage is 3 columns on desktop, 2 on mobile
const COLLAGE_SIZES = "(max-width: 767px) 50vw, 33vw";

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
                   <div className="mt-15 text-center align-center grid grid-cols-3 grid-rows-3 h-[calc(100vh)] max-md:grid-cols-2 max-md:grid-rows-none max-md:h-auto max-md:auto-rows-auto max-md:gap-4">
                        {/* <div className="w-full h-1/3 flex flex-row"> */}
                            <div className="grid grid-rows-2 gap-4 min-h-0">
                                <Image
                                src="/movies/blurryrryan.png"
                                alt="ryan"
                                width={1294}
                                height={718}
                                sizes={COLLAGE_SIZES}
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                                <Image
                                src="/movies/lotr.png"
                                alt="ryan"
                                width={1834}
                                height={930}
                                sizes={COLLAGE_SIZES}
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col">
                                {!hopinvisible && <a href="#title" onClick={clickhop}>hop in, click</a>}

                                <Image
                                src="/movies/groupphoto.png"
                                alt="grouphoto"
                                width={2144}
                                height={1012}
                                sizes={COLLAGE_SIZES}
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />


                            </div>

                            <Image
                            src="/movies/watching movies.png"
                            alt="amc"
                            width={1772}
                            height={1276}
                            sizes={COLLAGE_SIZES}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        {/* </div> */}
                        {/* <div className="w-full h-1/3 flex flex-row"> */}
                            <Image
                            src="/movies/michael.png"
                            alt="michael"
                            width={960}
                            height={732}
                            sizes={COLLAGE_SIZES}
                            className="w-full p-5 h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                            <div className="mt-7 flex flex-col max-md:col-span-2">
                                <h1 id = "title" className="text-4xl self-center max-md:text-2xl">Part-time at AMC Theaters</h1>
                                <h2 className="text-1xl text-gray max-md:text-sm">since august 2025. ask me about weird work stories</h2>
                            </div>

                            <Image
                            src="/movies/coworkers.png"
                            alt="ghibli heron"
                            width={1254}
                            height={1500}
                            sizes={COLLAGE_SIZES}
                            className="w-full h-full mt-1 py-2 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        {/* </div> */}
                        {/* <div className="w-full h-1/3 flex flex-row"> */}
                           <div className="grid grid-cols-2 gap-4 min-h-0">
                                <Image
                                src="/movies/amc.png"
                                alt="amc"
                                width={1116}
                                height={1242}
                                sizes={COLLAGE_SIZES}
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                                <Image
                                src="/movies/dartboard.png"
                                alt="dartboard"
                                width={1154}
                                height={1334}
                                sizes={COLLAGE_SIZES}
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <Image
                            src="/movies/akazagood.png"
                            alt="akaza"
                            width={1322}
                            height={1118}
                            sizes={COLLAGE_SIZES}
                            className="w-5/6 mb-15 ml-5 self-center h-5/6 object-contain transition-transform duration-300 hover:scale-105"
                            />
                            <Image
                            src="/movies/boys.jpeg"
                            alt="homelander"
                            width={1024}
                            height={768}
                            sizes={COLLAGE_SIZES}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        {/* </div> */}

                   </div>

                    {/* movies in genearl */}
                    <h1 className="mt-15 text-4xl mb-3 self-center max-md:text-2xl">Movies, films, and anime in general</h1>
                    <h1 className=" text-2xl mb-7 self-center max-md:text-base">Mostly from during Junior year. I usually watch something every week. This started because of <a className="text-[#0064C7]" href="#title">AMC</a> and surprisingly AP Lang, which made media more interesting in general. Follow my new <Link className="text-[#0064C7]" href="https://letterboxd.com/maxz119/" target="_blank" rel="noopener noreferrer">letterboxd.</Link></h1>


                    <div className="mb-15 w-full">
                        <button
                            onClick={() => setShowRankings(!showRankings)}
                            className="text-xl text-[#0064C7] hover:opacity-70"
                        >
                            recent watches {showRankings ? "▲" : "▼"}
                        </button>
                        {showRankings && (
                            <a href="#lossy" className="hidden max-md:inline-block ml-4 text-xl text-[#0064C7] hover:opacity-70">
                                scroll down ↓
                            </a>
                        )}
                        <div
                            className={`
                                mt-2 overflow-hidden transition-all duration-500 ease-in-out
                                ${showRankings ? "opacity-100" : "max-h-0 opacity-0"}
                            `}
                        >
                            <div className="w-full flex flex-row gap-10 h-[80vh] max-md:flex-col max-md:h-auto max-md:gap-8">
                                <div className="w-1/2 overflow-y-auto max-md:w-full max-md:h-[60vh]">
                                    <table className="w-full border-collapse border border-gray-300 text-left font-sans">
                                        <thead className="sticky top-0 bg-white">
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2">Movies (top = more recently watched)</th>
                                                <th className="border border-gray-300 px-4 py-2 w-32">Rating / 10</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {MOVIES.map(([title, rating]) => (
                                                <tr key={title}>
                                                    <td className="border border-gray-300 px-4 py-1">{title}</td>
                                                    <td className="border border-gray-300 px-4 py-1">{rating}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div id="lossy" className="w-1/2 flex flex-col max-md:w-full scroll-mt-4">
                                    <p className="mb-3">Lossy metrics (Rating /10) aren't nice. Feel free to skim through braindumps I write down after watches. Some are detailed, some aren't.</p>
                                    <iframe className="flex-1 max-md:h-[70vh]" src="/pdfjs/web/viewer.html?file=/movies/life.pdf"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
    );
}