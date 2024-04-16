interface CardTaskProp {
  task: string;
}

export const CardTask: React.FC<CardTaskProp> = ({ task }) => {
  return (
    <div className="bg-slate-700 p-4 rounded-lg">
      <li>{task}</li>
    </div>
  );
};
