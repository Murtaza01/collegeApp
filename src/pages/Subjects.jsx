import { useOutletContext } from "react-router-dom";
import SubjectCard from "../components/SubjectCard";
import useLanguage from "../Hooks/useLanguage";
export default function SubjectsPage() {
  const { books } = useOutletContext();
  const { isArabic } = useLanguage();
  return (
    <main className="mt-16 h-screen bgPattren bg-gray-50 ">
      <div
        className={`grid gap-5 py-10 ${isArabic ? "pl-4 pr-8" : "pr-4 pl-8"} `}
      >
        {books.map(({ subject, title, image }) => (
          <SubjectCard
            color={subject.color}
            key={title}
            title={title}
            img={image}
            desc={subject.description}
          />
        ))}
      </div>
    </main>
  );
}
