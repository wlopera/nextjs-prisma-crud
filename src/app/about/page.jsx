import React from "react";

const AboutPage = () => {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold my-5">Acerca de</h1>
        <p className="my-2">Aplicación CRUD Prisma - NextJS</p>
        <p>autor: wlopera - @2023</p>
      </div>
    </section>
  );
};

export default AboutPage;
