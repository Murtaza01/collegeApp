//import { useOutletContext } from "react-router-dom";
//import useLanguage from "../hooks/useLanguage";
import ImageSection from "../components/ImageSection";
import image from "../assets/images/college.jpg";
import resourcesData from "../assets/data/resources";
import Heading from "../components/Heading";

export default function ResourcesPage() {
  //const { books } = useOutletContext();
  //const { isArabic } = useLanguage();
  //const isEven = books.length % 2 !== 0;
   const {channels} = resourcesData 
  return (
    <main className="bg-white min-h-screen  bg-cubePattern">
      <ImageSection
        img={image}
        heading="resourcesHeading"
        paragraph="resourcesDes"
      />
     <section className="flex flex-col gap-5 justify-center items-center pb-5">
        <Heading title="Channels"/>
         {channels.map(({img,title})=>{
return   <div className="w-80 h-16 boxShadow bg-gray-100 rounded-md px-2 flex gap-10 items-center">
            <img src={img} className="size-14 rounded-md" />
         <p>{title}</p> 
       </div>
          })}
      </section> 
    </main>
  );
}
