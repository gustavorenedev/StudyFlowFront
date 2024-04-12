import NavBar from "@/components/Navbar";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-full text-center">
        <NavBar />
        <section className="w-4/5">
          <h1 className="pt-24">Olá, Gustavo bem-vindo</h1>
          <Teachers />
        </section>
        <section className="w-1/5">
          <h2>cesar</h2>
        </section>
      </div>
    </main>
  );
}
