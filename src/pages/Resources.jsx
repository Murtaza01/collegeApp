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
      {channels.length === 0 ? <span className="py-20 center2">Nothing Here</span>
        :
        <section className="flex flex-col gap-5 justify-center items-center pb-5">
          <Heading title="channels" />
          {channels.map(({ img, title, link }) => {
            return <a href={link ?? ""} key={title} target="_blank" className="clickEffect">
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
      <section>
        <Heading title="sites" />
        {sites.map(({ title, img, link, helpLink }) => {
          return <a href={link} key={title} target="_blank" >
            <div className="flex my-5 justify-center items-center gap-7">
              <div className="rounded-md relative boxShadow flex flex-col gap-1 items-center bg-gray-50 px-3 py-3">
                <a href={helpLink} target="_blank" className="absolute  bg-gray-300 -mt-4 rounded-full w-6 text-center text-lg right-0 top-0">?</a>
                <img src={img} className="size-20" />
                <h3 className="capitalize">{title}</h3>
              </div>
            </div>
          </a>
        })}
      </section>
    </main>
  );
}
