import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import ProjectsTransition from "./_component/projects-transition/ProjectsTransition";
import CreamyTransition from "./_component/CreamyTransition";
import AboutSection from "./_component/about/AboutSection";
import EducationSection from "./_component/education/EducationSection";
import ContactSection from "./_component/contact/ContactSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-start relative">
      {/* Persistent Sticky Navbar */}
      <Navbar name="Brahma." />

      {/* Hero → Projects Continuous Scroll Transition */}
      <ProjectsTransition>
        <div className="w-full max-w-[1580px] bg-white relative flex flex-col h-full pt-14 sm:pt-16 md:max-lg:pt-20 lg:pt-14 xl:pt-15 2xl:pt-24">
          <Hero />
        </div>
      </ProjectsTransition>

      {/* Creamy Transition Divider */}
      <CreamyTransition />

      {/* About Me Section */}
      <AboutSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
