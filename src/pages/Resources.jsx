import ImageSection from "../components/ImageSection";
import image from "../assets/images/college.jpg";
import Heading from "../components/Heading";
import { useOutletContext } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

export default function ResourcesPage() {
  const { resources } = useOutletContext();
  const { channels, sites } = resources
  const { paraFont } = useLanguage();

  return (
    <main className="bg-white min-h-screen pb-10  bg-cubePattern">
      <ImageSection
        img={image}
        heading="resourcesHeading"
        paragraph="resourcesDes"
      />
      <Heading title="channels" />
      {channels.length === 0 ? <span className="py-20 center2 text-lg font-bold text-red-600">Nothing Here</span>
        :
        <section className="flex flex-col gap-5 justify-center items-center mt-10">
          {channels.map(({ img, title, link }) => {
            return <a href={link} key={title} target="_blank" className="clickEffect">
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
      <Heading title="sites" />
      <section className="flex mt-10 justify-center items-center gap-7">
        {sites.map(({ title, img, link, helpLink }) => {
          return <div key={title} className="relative">
            <a href={link} key={title} target="_blank" >
              <div className="rounded-md boxShadow flex flex-col gap-1 items-center bg-gray-50 px-3 py-3">
                <img src={img} className="size-20" />
                <h3 className="capitalize">{title}</h3>
              </div>
            </a>
            <a href={helpLink} target="_blank" className="absolute  bg-gray-300 -mt-4 rounded-full w-6 text-center text-lg right-0 top-0">?</a>
          </div>
        })}
      </section>
    </main>
  );
}
