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
    <nav className="flex items-center text-center flex-col w-1/5 pt-24 gap-2">
      <CameraOff size={44} />
      <h2 className="font-bold pt-9">Gustavo René</h2>
      <h3 style={{ color: "#9ca3af" }}>gustavo@gmail.com</h3>

      <div className="flex flex-col pt-10 gap-9 pb-16">
        <Button variant="light" style={{ fontSize: 22 }}>
          <BarChartBig size={18} />
          Dashboard
        </Button>
        <Button variant="light" style={{ fontSize: 22 }}>
          <CalendarDays size={18} />
          Schedule
        </Button>
        <Button variant="light" style={{ fontSize: 22 }}>
          <NotebookPen size={18} />
          HomeWork
        </Button>
        <Button variant="light" style={{ fontSize: 22 }}>
          <ContactRound size={18} />
          Teachers
        </Button>
      </div>

      <Button variant="light" className="font-bold" style={{ fontSize: 22 }}>
        <LogOut size={18} /> Log out
      </Button>
    </nav>
  );
}
