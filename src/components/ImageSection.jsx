export default function ImageSection({ img, heading }) {
  return (
    <section className="relative">
      <figure className="isolate  bg-zinc-500">
        <img
          src={img}
          alt=""
          className="mix-blend-multiply w-full max-h-[30rem]  bg-center bg-cover bg-no-repeat object-cover"
        />
      </figure>
      <div className="absolute center3 text-white  text-2xl font-semibold capitalize">
        <h1>{heading}</h1>
      </div>
    </section>
  );
}
