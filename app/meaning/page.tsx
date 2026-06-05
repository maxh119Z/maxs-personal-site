"use client";

import { useState, useEffect, useRef } from "react";
import HeaderMeaning from "../components/header_meaning";
import Footer from "../components/footer";
import Link from "next/link";

// point.gif total duration (sum of frame delays in metadata) = 1890ms
const GIF_DURATION = 1890;

export default function meaningsPage() {
    // Date.now() must run only on the client to avoid SSR/hydration mismatch.
    const [gifTs, setGifTs] = useState<number | null>(null);
    const [showGif, setShowGif] = useState(true);
    const [shake, setShake] = useState(false);
    const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        setGifTs(Date.now());
        return () => {
            timersRef.current.forEach(clearTimeout);
        };
    }, []);

    const handleGifLoad = () => {
        if (timersRef.current.length > 0) return;
        timersRef.current.push(
            setTimeout(() => setShake(true),  GIF_DURATION - 230),
            setTimeout(() => setShake(false), GIF_DURATION - 230 + 300),
            setTimeout(() => setShowGif(false), GIF_DURATION),
        );
    };

    const figClass = "flex flex-col items-center max-md:w-full";
    const imgClass = "h-80 w-auto object-contain block shadow-sm max-md:h-auto max-md:w-full";
    const capClass = "mt-2 text-base opacity-60";

    return (
        <div className="flex flex-col flex-1 items-center text-black bg-white font-sans">
            <HeaderMeaning shake={shake} />

            <main className="w-full px-5 md:px-10 py-12 flex flex-col gap-20">
                {/* ── badminton ───────────────────────────────────────── */}
                <section id="badminton">
                    <h2 className="text-4xl font-light mb-6">badminton</h2>
                    <div className="flex flex-wrap items-end gap-6 justify-start">
                        <figure className={figClass}>
                            <img src="/badminton/9.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>bbc charity; 1st bmd, bms</figcaption>
                        </figure>
                       
                        <figure className={figClass}>
                            <img src="/badminton/7.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>U15 BS Pan Ams 2nd</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/badminton/6.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>EBC CRC U19 1st BS BD</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/badminton/5.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>U17 Norcal BD 2nd</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/badminton/4.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>U17 ORC BS 1st</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/badminton/3.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>CIF 5th 2025</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/badminton/2.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>Mvals 1st 2025</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/badminton/1.jpeg" alt="" className={imgClass} />
                            <figcaption className={capClass}>Organizing WeBadminton</figcaption>
                        </figure>
                    </div>
                </section>

                {/* ── locked + fun moments ────────────────────────────── */}
                <section id="locked-fun">
                    <h2 className="text-4xl font-light mb-6">locked + fun moments</h2>
                    <div className="flex flex-wrap items-end gap-6 justify-end">
                        <figure className={figClass}>
                            <img src="/lockedfun/1.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>Studying at Sujus with Edward</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/lockedfun/2.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>At NeurIPS ResponsibleFM</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/lockedfun/3.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>organizing VikingHacks</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/lockedfun/4.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>VikingHacks officer team</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/lockedfun/5.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>post in-person presentation to <Link className="text-[#0064C7]" href="https://aimslab.stanford.edu/" target="_blank" rel="noopener noreferrer">AIMS</Link> lab with Ameen</figcaption>
                        </figure>
                    </div>
                </section>

                {/* ── school ──────────────────────────────────────────── */}
                <section id="school">
                    <h2 className="text-4xl font-light mb-6">school</h2>
                    <div className="flex flex-wrap items-end gap-6 justify-start">
                        <figure className={figClass}>
                            <img src="/school/1.jpeg" alt="" className={imgClass} />
                            <figcaption className={capClass}>Calculus BC</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/school/2.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>last time (as a junior) studying in Sujus</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/school/3.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>favorite class ever: AP Lang</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <iframe
                                src="/pdfjs/web/viewer.html?file=/essay.pdf#zoom=page-width"
                                className="h-80 w-[500px] max-w-full block shadow-sm max-md:h-auto max-md:aspect-[1/1.4]"
                            />
                            <figcaption className={capClass}>lang exemplar and good worldview.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* ── other ───────────────────────────────────────────── */}
                <section id="other">
                    <h2 className="text-4xl font-light mb-6">other</h2>
                    <div className="flex flex-wrap items-end gap-6 justify-end">
                        <figure className={figClass}>
                            <img src="/others/1.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>watching <Link href="https://www.imdb.com/title/tt1190634/" target="_blank" rel="noopener noreferrer" className="text-[#0064C7]">The Boys</Link> finale with coworkers at midnight</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/others/2.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>globalization in Mexico City, Mexico</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <img src="/others/3.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>Project Hailmary</figcaption>
                        </figure>
                         <figure className={figClass}>
                            <img src="/badminton/8.png" alt="" className={imgClass} />
                            <figcaption className={capClass}>Macchu Picchu after pan ams</figcaption>
                        </figure>
                    </div>
                </section>
            </main>

            {showGif && gifTs !== null && (
                <div className="gif">
                    <img src={`/point.gif?t=${gifTs}`} alt="" className="gifimg" onLoad={handleGifLoad} />
                </div>
            )}

            <Footer />
        </div>
    );
}
