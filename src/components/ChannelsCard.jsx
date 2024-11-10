import useLanguage from "../hooks/useLanguage"

export default function ChannelsCard({title,link,img}) {
  const {paraFont} = useLanguage()
  return <a href={link} key={title} target="_blank" className="clickEffect">
    <div className="w-80 h-16 px-1 boxShadow bg-gray-50 rounded-md  flex gap-8 items-center">
      <span className="rounded-full  border-[3px] border-accent ">
        <img src={img} className="rounded-full object-cover size-14" />
      </span>
      <p className={`capitalize ${paraFont}`}>{title}</p>
    </div>
  </a>

}
