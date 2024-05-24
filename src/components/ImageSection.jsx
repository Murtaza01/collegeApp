import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import useLanguage from "../Hooks/useLanguage";
export default function ImageSection({ img, paragraph, heading }) {
  const { t } = useTranslation();
  const { stage } = useParams();
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
          className={`text-center text-2xl capitalize text-gray-100 ${headFont} `}
        >
          {booksHeading ? booksHeading.head : t(heading)}{" "}
          {booksHeading && (
            <Link to={""}>
              {/* `/${stage}/instructions` */}
              <sup className="lowercase">
                <span className=" text-gray-300 shadow-inset text-base">
                  {booksHeading.almost}
                </span>
                <span className="text-gray-500">{booksHeading.quesMark}</span>
              </sup>
            </Link>
          )}
        </h1>
        {paragraph && (
          <p className={`text-center mt-2 ${paraFont} text-gray-200`}>
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
