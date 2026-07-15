"use client";

import { useState } from "react";
import Header from "../components/header_hobbes";
import Footer from "../components/footer"
import { CAPTIONS } from "../components/captions";


export default function drawingsPage(){
    const [lightbox, setLightbox] = useState<string | null>(null);

    const GalleryImg = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
        <img
            src={src}
            alt={alt}
            className={`${className} cursor-zoom-in hover:opacity-85 transition-opacity`}
            onClick={() => setLightbox(src)}
        />
    );

    return (
        <div className="flex flex-col flex-1 items-center text-black bg-white font-sans">
            <section className=" flex min-h-screen w-full flex-col">
                <Header></Header>
                <main className="relative w-full flex-1 px-5">
             <div className="absolute bottom-0 left-10 right-10 flex items-end gap-0 max-md:relative max-md:left-0 max-md:right-0 max-md:bottom-auto max-md:mt-8 max-md:px-2">
            <a href="#people" className="aspect-5/3 w-[25%] text-center overflow-hidden">
                <img
                src="drawing/eye_good.jpg"
                alt="eyes"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </a>

            <a href="#artwork" className="aspect-4/3 w-[25%] text-center overflow-hidden">
                <img
                src="drawing/long_good.jpg"
                alt="flowers hana-bi"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </a>

            <a href ="#other" className="aspect-10/12 w-[25%] text-center overflow-hidden">
                <img
                src="drawing/other3.jpg"
                alt="balls"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </a>

            <a href="#ipad" className="aspect-7/10 w-[25%] text-center overflow-hidden">
                <img
                src="drawing/ipad1.jpg"
                alt="ghibli heron"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </a>
            </div>
                </main>
            </section>

            <div className="w-2/3 mt-45 mb-10 border border-gray-400"></div>

            <div className="w-2/3 px-10 grid grid-cols-3 items-center text-center">
                {/* <div className="flex flex-col items-center">
                    <p className="mt-2 text-xl mb-3">1. people</p>
                    <p className="mt-2 text-xl mb-3">2. arts</p>
                </div> */}

                <div className="flex justify-center items-center">
                    <h1 className="text-3xl font-bold">Gallery!</h1>
                </div>

                {/* <div className="flex flex-col items-center">
                    <p className="mt-2 text-xl mb-3">3. other</p>
                    <p className="mt-2 text-xl mb-3">4. ipad</p>
                </div> */}
            </div>

            <div className="w-2/3 mt-10 border border-gray-400 mb-20"></div>

            <section className="w-2/3 flex flex-col gap-32 mb-5 max-md:w-full max-md:px-4 max-md:gap-16">
                <div id = "artwork" className="scroll-mt-[15vh] flex items-center gap-8 max-md:flex-col max-md:items-stretch max-md:gap-4">
                    <h2 className="text-4xl font-light w-1/6 flex-col flex shrink-0 max-md:w-full max-md:flex-row max-md:flex-wrap max-md:gap-4">
                        <a href="#artwork"  className="underline">artwork</a>
                        <a href="#people" className="opacity-[0.5] !text-2xl">people</a>
                        <a href="#other" className="opacity-[0.5] !text-2xl">other</a>
                        <a href="#ipad" className="opacity-[0.5] !text-2xl">ipad</a>

                    </h2>
                    <div className="flex-1 flex flex-wrap items-end gap-3 max-md:gap-4">
                        <GalleryImg src="drawing/art_1.png" alt="art 1" className="h-60 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/art_yosemite.png" alt="yosemite" className="h-52 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/art_2.png" alt="art 2" className="h-64 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/long_good.jpg" alt="long good" className="h-48 w-auto object-contain max-md:h-40" />

                    </div>
                </div>

                <div id = "people" className="scroll-mt-[15vh] flex items-center gap-8 max-md:flex-col-reverse max-md:items-stretch max-md:gap-4">
                    <div className="flex-1 flex flex-wrap items-end gap-3 max-md:gap-4">
                        <GalleryImg src="drawing/people_overview.png" alt="people overview" className="h-52 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/people.png" alt="people" className="h-64 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/npeople.jpg" alt="npeople" className="h-56 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/person2.jpg" alt="person 2" className="h-60 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/eye_good.jpg" alt="eye good" className="h-56 w-auto object-contain max-md:h-40" />
                    </div>
                    <h2 className="text-4xl font-light w-1/6 flex-col flex shrink-0 max-md:w-full max-md:flex-row max-md:flex-wrap max-md:gap-4">
                        <a href="#artwork" className="opacity-[0.5] !text-2xl">artwork</a>
                        <a href="#people" className="underline">people</a>
                        <a href="#other" className="opacity-[0.5] !text-2xl">other</a>
                        <a href="#ipad" className="opacity-[0.5] !text-2xl">ipad</a>

                    </h2>
                </div>

                <div id = "other" className="scroll-mt-[15vh] flex items-center gap-8 max-md:flex-col max-md:items-stretch max-md:gap-4">
                    <h2 className="text-4xl font-light w-1/6 flex-col flex shrink-0 max-md:w-full max-md:flex-row max-md:flex-wrap max-md:gap-4">
                        <a href="#artwork"  className="opacity-[0.5] !text-2xl">artwork</a>
                        <a href="#people" className="opacity-[0.5] !text-2xl">people</a>
                        <a href="#other" className="underline">other</a>
                        <a href="#ipad" className="opacity-[0.5] !text-2xl">ipad</a>

                    </h2>
                    <div className="flex-1 flex flex-wrap items-end gap-3 max-md:gap-4">
                        <GalleryImg src="drawing/other.png" alt="other" className="h-64 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/other1.jpg" alt="other 1" className="h-52 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/other2.jpg" alt="other 2" className="h-60 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/other3.jpg" alt="other 3" className="h-56 w-auto object-contain max-md:h-40" />
                    </div>
                </div>

                <div id = "ipad" className="scroll-mt-[15vh] flex text-center align-center items-center gap-8 max-md:flex-col-reverse max-md:items-stretch max-md:gap-4">
                    <div className="flex-1 flex flex-wrap items-end gap-3 max-md:gap-4">
                        <GalleryImg src="drawing/ipad2.png" alt="ipad 2" className="h-56 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/ipad_weekend.png" alt="ipad weekend" className="h-48 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/ipad1.jpg" alt="ipad 1" className="h-64 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/ipad3.jpg" alt="ipad 3" className="h-60 w-auto object-contain max-md:h-40" />
                        <GalleryImg src="drawing/faces.png" alt="faces" className="h-52 w-auto object-contain max-md:h-40" />
                    </div>
                    <h2 className="text-4xl font-light w-1/6 flex-col flex shrink-0 max-md:w-full max-md:flex-row max-md:flex-wrap max-md:gap-4">
                        <a href="#artwork"  className="opacity-[0.5] !text-2xl">artwork</a>
                        <a href="#people" className="opacity-[0.5] !text-2xl">people</a>
                        <a href="#other" className="opacity-[0.5] !text-2xl">other</a>
                        <a href="#ipad" className="underline">ipad</a>

                    </h2>
                </div>
            </section>

            <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="mb-20 hover:scale-[1.1] hover:opacity-85 transition-all flex flex-col items-center">
                <div className="h-0 w-0 border-x-16 border-x-transparent border-b-16 border-b-blue-600"></div>
                <div className="h-1/3 border-x-2 border-solid border-b-23 border-blue-600"></div>
                <div className="opacity-[0.5]">you've reached the end</div>
            </button>



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
                    <div className="mt-6 w-full max-w-3xl min-h-20 text-white text-center text-lg leading-relaxed px-4">
                        {CAPTIONS[lightbox] || ""}
                    </div>
                </div>
            )}

            <Footer/>
        </div>
    );
}