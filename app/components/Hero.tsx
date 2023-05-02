import Link from "next/link";

const Hero = () => {
  return (
    <div className=" flex justify-evenly items-center h-[90vh] px-4">
      <section className="text-center mt-10 space-y-9">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
          Learning Makes Man Perfect
        </h1>

        <p className="capitalize text-[#1A202C]">
          we deals with all kinds of books related to technology medical
          engineering fashion agriculture and history
        </p>

        <h3>
          <Link
            href={"#main"}
            className="capitalize text-[#fff]  border-none p-4 rounded-full bg-slate-500 outline-none"
          >
            Check Books
          </Link>
        </h3>
      </section>
    </div>
  );
};

export default Hero;
