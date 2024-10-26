//import { useOutletContext } from "react-router-dom";
//import useLanguage from "../hooks/useLanguage";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/college.jpg";

export default function SubjectsPage() {
  //const { books } = useOutletContext();
  //const { isArabic } = useLanguage();
  //const isEven = books.length % 2 !== 0;

  return (
    <main className="bg-white min-h-screen  bg-cubePattern">
      <ImageSection
        img={image}
        heading="subjectsHeading"
        paragraph="subjectsDes"
      />
    </main>
  );
}
