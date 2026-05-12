"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';

export default function Footer() {
   
    return (
    <footer className="px-5 md:px-10 py-3 flex w-full flex-col">
        <div className="flex w-full text-1xl grow mb-4">
            <div className="w-19/48 flex items-start">
                <a href="maxhzhang119@gmail.com">maxhzhang119@gmail.com</a>

            </div>
            <div className="w-29/48 flex flex items-start gap-6">
                <Link href="https://github.com/maxh119Z">github</Link>
                <Link href="https://www.linkedin.com/in/max-zhang-524b72361/">linkedin</Link>
                <Link href="https://letterboxd.com/maxz119/">letterboxd</Link>
                <Link href="https://www.instagram.com/maxzhang19/">instagram</Link>
            </div>
      
        </div>
       
    </footer>
    );
}
