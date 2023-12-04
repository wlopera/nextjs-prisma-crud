import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(task);
};

export const PUT = async (request, { params }) => {
  try {
    const data = await request.json();
    const id = Number(params.id);

    const taskUpdated = await prisma.task.update({
      where: {
        id,
      },
      data,
    });
    return NextResponse.json({
      code: 200,
      message: "Tarea actualizada",
      data: {
        ...taskUpdated,
      },
    });
  } catch (error) {
    return NextResponse.json({
      code: 400,
      message: "Error actualizando la tarea: " + id,
      error,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({
      code: 200,
      message: "Tarea eliminada",
      data: {
        ...taskRemoved,
      },
    });
  } catch (error) {
    return NextResponse.json({
      code: 400,
      message: "Error borrando la tarea: " + params.id,
      error,
    });
  }
};
