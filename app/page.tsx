import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Events from "@/components/events";

export default async function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Events />
      <Skills />
      <Contact />
    </main>
  );
}
