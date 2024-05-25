import { useOutletContext } from "react-router-dom";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/library.jpg";

export default function BooksPage() {
  const { books } = useOutletContext();
  const isEven = books.length % 2 !== 0;

  return (
    <>
      <ImageSection img={image} heading="booksHeading" paragraph="booksDes" />

      <section
        className="grid bg-geometryPattern  bg-gray-50 grid-cols-2 gap-y-10
         py-10 place-items-center md:grid-cols-3 lg:px-20"
      >
        {books &&
          books.map(({ image, link, title }, index) => {
            return (
              <figure
                key={title}
                className={`  ${
                  isEven && index === books.length - 1
                    ? "col-span-2 md:col-span-1"
                    : ""
                }`}
              >
                <a href={link}>
                  <img
                    src={image}
                    alt=""
                    className="w-36 h-44 object-fill rounded-md shadow-md
                     shadow-neutral-800 sm:w-40 sm:h-48 lg:w-44 lg:h-52"
                  />
                </a>
              </figure>
            );
          })}
      </section>
    </>
  );
}
