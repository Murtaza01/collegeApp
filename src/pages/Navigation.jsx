import NavigationCard from "../components/NavigationCard";
import { navCardData } from "../assets/data/navigation";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/englishSections.jpg";
import { useTranslation } from "react-i18next";
import useLanguage from "../hooks/useLanguage";

export default function NavigationPage() {
  const { t } = useTranslation();
  const { headFont } = useLanguage();
  return (
    <>
      <ImageSection img={image} heading="navHeading" paragraph="navDes" />
      <h2
        className={` ${headFont} text-center mt-10 text-xl text-neutral-800 capitalize`}
      >
        {t("siteSections")}
      </h2>
      <div className="py-10 w-full px-2 center2  ">
        <menu className="grid grid-cols-2 gap-2">
          {navCardData.map(({ title, route, icon, isExit, isLang }) => {
            return (
              <NavigationCard
                key={title}
                title={title}
                route={route}
                icon={icon}
                isExit={isExit}
                isLang={isLang}
              />
            );
          })}
        </menu>
      </div>
    </>
  );
}
