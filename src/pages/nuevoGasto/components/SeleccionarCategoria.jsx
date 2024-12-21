import restaurantes from "../../../images/restaurantes.webp";
import supermercado from "../../../images/supermercado.webp";
import automovil from "../../../images/automovil.webp";
import salud from "../../../images/salud.webp";
import otros from "../../../images/otros.webp";
import { colors } from "../../../const.js";
export function SeleccionarCategoria({ selected, setSelected }) {
  const categorias = ["Restaurantes", "Supermercado", "Automovil", "Salud", "Otros"];

  const handleClick = (categoria) => {
    setSelected(categoria);
  };
  return (
    <section className="mt-5 ">
      <h3
        className="text-xl font-semibold mb-5 
            md:text-3xl md:mb-10 lg:mb-5"
      >
        Categoría
      </h3>
      <div
        className="grid grid-cols-3 gap-2 mx-2
            md:gap-10 lg:grid-cols-5 lg:gap-3 lg:mx-20"
      >
        {categorias.map((categoria) => (
          <div
            key={categoria}
            className={`flex flex-col items-center justify-evenly ${
              selected === categoria ? "bg-gray-300 bg-opacity-70 rounded-lg p-0" : ""
            }`}
            onClick={() => handleClick(categoria)}
          >
            <div
              className="w-16 h-16 flex justify-center items-center  rounded-full 
                    md:w-20 md:h-20"
              style={{ backgroundColor: colors[categoria] }}
            >
              <img
                className=" w-12  p-1 invert
                      md:w-16"
                src={
                  categoria === "Restaurantes"
                    ? restaurantes
                    : categoria === "Supermercado"
                    ? supermercado
                    : categoria === "Automovil"
                    ? automovil
                    : categoria === "Salud"
                    ? salud
                    : otros
                }
                alt=""
              />
            </div>
            <h4 className="md:text-xl">{categoria}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
