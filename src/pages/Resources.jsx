import ImageSection from "../components/ImageSection";
import collegeImage from "../assets/images/college.jpg";
import Heading from "../components/Heading";
import { useOutletContext } from "react-router-dom";
import SitesCard from "../components/SitesCard";
import ChannelsCard from "../components/ChannelsCard";
import { FaTelegram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

export default function ResourcesPage() {
  const { resources } = useOutletContext();
  const { channels, sites } = resources

  return (
    <main className="bg-gray-100 min-h-screen pb-10 ">
      <ImageSection
        img={collegeImage}
        heading="resourcesHeading"
        paragraph="resourcesDes"
      />
      <Heading title="channels" icon={<FaTelegram className="text-sky-600" />} />
      {channels.length === 0 ? <span className="py-20 center2 text-lg font-bold text-red-600">Nothing Here</span>
        :
        <section className="flex flex-col gap-5 justify-center items-center mt-10">
          {channels.map(({ img, title, link }) => {
            return <ChannelsCard key={title} title={title} img={img} link={link} />
          })}
        </section>
      }
      <Heading title="sites" icon={<AiOutlineGlobal  />} />
      <section className="flex mt-10 justify-center items-center gap-7">
        {sites.map(({ title, img, link, helpLink }) => {
          return <SitesCard
            key={title}
            title={title}
            img={img}
            link={link}
            helpLink={helpLink} />
        })}
      </section>
    </main>
  );
}
