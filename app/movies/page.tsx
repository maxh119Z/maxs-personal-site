import type { Metadata } from "next";
import MoviesPage from "./movies-client";

export const metadata: Metadata = {
  title: "Movies | Max Zhang",
  description:
    "Part-time job at AMC Theaters and some of my watched movies, anime, and more.",
};

export default function Page() {
  return <MoviesPage />;
}
