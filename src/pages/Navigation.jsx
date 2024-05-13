import NavigationCard from "../components/NavigationCard";
import { navCardData } from "../assets/data/navigation";

export default function NavigationPage() {
  return (
    <>
      <div className="my-10 w-full px-2 center2 ">
        <menu className="grid grid-cols-2 gap-2">
          {navCardData.map(({ title, route, image }) => {
            return (
              <NavigationCard
                key={title}
                title={title}
                route={route}
                image={image}
              />
            );
          })}
        </menu>
      </div>
    </>
  );
}
