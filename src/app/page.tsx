"use client";
import BasicDateCalendar from "@/components/Calendar";
import { CardTask } from "@/components/CardTask";
import { Graphic } from "@/components/Graphic";
import NavBar from "@/components/Navbar";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="flex w-full justify-evenly">
        <NavBar />

        <section className="flex flex-col items-center">
          <h1 className="pb-7 pt-10 font-bold text-2xl">
            Olá Gustavo, seja bem-vindo!
          </h1>
          <Teachers />
          <div className="w-4/5">
            <Graphic />
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="bg-slate-600 rounded-xl">
            <BasicDateCalendar />
          </div>
          <div className="h-3/6 bg-slate-900 w-full flex flex-col justify-evenly rounded-xl p-4">
            <h2 className="text-center">Segunda-Feira</h2>
            <div className="flex flex-col gap-5">
              <CardTask task="Estudar Java" />
              <CardTask task="Fazer Lição de casa" />
              <CardTask task="Checkpoint Python" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
