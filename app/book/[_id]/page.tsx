import { Metadata } from "next";
import Link from "next/link";

type params = {
  params: {
    _id: string;
  };
};

export async function generateMetadata({ params }: params): Promise<Metadata> {
  const { data } = await getSingleBook(params._id);
  return {
    title: data.booktitle,
    description: data.description,
  };
}
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
  console.log(data);

  return (
    <div className="">
      <div className="bg-[#7caf1e] rounded-t-[10px] w-[860px] m-auto mt-20 p-5">
        <div className="border p-2 flex capitalize justify-between rounded-[10px] flex-col space-y-3 items-center">
          <h2 className="text-white text-3xl">Book {data.booktitle}</h2>
          <h2>Author Name | {data.bookauthor}</h2>
          <p>Description | {data.description}</p>
          <h2>price | {data.price}</h2>
          <h1>Available | {data.available ? "In Stock" : "Out of Stock"}</h1>
        </div>
        <div>
          <Link href="/order">
            <button
              type="button"
              className="uppercase border-none rounded-full p-2 text-gray-600 mt-4 bg-gray-400"
            >
              order now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
