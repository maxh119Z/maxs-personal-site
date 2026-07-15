import type { Metadata } from "next";
import MeaningPage from "./meaning-client";

export const metadata: Metadata = {
  title: "Life | Max Zhang",
  description: "Competitive badminton, school, travel, and other moments.",
};

export default function Page() {
  return <MeaningPage />;
}
