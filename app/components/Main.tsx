import Link from "next/link";
import React from "react";
import { Book } from "../models/bookdata";

export const getBookData = async () => {
  const data = await fetch("http://localhost:3000/api/book", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return data.json();
};

const Main = async () => {
  const { data } = await getBookData();

  return (
    <div id="main">
      <h1 className="py-8 text-5xl capitalize text-[#1A202C`] text-center tracking-wide">
        Available books
      </h1>

      <section>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {data.map((book: Book) => (
            <div
              className="border rounded-t-[10px] m-2 bg-[#89c41b] h-[300px] flex justify-end items-end"
              key={book._id}
            >
              <div className="bg-[#7caf1e] h-[270px] rounded-t-[10px] w-full flex justify-end items-end">
                <div className="bg-[#7da337] rounded-t-[10px] w-full h-[250px] p-4">
                  <div className="border p-2 flex capitalize justify-between rounded-[10px] flex-col space-y-3">
                    <h2 className="text-white text-xl ">
                      Book | {book.booktitle}
                    </h2>
                    <h2>Author | {book.bookauthor}</h2>
                    <h1>
                      Available | {book.available ? "In Stock" : "Out of Stock"}
                    </h1>
                    <h2>price | {book.price}</h2>
                  </div>
                  <div className="flex justify-around">
                    <Link href={`/book/${book._id}`}>
                      <button
                        type="button"
                        className="uppercase border rounded-full p-2 text-gray-200 mt-4 hover:bg-white hover:text-[#89c41b]"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
