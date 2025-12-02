import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import ProjectList from "@/components/project-list";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Skills />
        <Experience />
        <ProjectList />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
