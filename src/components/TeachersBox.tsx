interface TeachersBoxProps {
  materia: string;
  nome: string;
}

export const TeachersBox: React.FC<TeachersBoxProps> = ({ materia, nome }) => {
  return (
    <div className="flex flex-col h-20">
      <h3 className="text-xs font-bold">{materia}</h3>
      <h3 className="text-xs">{nome}</h3>
    </div>
  );
};
