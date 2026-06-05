import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxzhang1.me"),
  title: "Max Zhang",
  description: "Max Zhang's personal site, a Junior at Irvington High school: AI research and projects, plus drawing, movies, badminton, and life.",
  openGraph: {
    title: "Max Zhang",
    images: ["/selfie.jpeg"],
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Max Zhang",
  url: "https://maxzhang1.me/", // swap to your custom domain once it's live
  jobTitle: "Student at Irvington High School",
  affiliation: { "@type": "EducationalOrganization", name: "Irvington High School" },
  description:
    "I like drawing, watching movies and film, playing competitive Badminton, and researching multilingual AI safety, mechanistic interpretability, and measurement science.",
  sameAs: [
    "https://github.com/maxh119Z",
    "https://www.linkedin.com/in/max-zhang-524b72361/",
    "https://letterboxd.com/maxz119/",
    "https://www.instagram.com/maxzhang19/",
    "https://openreview.net/profile?id=~Max_Zhang2",
    "https://www.facebook.com/max.zhang.760398"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}



        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      </body>
      
    </html>
  );
}
