import { useOutletContext } from "react-router-dom";
import ImageSection from "../components/ImageSection";
import SubjectCard from "../components/SubjectCard";
import useLanguage from "../hooks/useLanguage";
import image from "../assets/images/college.jpg";
export default function SubjectsPage() {
  const { books } = useOutletContext();
  const { isArabic } = useLanguage();
  return (
    <main className="bg-white min-h-screen  bg-cubePattern">
      <ImageSection
        img={image}
        heading="subjectsHeading"
        paragraph="subjectsDes"
      />
      <div
        className={`grid gap-5 py-10 ${isArabic ? "pl-4 pr-8" : "pr-4 pl-8"} `}
      >
        {books.map(({ subject, title, image }) => (
          <SubjectCard
            color={subject.color}
            key={title}
            title={title}
            img={image}
            desc={subject.subjectDes}
          />
        ))}
      </div>
    </main>
  );
}
