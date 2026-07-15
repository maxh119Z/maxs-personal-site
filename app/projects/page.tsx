import type { Metadata } from "next";
import ProjectsPage from "./projects-client";

export const metadata: Metadata = {
  title: "Projects | Max Zhang",
  description:
    "My research on multilingual AI safety with knowledge distillation (NeurIPS ResponsibleFM) and measurement science (COLM main), automating attribution graphs (ICML Mech Interp), hackathon wins, and a Badminton form classifier app.",
};

export default function Page() {
  return <ProjectsPage />;
}
