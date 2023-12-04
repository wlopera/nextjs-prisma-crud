"use client";

import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();

  const { id, title, description, credatedAt } = task;
  
  return (
    <div      
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
      onClick={() => {
        router.push("/task/edit/" + id);
      }}
    >
      <h3 className="font-bold text-2xl mb-2">{title}</h3>
      <p>{description}</p>
      <p>{new Date(credatedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
