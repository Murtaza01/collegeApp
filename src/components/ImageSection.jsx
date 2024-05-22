import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

export default function ImageSection({ img, paragraph, heading, style }) {
  const { t } = useTranslation();
  const { stage } = useParams();

  let booksHeading;
  if (heading === "booksHeading") {
    const { main, quesMark, almost } = t(heading);
    booksHeading = {
      almost,
      main,
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
      <div className="absolute center3 w-11/12 text-gray-200   text-2xl  ">
        <h1 className={`${style}`}>
          {booksHeading ? booksHeading.main : t(heading)}{" "}
          {booksHeading && (
            <Link to={`/${stage}/instructions`}>
              <sup className="lowercase">
                <span className=" text-white shadow-inset">
                  {booksHeading.almost}
                </span>
                <span className="text-gray-600 ">{booksHeading.quesMark}</span>
              </sup>
            </Link>
          )}
        </h1>
        {paragraph && (
          <p className="text-base text-center mt-1 ">
            {t(`${paragraph}.des`)}{" "}
            <span className="shadow-inset">{t(`${paragraph}.problem`)}</span>
          </p>
        )}
      </div>
    </section>
  );
}
