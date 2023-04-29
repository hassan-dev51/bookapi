import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 bottom-0">
      <nav className="bg-gray-100 px-14 py-5 flex justify-between items-center shadow-md ">
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-gray-400">Books</h1>
        </Link>

        <Link href="/register">
          <button className="btn-bg md:px-4 md:py-3 px-2 py-1 md:text-xl text-sm font-bold outline-none border-none rounded-[10px]">
            Sign Up
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
