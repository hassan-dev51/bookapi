import React from "react";

type params = {
  params: {
    _id: string;
  };
};

const getSingleBook = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/book?_id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
const SingleBook = async ({ params }: params) => {
  const { data } = await getSingleBook(params._id);

  return (
    <div className="min-h-screen">
      <h1>book name is {data.booktitle}</h1>

      <div>
        <button
          type="button"
          className="uppercase border rounded-full p-2 text-gray-600 mt-4 bg-gray-400"
        >
          order now
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
