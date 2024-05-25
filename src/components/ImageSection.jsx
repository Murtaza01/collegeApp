import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import BooksHeading from "./BooksHeading";
export default function ImageSection({ img, paragraph, heading }) {
  const { t } = useTranslation();
  // const { stage } = useParams();
  const { paraFont, headFont } = useLanguage();
  let booksHeading;

  if (heading === "booksHeading") {
    const { head, quesMark, almost } = t(heading);
    booksHeading = {
      almost,
      head,
      quesMark,
    };
  }

  return (
    <section className="relative pt-16">
      <figure className="isolate  bg-zinc-600">
        <img
          src={img}
          alt=""
          className="mix-blend-multiply w-full max-h-[30rem]  bg-center bg-cover bg-no-repeat object-cover"
        />
      </figure>
      <div className="absolute center3 w-11/12 ">
        <h1
          className={`text-center text-2xl md:text-3xl lg:text-4xl capitalize text-gray-100 ${headFont} `}
        >
          {booksHeading ? <BooksHeading heading={booksHeading} /> : t(heading)}{" "}
        </h1>
        {paragraph && (
          <p
            className={`text-center mt-2 lg:mt-5 ${paraFont} text-gray-200 md:text-lg lg:text-xl`}
          >
            {t(`${paragraph}.des`)}{" "}
            <Link>
              <span className="shadow-inset  text-gray-300">
                {t(`${paragraph}.problem`)}
              </span>
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
