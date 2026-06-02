import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 font-sans">
      <main className="w-full flex flex-col px-6 py-5 gap-5">
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
}