import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-start">
      {/*
        Continuous White Canvas:
        - Entire page and viewport background is white.
        - No black outer borders, margins, or shadows.
        - The hero seamlessly blends into the full-width viewport canvas.
        - Extensible structure so subsequent sections (Projects, About, etc.) can be appended below without changing hero architecture.
      */}
      <div className="w-full max-w-[1580px] bg-white relative flex flex-col min-h-dvh">
        <Navbar name="Brahma." />
        <Hero
          name="DHANANJOY BRAHMA"
          roleLines={["FULL", "STACK", "DEVELOPER"]}
          description={[
            "Specialized in Web Development,",
            "UI/UX, Interactive Experiences,",
            "and Full-Stack Applications.",
          ]}
        />
        {/* Subsequent sections (Projects, About, Services, etc.) can be added directly here */}
      </div>
    </main>
  );
}
