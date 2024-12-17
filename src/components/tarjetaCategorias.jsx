import { useNavigate } from "react-router-dom";
import restaurantes from "../images/restaurantes.webp";
import supermercado from "../images/supermercado.webp";
import automovil from "../images/automovil.webp";
import salud from "../images/salud.webp";
import otros from "../images/otros.webp";

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
      className="shadow flex  flex-1 justify-between items-center rounded-xl px-2 mb-5 py-3 cursor-pointer"
    >
      <div
        className="w-16 h-16 flex justify-center items-center  rounded-full "
        style={{ backgroundColor: colors[categoria[0]] }}
      >
        <img
          className=" w-12  p-1 invert"
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
      <h3 className="text-lg font-semibold text-left min-w-32 max-w-32 ">{categoria[0]}</h3>
      <p>${categoria[1]}</p>
    </div>
  );
}
