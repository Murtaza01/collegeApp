import { useOutletContext } from "react-router-dom";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/2.jpg";

export default function BooksPage() {
  const context = useOutletContext();
  const { books } = context;
  return (
    <>
      <ImageSection img={image} heading="All the books you need" />
      <section className="grid grid-cols-2  gap-y-10 py-10 place-items-center">
        {books &&
          books.map(({ image, link, title }, index) => {
            return (
              <figure
                key={title}
                className={`w-42 ${
                  index === books.length - 1 ? "col-span-2" : ""
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
