import { Button } from "@nextui-org/react";
import {
  BarChartBig,
  CalendarDays,
  CameraOff,
  ContactRound,
  LogOut,
  NotebookPen,
} from "lucide-react";

export default function NavBar() {
  return (
    <nav className="flex flex-col justify-around">
      <div className="flex flex-col items-center">
        <CameraOff size={44} />
        <h2 className="font-bold pt-9">Gustavo René</h2>
        <h3 style={{ color: "#9ca3af" }}>gustavo@gmail.com</h3>
      </div>

      <div className="flex flex-col pt-10 gap-9 pb-16">
        <Button variant="light" className="text-xl justify-start">
          <BarChartBig size={18} />
          Gráficos
        </Button>

        <Button variant="light" className="text-xl justify-start">
          <CalendarDays size={18} />
          Calendário
        </Button>

        <Button variant="light" className="text-xl justify-start">
          <NotebookPen size={18} />
          Lição de casa
        </Button>

        <Button variant="light" className="text-xl justify-start">
          <ContactRound size={18} />
          Professores
        </Button>
      </div>
      <Button variant="light" className="text-2xl font-bold justify-start">
        <LogOut size={18} /> Log out
      </Button>
    </nav>
  );
}
