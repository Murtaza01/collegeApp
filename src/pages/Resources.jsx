import ImageSection from "../components/ImageSection";
import image from "../assets/images/college.jpg";
import Heading from "../components/Heading";
import { useOutletContext } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

export default function ResourcesPage() {
  const { resources } = useOutletContext();
  const { channels } = resources
  const { paraFont } = useLanguage();
  return (
    <main className="bg-white min-h-screen  bg-cubePattern">
      <ImageSection
        img={image}
        heading="resourcesHeading"
        paragraph="resourcesDes"
      />
      {channels.length === 0 ? <span className="py-20 center2">Nothing Here</span>
        :
        <section className="flex flex-col gap-5 justify-center items-center pb-5">
          <Heading title="Channels" />
          {channels.map(({ img, title, link }) => {
            return <a href={link ?? ""} target="_blank" className="clickEffect">
              <div className="w-80 h-16 px-1 boxShadow bg-gray-50 rounded-md  flex gap-8 items-center">
                <span className="rounded-full  border-[3px] border-accent ">
                  <img src={img} className="rounded-full object-cover size-14" />
                </span>
                <p className={`capitalize ${paraFont}`}>{title}</p>
              </div>
            </a>
          })}
        </section>
      }
    </main>
  );
}
