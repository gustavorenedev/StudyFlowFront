interface TeachersBoxProps {
  materia: string;
  nome: string;
}

export const TeachersBox: React.FC<TeachersBoxProps> = ({ materia, nome }) => {
  return (
    <div className="flex flex-col gap-5 pb-3">
      <div className="flex flex-col gap-2">
        <h3>{materia}</h3>
        <h3>{nome}</h3>
      </div>
    </div>
  );
};
