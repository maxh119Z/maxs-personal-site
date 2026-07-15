import type { Metadata } from "next";
import DrawingsPage from "./drawings-client";

export const metadata: Metadata = {
  title: "Drawings | Max Zhang",
  description: "A gallery of pencil, marker, and iPad drawings.",
};

export default function Page() {
  return <DrawingsPage />;
}
