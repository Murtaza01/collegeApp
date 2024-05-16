import NavigationCard from "../components/NavigationCard";
import { navCardData } from "../assets/data/navigation";
export default function NavigationPage() {
  return (
    <>
      <figure className=" h-80 collegeImage ">
        <div className="center2 text-white h-full text-2xl font-semibold">
          <h1>Welcome</h1>
        </div>
      </figure>

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
