import Link from "next/link";
import React from "react";
import { Book } from "../models/bookdata";

export const getBookData = async () => {
  const data = await fetch("http://localhost:3000/api/book", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await data.json();
};

const Main = async () => {
  const { data } = await getBookData();

  return (
    <div id="main">
      <h1 className="py-8 text-5xl capitalize text-center tracking-wide">
        Available books
      </h1>

      <section>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {data.map((book: Book) => (
            <div
              className="border rounded-sm p-4 m-2 bg-red-500"
              key={book._id}
            >
              <div>
                <h2>Book | {book.booktitle}</h2>
                <h2>Author | {book.bookauthor}</h2>
              </div>

              <div>
                <h1>
                  Available | {book.available ? "In Stock" : "Out of Stock"}
                </h1>
                <h2>price | {book.price}</h2>
              </div>
              <div className="flex justify-around">
                <Link href={`/book/${book._id}`}>
                  <button
                    type="button"
                    className="uppercase border rounded-full p-2 text-gray-200 mt-4"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
