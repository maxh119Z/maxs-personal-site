"use client";

import { useState, useEffect, useRef } from "react";
import HeaderMeaning from "../components/header_meaning";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

// point.gif total duration (sum of frame delays in metadata) = 1890ms
const GIF_DURATION = 1890;

// figures render 320px tall (h-80) on desktop, full width on mobile
const FIG_SIZES = "(max-width: 767px) 100vw, 600px";

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
                            <Image src="/badminton/9.png" alt="" width={1824} height={1050} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>bbc charity; 1st bmd, bms</figcaption>
                        </figure>

                        <figure className={figClass}>
                            <Image src="/badminton/7.png" alt="" width={1216} height={1572} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>U15 BS Pan Ams 2nd</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/badminton/6.png" alt="" width={1826} height={1268} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>EBC CRC U19 1st BS BD</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/badminton/5.png" alt="" width={2478} height={1288} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>U17 Norcal BD 2nd</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/badminton/4.png" alt="" width={1296} height={1558} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>U17 ORC BS 1st</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/badminton/3.png" alt="" width={1446} height={882} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>CIF 5th 2025</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/badminton/2.png" alt="" width={1410} height={1016} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>Mvals 1st 2025</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/badminton/1.jpeg" alt="" width={1024} height={768} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>Organizing WeBadminton</figcaption>
                        </figure>
                    </div>
                </section>

                {/* ── locked + fun moments ────────────────────────────── */}
                <section id="locked-fun">
                    <h2 className="text-4xl font-light mb-6">locked + fun moments</h2>
                    <div className="flex flex-wrap items-end gap-6 justify-end">
                        <figure className={figClass}>
                            <Image src="/lockedfun/1.png" alt="" width={1824} height={1108} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>Studying at Sujus with Edward</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/lockedfun/2.png" alt="" width={1822} height={1038} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>At NeurIPS ResponsibleFM</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/lockedfun/3.png" alt="" width={1810} height={1094} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>organizing VikingHacks</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/lockedfun/5.png" alt="" width={1832} height={1362} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>post in-person presentation to <Link className="text-[#0064C7]" href="https://aimslab.stanford.edu/" target="_blank" rel="noopener noreferrer">AIMS</Link> lab with Ameen</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/lockedfun/welcometobeaverworks.jpeg" alt="" width={768} height={1024} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>start of BWSI summer program</figcaption>
                        </figure>
                    </div>
                </section>

                {/* ── school ──────────────────────────────────────────── */}
                <section id="school">
                    <h2 className="text-4xl font-light mb-6">school</h2>
                    <div className="flex flex-wrap items-end gap-6 justify-start">
                        <figure className={figClass}>
                            <Image src="/school/2.png" alt="" width={1844} height={932} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>last time (as a junior) studying in Sujus</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/school/3.png" alt="" width={1832} height={1042} sizes={FIG_SIZES} className={imgClass} />
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
                            <Image src="/others/1.png" alt="" width={1814} height={1272} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>watching <Link href="https://www.imdb.com/title/tt1190634/" target="_blank" rel="noopener noreferrer" className="text-[#0064C7]">The Boys</Link> finale with coworkers at midnight</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/others/2.png" alt="" width={1836} height={930} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>globalization in Mexico City, Mexico</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/others/3.png" alt="" width={1702} height={1224} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>Project Hailmary</figcaption>
                        </figure>
                         <figure className={figClass}>
                            <Image src="/badminton/8.png" alt="" width={1232} height={1532} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>Macchu Picchu after pan ams</figcaption>
                        </figure>
                        <figure className={figClass}>
                            <Image src="/others/sunset.jpeg" alt="" width={2304} height={1536} sizes={FIG_SIZES} className={imgClass} />
                            <figcaption className={capClass}>mount tam sunset</figcaption>
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
