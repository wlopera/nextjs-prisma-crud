"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TaskPage = ({ params }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (params.id) {
        const res = await fetch(`/api/tasks/${params.id}`);
        const data = await res.json();
        setTitle(data.title);
        setDescription(data.description);
      }
    };

    getData();
  }, [params.id]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        header: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Tarea modificada: ", data)
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        header: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Tarea creada: ", data)
    }

    console.log("Refrescar y reenviar")
    router.push("/");
    router.refresh();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
      >
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la Tarea
        </label>
        <input
          type="text"
          name=""
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la Tarea
        </label>
        <textarea
          rows="3"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"
          >
            Crear
          </button>

          {params.id && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={async () => {
                const res = await fetch(`/api/tasks/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                console.log("Respuesta del borrado: ", data);
                router.push("/")
                router.refresh()
              }}
            >
              Borrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskPage;
