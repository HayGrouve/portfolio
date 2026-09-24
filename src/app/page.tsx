import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectList from "@/components/project-list";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectList />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
