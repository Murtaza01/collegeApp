import NavigationCard from "../components/NavigationCard";
import { navCardData } from "../assets/data/navigation";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/college.jpg";
import { useTranslation } from "react-i18next";

export default function NavigationPage() {
  const { t } = useTranslation();
  return (
    <>
      <ImageSection img={image} heading={t("StageHeading")} />
      <div className="py-10 w-full px-2 center2 ">
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
