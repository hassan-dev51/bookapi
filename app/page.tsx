import Hero from "./components/Hero";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Main />
    </main>
  );
}
