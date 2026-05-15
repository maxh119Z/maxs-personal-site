import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center text-black bg-white font-sans">
      <Header />
      <main className="w-full px-5 md:px-10 py-12">
        <div className="grid w-full grid-cols-2 gap-8 items-start">
          <Link href="/drawings" className="block w-full self-start">
            <Image
              src="/drawing/long.png"
              alt="drawings flowers"
              width={1800}
              height={1200}
              className="w-2/3 object-scale-down h-auto object-contain object-left-top"
            />
            <p className="mt-2 text-xl">arts and drawing</p>
          </Link>

          <Link href="/meaning" className="block w-full self-start">
            <Image
              src="/meaning.png"
              alt="meaning"
              width={1800}
              height={1200}
              className="w-10/12 h-auto object-contain object-left-top"
            />
            <p className="mt-2 text-xl">life and meaning</p>
          </Link>

          <Link href="/movies" className="block w-full self-start">
            <Image
              src="/movies.jpeg"
              alt="movies"
              width={1800}
              height={1200}
              className="w-10/12 h-auto object-contain object-left-top"
            />
            <p className="mt-2 text-xl">watching movies</p>
          </Link>

          <Link href="/projects" className="block w-full self-start">
            <div className="relative w-2/3 aspect-[1200/1300]">
              <iframe
                src="https://drive.google.com/file/d/1KIp_imdvIKYr7ryc2ElR_8IHjrTnJwdF/preview"
                className="absolute inset-0 w-full h-full pointer-events-none"
                allow="autoplay"
              />
            </div>

            <p className="mt-2 text-xl">projects and grinding</p>
          </Link>

         
        </div>
         
      </main>
      <Footer />
    </div>
  );
}
