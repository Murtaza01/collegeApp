import { useOutletContext } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";

export default function SubjectsPage() {
  const { books } = useOutletContext();

  return (
    <main className="mt-16 h-screen  bgPattren bg-gray-50 ">
      <div className="grid gap-5 py-10 pr-4 pl-10">
        {books.map(({ subject, title, image }) => (
          <SubjectCard
            color={subject.color}
            key={title}
            img={image}
            desc={subject.description}
          />
        ))}
      </div>
    </main>
  );
}
