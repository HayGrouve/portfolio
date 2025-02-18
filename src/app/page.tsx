import Header from "@/components/header";
import ProjectList from "@/components/project-list";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <ProjectList />
      </main>
    </div>
  );
}
