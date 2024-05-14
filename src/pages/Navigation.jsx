import NavigationCard from "../components/NavigationCard";
import { navCardData } from "../assets/data/navigation";
export default function NavigationPage() {
  return (
    <>
      <div className="my-10 w-full px-2 center2 ">
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
