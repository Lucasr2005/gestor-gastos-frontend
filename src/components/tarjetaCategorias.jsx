export function TarjetaCategorias({ categoria }) {
  // console.log(categoria);
  return (
    <div className="shadow flex  flex-1 justify-between items-center rounded-xl px-2 mb-5">
      <img
        className=" w-1/4 p-1 translate-x-[-10px]"
        src="https://static.vecteezy.com/system/resources/thumbnails/010/674/548/small_2x/fork-and-knife-cartoon-icon-illustration-food-object-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
        alt=""
      />
      <h3 className="text-lg font-semibold text-left w-24 translate-x-[-25px]">{categoria[0]}</h3>
      <p>${categoria[1]}</p>
    </div>
  );
}
