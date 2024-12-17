export function Error({ message }) {
  return (
    <section className="absolute top-0 right-0">
      <div className="bg-slate-100 text-black py-1 px-1 border-solid border-2 border-black mt-[50px] rounded-lg flex items-center ">
        <img
          className=" w-14 p-2 "
          src="https://th.bing.com/th/id/R.2bed163f699df7f5d112342b436d1c51?rik=8cZb6k6hWZlOpw&pid=ImgRaw&r=0"
          alt=""
        />
        <p className="text-xl">{message}</p>
      </div>
    </section>
  );
}
