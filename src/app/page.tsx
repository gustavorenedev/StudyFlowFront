import NavBar from "@/components/Navbar";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="flex w-full">
        <NavBar />
        <section className="w-4/5 h-20">
          <h1 className="pb-7 pt-10 font-bold">Olá, Gustavo seja bem-vindo</h1>
          <Teachers />
        </section>
        <section className="w-1/5">
          <h2>cesar</h2>
        </section>
      </div>
    </main>
  );
}
