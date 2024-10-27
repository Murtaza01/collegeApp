//import { useOutletContext } from "react-router-dom";
//import useLanguage from "../hooks/useLanguage";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/college.jpg";

export default function ResourcesPage() {
  //const { books } = useOutletContext();
  //const { isArabic } = useLanguage();
  //const isEven = books.length % 2 !== 0;

  return (
    <main className="bg-white min-h-screen  bg-cubePattern">
      <ImageSection
        img={image}
        heading="resourcesHeading"
        paragraph="resourcesDes"
      />
     <section className="flex justify-center items-center m-6">
        <div className="w-80 h-12 bg-gray-300 px-2 flex gap-10 items-center">
          <span className="">IMG</span>
         <p>hello world</p> 
        </div>
      </section> 
    </main>
  );
}
