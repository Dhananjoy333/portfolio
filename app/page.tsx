import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import ProjectsTransition from "./_component/ProjectsTransition";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-start">
      {/* Hero → Projects Continuous Scroll Transition */}
      <ProjectsTransition>
        <div className="w-full max-w-[1580px] bg-white relative flex flex-col min-h-dvh">
          <Navbar name="Brahma." />
          <Hero />
        </div>
      </ProjectsTransition>
    </main>
  );
}
