import error from "../images/error.webp";
export function Error({ message }) {
  return (
    <section className="absolute top-0 right-0">
      <div
        className="bg-slate-100 text-black py-1 px-1 border-solid border-2 border-black mt-[50px] rounded-lg flex items-center 
      md:mt-[100px] md:py-4 md:px-8 
      lg:mt-[90px] "
      >
        <img
          className=" w-10 mr-2 
        md:w-12 md:h-12 "
          src={error}
          alt=""
        />
        <p
          className="text-xl 
        md:text-3xl lg:text-2xl "
        >
          {message}
        </p>
      </div>
    </section>
  );
}
