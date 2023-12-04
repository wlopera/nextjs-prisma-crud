import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Error: Página no Encontrada.</h1>
        <Link href="/" className="text-slate-400 text-2xl">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default notFound;
