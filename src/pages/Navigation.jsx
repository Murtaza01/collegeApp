import NavigationCard from "../components/NavigationCard";
import { navCardData } from "../assets/data/navigation";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/englishSections.jpg";
import Heading from "../components/Heading";

export default function NavigationPage() {
  return (
    <>
      <ImageSection img={image} heading="navHeading" paragraph="navDes" />
      <Heading title="siteSections"/>
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
