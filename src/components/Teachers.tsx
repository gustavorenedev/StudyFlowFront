import { TeachersBox } from "./TeachersBox";

export default function Teachers() {
  return (
    <div className="flex bg-slate-900 rounded-lg p-6 w-4/5">
      <div className="flex flex-col gap-2 w-44">
        <h2>Segunda-Feira</h2>
        <TeachersBox materia="Java Advanced" nome="João Carlos Lima" />
        <TeachersBox
          materia="Mobile Application"
          nome="Marcos Vinicius Abulquerque"
        />
      </div>

      <div className="flex flex-col gap-2 w-44">
        <h2>Terça-Feira</h2>
        <TeachersBox materia="Devops Tools & Cloud" nome="João Carlos Menk" />
        <TeachersBox materia="Java Advanced" nome="João Carlos Lima" />
      </div>

      <div className="flex flex-col gap-2 w-44">
        <h2>Quarta-Feira</h2>
        <TeachersBox
          materia="IOT, IOB & Generative IA"
          nome="Hellynson Cassio Lana"
        />

        <TeachersBox
          materia="Mobile Application"
          nome="Marcos Vinicius Abulquerque"
        />
      </div>

      <div className="flex flex-col gap-2 w-44">
        <h2>Quinta-Feira</h2>
        <TeachersBox
          materia="Advanced Development With .NET"
          nome="Caio Halbert Jacinto"
        />

        <TeachersBox materia="Devops Tools & Cloud" nome="João Carlos Menk" />
      </div>

      <div className="flex flex-col gap-2 w-44">
        <h2>Sexta-Feira</h2>
        <TeachersBox
          materia="Mastering Relational and Non-Relational Database"
          nome="Milton Salvador Cavaliere Junior"
        />

        <TeachersBox
          materia="Compliance, Quality Assurance & Tests"
          nome="Paulo Roberto da Silva"
        />
      </div>
    </div>
  );
}
