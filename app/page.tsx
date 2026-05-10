import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  const items = [
    {
      href: "/drawings",
      src: "/drawings.jpeg",
      alt: "drawings",
      label: "drawings",
      width: 1800,
      height: 1200,
    },
    {
      href: "/meaning",
      src: "/meaning.png",
      alt: "meaning",
      label: "meaning",
      width: 1800,
      height: 1200,
    },
    {
      href: "/movies",
      src: "/movies.jpeg",
      alt: "movies",
      label: "movies",
      width: 1800,
      height: 1200,
    },
    {
      href: "/projects",
      src: "/projects.jpg",
      alt: "projects",
      label: "projects",
      width: 1200,
      height: 1800,
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center text-black bg-white font-sans">
      <Header />
      <main className="w-full px-5 md:px-10 py-12">
        <div className="grid w-full grid-cols-2 gap-8 items-start">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block w-full self-start"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-2/3 h-auto object-contain object-left-top"
              />

              <p className="mt-2 text-xl">{item.label}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
