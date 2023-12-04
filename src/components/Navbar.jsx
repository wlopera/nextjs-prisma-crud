import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-700">
      <div className=" container mx-auto flex justify-between items-center py-3 px-10">
        <Link href="/" className="text-emerald-400 hover:text-emerald-200">
          <h3 className="font-bold text-3xl">Tareas</h3>
        </Link>
        <ul className=" flex gap-2 text-lg font-bold gap-5 mx-10">
          <li>
            <Link
              href="/task"
              className="text-emerald-400 hover:text-emerald-200"
            >
              Nueva
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-emerald-400 hover:text-emerald-200"
            >
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
