import NavigationCard from "../components/NavigationCard";
export default function NavigationPage() {
  return (
    <>
      <div className="my-10 w-full px-2 center2 ">
        <menu className="grid grid-cols-2 bg-red-200">
          <NavigationCard />
          <NavigationCard />
        </menu>
      </div>
    </>
  );
}
