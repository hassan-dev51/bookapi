import React from "react";

const Main = () => {
  return (
    <div id="main">
      <h1 className="py-8 text-5xl capitalize text-center tracking-wide">
        Available books
      </h1>

      <section>
        <div className="border rounded-sm w-[400px] p-4 m-2">
          <div>
            <h2>Book | Physics</h2>
            <h1>Available | yes</h1>
          </div>
          <div>
            <button
              type="button"
              className="uppercase border rounded-full p-2 text-gray-200 mt-4"
            >
              order now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
