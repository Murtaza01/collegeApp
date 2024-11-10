
export default function SitesCard({ link, title, img, helpLink }) {

  return <div key={title} className="relative">
    <a href={link} key={title} target="_blank" >
      <div className="rounded-md boxShadow flex flex-col justify-center gap-2 items-center bg-gray-50 w-36 h-32">
        <img src={img} className="size-20" />
        <h3 className="capitalize">{title}</h3>
      </div>
    </a>
    {helpLink ? <a href={helpLink} target="_blank" className="absolute  bg-gray-300 -mt-4 rounded-full w-6 text-center text-lg right-0 top-0">?</a>
      : undefined} </div>


}

