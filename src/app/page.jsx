import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

const loadTasks = async () => {
  //const res = await fetch("http://localhost:3000/api/tasks");
  // return await res.json();

  return await prisma.task.findMany();
};

export const revalidate = 30; // Forzar consulta luego de 60seg de cambio
export const dynamic = "force-dynamic"; // Forzar consulta siempre que actualice - no cache - Esto por ser producción.

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
