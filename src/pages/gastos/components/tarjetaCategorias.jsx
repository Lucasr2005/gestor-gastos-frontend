import { useNavigate } from "react-router-dom";
import restaurantes from "../../../images/restaurantes.webp";
import supermercado from "../../../images/supermercado.webp";
import automovil from "../../../images/automovil.webp";
import salud from "../../../images/salud.webp";
import otros from "../../../images/otros.webp";

export function TarjetaCategorias({ categoria }) {
  // console.log(categoria);
  const navigate = useNavigate();
  const colors = {
    Salud: "#109618",
    Supermercado: "#FF9900",
    Automovil: "#3366cc",
    Restaurantes: "#dc3912",
    Otros: "#990099",
  };
  return (
    <div
      onClick={() => navigate(`/categorias/${categoria[0]}`)}
      className="shadow flex  flex-1 justify-between items-center rounded-xl px-2 mb-5 py-3 cursor-pointer
      md:px-6"
    >
      <div
        className="w-12 h-12 flex justify-center items-center  rounded-full 
        md:w-20 md:h-20"
        style={{ backgroundColor: colors[categoria[0]] }}
      >
        <img
          className=" w-10  p-1 invert
          md:w-16"
          src={
            categoria[0] === "Restaurantes"
              ? restaurantes
              : categoria[0] === "Supermercado"
              ? supermercado
              : categoria[0] === "Automovil"
              ? automovil
              : categoria[0] === "Salud"
              ? salud
              : otros
          }
          alt=""
        />
      </div>
      <h3
        className="text-lg font-semibold text-left min-w-28 max-w-28 
      md:text-2xl md:min-w-64 md:max-w-64
      lg:px-4 "
      >
        {categoria[0]}
      </h3>
      <p
        className="text-lg text-right 
      max-w-20 min-w-20"
      >
        ${categoria[1]}
      </p>
    </div>
  );
}
