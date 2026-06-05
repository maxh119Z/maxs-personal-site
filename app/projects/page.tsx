"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header_projects";
import Footer from "../components/footer"
import Image from "next/image";


export default function projectsPage(){
    const [showMore, setShowMore] = useState(true);
    const [showMoreSecond, setShowMoreSecond] = useState(true);
    const [showMoreThird, setShowMoreThird] = useState(false);
    const [showMoreFourth, setShowMoreFourth] = useState(false);
    const [showBadminton, setShowBadminton] = useState(false);
    const [showUnifyImage, setShowUnifyImage] = useState(false);
    const [showGameSwordImage, setShowGameSwordImage] = useState(false);

    // On mobile, default all the expanded panels to collapsed.
    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
            setShowMore(false);
            setShowMoreSecond(false);
        }
    }, []);

    return (
        <div className="flex flex-col flex-1 items-center justify-center text-black bg-white font-sans">
            <Header/>

            <main className="px-5 md:px-10 relative w-full flex-1 flex-col">
                <h1 id = "research" className="mt-5 text-4xl">Research</h1>
                <h1 id = "research" className="mt-1 text-lg">For less information or awards, just check my <Link className="text-[#0064C7]" href="https://www.linkedin.com/in/max-zhang-524b72361/" target="_blank" rel="noopener noreferrer">Linkedin.</Link></h1>
                
                {/* paper 1 */}
                <div className="transition-all w-full py-7 flex-1 flex flex-row flex-start items-start gap-10 justify-center max-md:flex-col max-md:items-stretch max-md:gap-6">
                    {/* mobile-only title above iframe */}
                    <h2 className="hidden max-md:block max-md:order-1 text-1xl py-3 font-black text-center">Why Do Safety Guardrails Degrade Across Languages?</h2>
                    <div className="relative w-[29.166%] max-md:!w-full max-md:order-2 text-center flex flex-col">
                        <h2 className="text-1xl py-3 max-md:hidden">Research Paper</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="/pdfjs/web/viewer.html?file=https://arxiv.org/pdf/2605.17173#zoom=page-width"
                                className="w-full h-full"
                                allow="autoplay"
                            />
                        </div>
                    </div>
                    <div className="transition-all relative w-[37.5%] max-md:!w-full max-md:order-3 text-center flex flex-col">
                        <h2 className="text-1xl py-3 flex justify-center font-black max-md:hidden">Why Do Safety Guardrails Degrade Across Languages?</h2>
                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap"><p className="font-semibold">Max Zhang<span className="text-s align-top relative -top-1">*</span></p>, Ameen Patel<span className="text-s align-top relative -top-1">*</span>, Sang Truong<span className="text-s align-top relative -top-1">**</span>, Sanmi Koyejo<span className="text-s align-top relative -top-1">**</span></div>
                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap"><span className="text-s align-top relative -top-1">*</span>: Equal contribution, <span className="text-s align-top relative -top-1">**</span>: Equal senior authorship</div>
                        <div className="text-1xl flex flex-row justify-center opacity-70">Under submission at COLM</div>
                        <div className="flex flex-row justify-center gap-5 flex-wrap">
                            <Link className={`py-3 flex text-[#0064C7] ${!showMore ? 'max-md:hidden' : ''}`} href="https://github.com/aims-foundations/safety-irt" target="_blank" rel="noopener noreferrer">[Github]</Link>
                            <Link className={`py-3 flex text-[#0064C7] ${!showMore ? 'max-md:hidden' : ''}`} href="https://arxiv.org/pdf/2605.17173" target="_blank" rel="noopener noreferrer">[PDF]</Link>
                            <Link className={`py-3 flex text-[#0064C7] ${!showMore ? 'max-md:hidden' : ''}`} href="https://huggingface.co/datasets/aims-foundations/safety-irt/tree/main" target="_blank" rel="noopener noreferrer">[Data]</Link>
                            <Link className={`py-3 flex text-[#0064C7] ${!showMore ? 'max-md:hidden' : ''}`} href="https://arxiv.org/abs/2605.17173" target="_blank" rel="noopener noreferrer">[Arxiv]</Link>
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="py-3 text-[#0064C7] hover:opacity-70">
                                {showMore ? "▲" : "▼"}
                            </button>
                        </div>
                        <div
                            className={`
                                mt-2 overflow-hidden transition-all duration-500 ease-in-out
                                ${showMore ? " opacity-100" : "max-h-0 opacity-0"}
                            `}
                        >
                            <Image
                                src="/header.png"
                                alt="Research overview image"
                                width={389}
                                height={172}
                                className="w-full h-auto object-cover"
                            />
                            <p className="mt-2 text-base">
                                4/3/26: visiting Sang with Ameen (also Dr. Yibo Zhang)
                            </p>
                        </div>
                    </div>
                    <div
                        className={`relative text-center flex flex-col overflow-hidden transition-all duration-500 ease-in-out max-md:order-4 ${showMore ? 'max-md:!w-full' : 'max-md:!hidden'}`}
                        style={{
                            width: showMore ? "29.166%" : "0px",
                            pointerEvents: showMore ? "auto" : "none",
                        }}
                        >
                        <h2 className="text-1xl py-3">Research Notes</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="https://drive.google.com/file/d/1foEO32ld45-J0xfPDT6m8GNRIRmn4-h7/preview"
                                className="w-full h-full"
                                allow="autoplay"
                            />
                        </div>
                </div>
                </div>

                {/* paper 2 */}
                <div className="transition-all w-full py-7 flex-1 flex flex-row flex-start items-start gap-10 justify-center max-md:flex-col max-md:items-stretch max-md:gap-6">
                    {/* mobile-only title above iframe */}
                    <h2 className="hidden max-md:block max-md:order-1 text-1xl py-3 font-black text-center">LLMs can Annotate Attribution Graphs</h2>
                    <div
                        className={`relative text-center flex flex-col overflow-hidden transition-all duration-500 ease-in-out max-md:order-4 ${showMoreSecond ? 'max-md:!w-full' : 'max-md:!hidden'}`}
                        style={{
                            width: showMoreSecond ? "29.166%" : "0px",
                            pointerEvents: showMoreSecond ? "auto" : "none",
                        }}>
                        <h2 className="text-1xl py-3">Research Notes</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="https://drive.google.com/file/d/1spzkBKJaLNcSROjvdgrPE443c8xCx9ND/preview"
                                className="w-full h-full"
                                allow="autoplay"
                            />
                        </div>
                    </div>

                    <div className="transition-all relative w-[37.5%] max-md:!w-full max-md:order-3 text-center flex flex-col">
                        <h2 className="text-1xl py-3 flex justify-center font-black max-md:hidden">
                            LLMs can Annotate Attribution Graphs
                        </h2>

                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap">
                            <p className="font-semibold">
                                Ameen Patel
                                <span className="text-s align-top relative -top-1">*</span>
                            </p>
                            , Max Zhang
                            <span className="text-s align-top relative -top-1">*</span>
                            , Nathan Hu.
                        </div>

                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap">
                            <span className="text-s align-top relative -top-1">*</span>: Equal contribution
                        </div>

                        <div className="text-1xl flex flex-row justify-center opacity-70">
                            Under review at ICML Mech Interp
                        </div>

                        <div className="flex flex-row justify-center gap-5 flex-wrap">
                            <Link
                                className={`py-3 flex text-[#0064C7] ${!showMoreSecond ? 'max-md:hidden' : ''}`}
                                href="https://github.com/maxh119Z/circuit-tracer-automation" target="_blank" rel="noopener noreferrer"
                            >
                                [Github]
                            </Link>

                            <Link
                                className={`py-3 flex text-[#0064C7] ${!showMoreSecond ? 'max-md:hidden' : ''}`}
                                href="https://huggingface.co/datasets/circuit-tracer-automation/pipeline_automation" target="_blank" rel="noopener noreferrer"
                            >
                                [Data]
                            </Link>

                            <Link className={`py-3 flex text-[#0064C7] ${!showMoreSecond ? 'max-md:hidden' : ''}`} href="">
                                [Arxiv Coming Soon]
                            </Link>

                            <button
                                onClick={() => setShowMoreSecond(!showMoreSecond)}
                                className="py-3 text-[#0064C7] hover:opacity-70"
                            >
                                {showMoreSecond ? "▲" : "▼"}
                            </button>
                        </div>

                        <div
                                className={`
                                    mt-2 overflow-hidden transition-all duration-500 ease-in-out
                                    ${showMoreSecond ? " opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                <Image
                                    src="/projects/main.png"
                                    alt="Research main figure"
                                    width={200}
                                    height={100}
                                    className="w-9/12 mx-auto h-auto object-cover"
                                />
                                <p className="text-base">
                                    main figure
                                </p>
                            </div>
                    </div>

                    <div className="relative w-[29.166%] max-md:!w-full max-md:order-2 text-center flex flex-col">
                        <h2 className="text-1xl py-3 max-md:hidden">Research Paper</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="https://drive.google.com/file/d/1rHLelFHrT7SnYm3PymH75EVKIPIvBo7N/preview"
                                className="w-full h-full"
                                allow="autoplay"
                            />
                        </div>
                    </div>
                </div>

                {/* paper 3 */}
                <div className="transition-all w-full py-7 flex-1 flex flex-row flex-start items-start gap-10 justify-center max-md:flex-col max-md:items-stretch max-md:gap-6">
                    {/* mobile-only title above iframe */}
                    <h2 className="hidden max-md:block max-md:order-1 text-1xl py-3 font-black text-center">Response-Based Knowledge Distillation for Multilingual Jailbreak Prevention Unwittingly Compromises Safety</h2>
                    <div className="relative w-[29.166%] max-md:!w-full max-md:order-2 text-center flex flex-col">
                        <h2 className="text-1xl py-3 max-md:hidden">Research Paper</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="/pdfjs/web/viewer.html?file=https://arxiv.org/pdf/2602.11157#zoom=page-width"
                                className="w-full h-full"
                                allow="autoplay"
                            />
                        </div>
                    </div>

                    <div className="relative w-[37.5%] max-md:!w-full max-md:order-3 text-center flex flex-col">
                        <h2 className="text-1xl py-3 flex justify-center font-black max-md:hidden">
                            Response-Based Knowledge Distillation for Multilingual Jailbreak Prevention Unwittingly Compromises Safety
                        </h2>
                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap">
                            <p className="font-semibold">
                                Max Zhang
                                <span className="text-s align-top relative -top-1">*</span>
                            </p>
                            , Derek Liu, Kai Zhang, Joshua Franco, Haihao Liu
                        </div>
                        <div className="text-1xl flex flex-row justify-center opacity-70">
                            <b><span className="text-s align-top relative -top-1">*</span>: Lead author</b>
                        </div>
                        <div className="text-1xl flex flex-row justify-center opacity-70">
                            NeurIPS ResponsibleFM Workshop, <b> AACL SRW (oral)</b>
                        </div>
                        <div className="flex flex-row justify-center gap-5 flex-wrap">
                            <Link className={`py-3 flex text-[#0064C7] ${!showMoreThird ? 'max-md:hidden' : ''}`} href="https://github.com/maxh119Z/rb-distillation-mulitlingual-safety" target="_blank" rel="noopener noreferrer">[Github]</Link>
                            <Link className={`py-3 flex text-[#0064C7] ${!showMoreThird ? 'max-md:hidden' : ''}`} href="https://arxiv.org/abs/2602.11157" target="_blank" rel="noopener noreferrer">[Arxiv]</Link>
                            <button
                                onClick={() => setShowMoreThird(!showMoreThird)}
                                className="py-3 text-[#0064C7] hover:opacity-70">
                                {showMoreThird ? "▲" : "▼"}
                            </button>
                        </div>
                        <div
                            className={`
                                mt-2 flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out
                                ${showMoreThird ? " opacity-100" : "max-h-0 opacity-0"}
                            `}>
                            <Image
                                src="/projects/3-wide.png"
                                alt="Project overview wide"
                                width={2400}
                                height={800}
                                className="w-2/3 h-auto object-cover"
                            />
                            <p className="text-base">
                                Yoshua Bengio
                            </p>
                        </div>
                    </div>

                    <div
                        className={`relative text-center flex flex-col overflow-hidden transition-all duration-500 ease-in-out max-md:order-4 ${showMoreThird ? 'max-md:!w-full' : 'max-md:!hidden'}`}
                        style={{
                            width: showMoreThird ? "29.166%" : "0px",
                            pointerEvents: showMoreThird ? "auto" : "none",
                        }}>
                        <h2 className="text-1xl py-3">Mexico Group Photo</h2>
                        <div className="w-full aspect-[1200/1300] relative overflow-hidden">
                            <Image
                                src="/projects/3-tall.png"
                                alt="Project overview tall"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* paper 4 */}
                <div className="transition-all w-full py-7 flex-1 flex flex-row flex-start items-start gap-10 justify-center max-md:flex-col max-md:items-stretch max-md:gap-6">
                    {/* mobile-only title above iframe */}
                    <h2 className="hidden max-md:block max-md:order-1 text-1xl py-3 font-black text-center">Interactive Web: Leveraging AI-Driven Code Generation to Simplify Web Development Algorithms for Novice Programmers</h2>
                    <div
                        className={`relative text-center flex flex-col overflow-hidden transition-all duration-500 ease-in-out max-md:order-4 ${showMoreFourth ? 'max-md:!w-full' : 'max-md:!hidden'}`}
                        style={{
                            width: showMoreFourth ? "29.166%" : "0px",
                            pointerEvents: showMoreFourth ? "auto" : "none",
                        }}>
                        <h2 className="text-1xl py-3">Video</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="https://www.youtube.com/embed/qdrcNg7vluk"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="relative w-[37.5%] max-md:!w-full max-md:order-3 text-center flex flex-col">
                        <h2 className="text-1xl py-3 flex justify-center font-black max-md:hidden">
                            Interactive Web: Leveraging AI-Driven Code Generation to Simplify Web Development Algorithms for Novice Programmers
                        </h2>
                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap">
                            Kai Zhang, Vyom Kumar
                            <span className="text-s align-top relative -top-1">*</span>
                            , <p className="font-semibold">Max Zhang<span className="text-s align-top relative -top-1">*</span></p>
                        </div>
                        <div className="text-1xl flex flex-row justify-center opacity-70 flex-wrap">
                            <span className="text-s align-top relative -top-1">*</span>: Equal contribution
                        </div>
                        <div className="flex flex-row justify-center gap-5 flex-wrap">
                            <Link className={`py-3 flex text-[#0064C7] ${!showMoreFourth ? 'max-md:hidden' : ''}`} href="https://www.researchgate.net/publication/388410885_Interactive_Web_Leveraging_AI-Driven_Code_Generation_to_Simplify_Web_Development_Algorithms_for_Novice_Programmers" target="_blank" rel="noopener noreferrer">[Paper]</Link>
                            <Link className={`py-3 flex text-[#0064C7] ${!showMoreFourth ? 'max-md:hidden' : ''}`} href="https://www.youtube.com/watch?v=qdrcNg7vluk" target="_blank" rel="noopener noreferrer">[Video]</Link>
                            <button
                                onClick={() => setShowMoreFourth(!showMoreFourth)}
                                className="py-3 text-[#0064C7] hover:opacity-70">
                                {showMoreFourth ? "▲" : "▼"}
                            </button>
                        </div>
                    </div>

                    <div className="relative w-[29.166%] max-md:!w-full max-md:order-2 text-center flex flex-col">
                        <h2 className="text-1xl py-3 max-md:hidden">Research Paper</h2>
                        <div className="w-full aspect-[1200/1300]">
                            <iframe
                                src="https://aircconline.com/csit/papers/vol15/csit150107.pdf"
                                className="w-full h-full"
                                allow="autoplay"
                            />
                        </div>
                    </div>
                </div>

                <h1 id = "projects" className="mt-5 text-4xl">Projects <a href="#research"  className="opacity-[0.5] px-2 !text-2xl">Research</a> <a href="#hackathons"  className="opacity-[0.5] px-2 !text-2xl">Hackathons</a></h1>

                {/* badminton project */}
                <div className="w-full mt-8">
                    <div className="w-full flex flex-row items-center justify-between border-b border-black/20 py-3">
                        <h2 className="text-2xl font-black">
                            Real-Time Badminton Form Evaluation (not finished, currently working on)
                        </h2>
                        <button
                            onClick={() => setShowBadminton(!showBadminton)}
                            className="text-xl text-[#0064C7] hover:opacity-70"
                        >
                            {showBadminton ? "▲" : "▼"}
                        </button>
                    </div>

                    <div
                        className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${showBadminton ? "opacity-100" : "max-h-0 opacity-0"}
                        `}
                    >
                        <ul className="list-disc pl-8 py-4 space-y-2">
                            <li>
                                I built BIRDIE with my badminton teammate and school friend, <Link className="text-[#0064C7]" href="https://www.linkedin.com/in/angela-ye-bb12281ab/" target="_blank" rel="noopener noreferrer">Angela</Link>, to help new badminton players perfect their form.
                            </li>
                            <li>
                                Created a custom, labeled dataset of badminton players&apos; forms from our local club(s) (300-400 images).
                            </li>
                            <li>
                                We used machine learning (logistic regression) and computer vision (convolutional neural networks) to build the &quot;Form Detection&quot; feature.
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-row gap-10 py-6 h-[600px] max-md:flex-col max-md:h-auto max-md:gap-6">
                            <div className="flex-[5] flex flex-col justify-start max-md:w-full">
                                <p className="text-center pb-2">Notes</p>
                                <div className="w-full h-2/3 max-md:h-[400px]">
                                    <iframe
                                        src="https://drive.google.com/file/d/1smi1Jb2iMasL3tM9o6RAIPHk4gsY4kBD/preview"
                                        className="w-full h-full"
                                        allow="autoplay"
                                    />
                                </div>
                            </div>

                            <div className="flex-[3] flex flex-col justify-center max-md:w-full">
                                <p className="text-center pb-2">App Home Page</p>
                                <div className="w-full h-5/6 relative max-md:h-[400px]">
                                    <Image
                                        src="/homepage.png"
                                        alt="BIRDIE home screen"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-[5] flex flex-col justify-end max-md:w-full">
                                <p className="text-center pb-2">Demo</p>
                                <div className="w-full h-2/3 max-md:h-[300px]">
                                    <iframe
                                        src="https://www.youtube.com/embed/SDFEYmgquDs"
                                        className="w-full h-full"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                    </div>
                </div>

                 <h1 id = "hackathons" className="mt-5 text-4xl">Hackathons <a href="#research"  className="opacity-[0.5] px-2 !text-2xl">Research</a> <a href="#projects"  className="opacity-[0.5] px-2 !text-2xl">Projects</a></h1>

                <div className="w-full flex flex-row gap-10 py-7 items-stretch max-md:flex-col max-md:gap-6">

                    {/* Unify */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-[450px]">
                            <iframe
                                src="https://www.youtube.com/embed/aJvgWYiUoP8"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        
                        <div
                            className={`
                                w-full overflow-hidden transition-all duration-500 ease-in-out
                                ${showUnifyImage ? "opacity-100 max-h-[1000px] mt-3" : "max-h-0 opacity-0"}
                            `}
                        >
                            <div className="w-full aspect-[4/3] relative">
                                <Image
                                    src="/ps5.png"
                                    alt="PS5 prize"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-center font-semibold mt-3 flex flex-row items-center justify-center gap-2">
                            <span>
                                1st overall at{" "}
                                <Link className="text-[#0064C7]" href="https://bellhacks.com/" target="_blank" rel="noopener noreferrer">
                                    Bellhacks
                                </Link>
                                , won two PS5s
                            </span>
                            <button
                                onClick={() => setShowUnifyImage(!showUnifyImage)}
                                className="text-[#0064C7] hover:opacity-70"
                            >
                                {showUnifyImage ? "▲" : "▼"}
                            </button>
                        </p>
                        <p className="text-center text-sm opacity-70">December 2025</p>
                        <div className="flex flex-row justify-center gap-5 pt-2">
                            <Link
                                className=" flex text-[#0064C7]"
                                href="https://devpost.com/software/unify-g8sw0d" target="_blank" rel="noopener noreferrer"
                            >
                                [Devpost]
                            </Link>
                            <Link
                                className="flex text-[#0064C7]"
                                href="https://github.com/pikull/unified-calendar" target="_blank" rel="noopener noreferrer"
                            >
                                [Github]
                            </Link>
                        </div>
                    </div>

                    {/* Youth4Good */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <Link
                            href="https://devpost.com/software/youth4good-website" target="_blank" rel="noopener noreferrer"
                            className="relative w-full h-[450px] overflow-hidden border-black/20 hover:opacity-90 transition"
                        >
                            <Image
                                src="/bayhacks.png"
                                alt="BayHacks"
                                fill
                                className="object-cover"
                            />
        
                        </Link>
                        <p className="text-center pt-3 font-semibold">
                            Winner of{" "}
                            <Link className="text-[#0064C7]" href="https://www.instagram.com/bay_hacks/" target="_blank" rel="noopener noreferrer">
                                BayHacks
                            </Link>
                            {" "}code4cause track, 199 participants
                        </p>
                        <p className="text-center text-sm opacity-70">September 2024</p>
                        <div className="flex flex-row justify-center gap-5 pt-2">
                            <Link
                                className="flex text-[#0064C7]"
                                href="https://devpost.com/software/youth4good-website" target="_blank" rel="noopener noreferrer"
                            >
                                [Devpost]
                            </Link>
                        </div>
                    </div>

                    {/* Game Sword */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full h-[450px]">
                            <iframe
                                src="https://www.youtube.com/embed/Uf9VX2jrEQA"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                        <div
                            className={`
                                w-full overflow-hidden transition-all duration-500 ease-in-out
                                ${showGameSwordImage ? "opacity-100 max-h-[1000px] mt-3" : "max-h-0 opacity-0"}
                            `}
                        >
                            <div className="w-full aspect-[4/3] relative">
                                <Image
                                    src="/vikinghacks_1_51.jpg"
                                    alt="VikingHacks"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-center pt-3 font-semibold flex flex-row items-center justify-center gap-2">
                            <span>
                                Runner-up at{" "}
                                <Link className="text-[#0064C7]" href="https://www.vikinghacks.com/" target="_blank" rel="noopener noreferrer">
                                    VikingHacks
                                </Link>
                                , Future of Entertainment
                            </span>
                            <button
                                onClick={() => setShowGameSwordImage(!showGameSwordImage)}
                                className="text-[#0064C7] hover:opacity-70"
                            >
                                {showGameSwordImage ? "▲" : "▼"}
                            </button>
                        </p>
                        <p className="text-center text-sm opacity-70">Feburary 2024</p>
                        <div className="flex flex-row justify-center gap-5 pt-2">
                            <Link
                                className=" flex text-[#0064C7]"
                                href="https://devpost.com/software/game-sword" target="_blank" rel="noopener noreferrer"
                            >
                                [Devpost]
                            </Link>
                        </div>

                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    );
}