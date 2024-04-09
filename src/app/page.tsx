import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center w-full text-center">
        <NavBar />
        <section className="w-4/5">
          <h2>igota tonto</h2>
        </section>
        <section className="w-1/5">
          <h2>cesar</h2>
        </section>
      </div>
    </main>
  );
}
