import { useOutletContext } from "react-router-dom";

export default function BooksPage() {
  const context = useOutletContext();
  const { books } = context;

  return (
    <>
      <figure className=" h-80 collegeImage ">
        <div className="center2 text-white h-full text-2xl font-semibold">
          <h1>All The Books you need</h1>
        </div>
      </figure>
      <section className="grid grid-cols-2  gap-y-10 py-10 place-items-center">
        {books &&
          books.map(({ image, link, title }, index) => {
            return (
              <figure
                key={title}
                className={`w-42 ${
                  index === books.length - 1 ? "bg-red-300 col-span-2" : ""
                }`}
              >
                <a href={link}>
                  <img
                    src={image}
                    alt=""
                    className="w-40 h-52  object-fill rounded-sm shadow-lg shadow-neutral-700"
                  />
                </a>
              </figure>
            );
          })}
      </section>
    </>
  );
}
