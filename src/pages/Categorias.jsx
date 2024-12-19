import { Navigate, redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import arrow from "../arrow.png";
import { Link } from "react-router-dom";
function Categorias() {
  const colors = {
    Salud: "#109618",
    Supermercado: "#FF9900",
    Automovil: "#3366cc",
    Restaurantes: "#dc3912",
    Otros: "#990099",
  };
  const navigate = useNavigate();
  const params = useParams();
  const categoria = params.categoria;
  const state = useSelector((state) => state.gastos);
  const gastos = state.filter((gasto) => gasto.categoria === categoria);
  if (state.length === 0) {
    navigate("/");
  }

  return (
    <>
      <header
        className={`relative flex  justify-center  mb-4 py-2 rounded-b-3xl mx-3
          md:py-5 md:mb-10 `}
        style={{ backgroundColor: colors[categoria] }}
      >
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src={arrow}
            alt="Go back"
            className="w-6 absolute left-5 flex  invert"
          />
        </Link>

        <h1
          className="text-2xl text-white font-semibold
        md:text-3xl"
        >
          {categoria}
        </h1>
      </header>
      <div
        className="text-lg flex  flex-1 items-center justify-between  px-4 mx-4  mb-5
       md:mx-32 md:text-2xl md:px-6
        lg:mx-96"
      >
        <h3
          className=" font-bold text-left max-w-32 min-w-32 justify-center pl-2
        md:max-w-56 md:min-w-56"
        >
          Concepto
        </h3>
        <h3
          className=" font-bold text-center max-w-20 min-w-20 pl-2
        md:max-w-28 md:min-w-28"
        >
          Monto
        </h3>
        <p
          className="text-center font-bold max-w-20 min-w-20
        md:max-w-28 md:min-w-28"
        >
          Fecha
        </p>
      </div>
      {gastos.map((gasto) => {
        return (
          <div
            key={gasto._id}
            className="shadow flex  flex-1 items-center justify-between rounded-xl px-4 mx-4 min-h-20 max-h-20 mb-5 overflow-hidden
             md:mx-32 md:mb-6 md:min-h-24 md:max-h-24 md:px-6
             lg:mx-96 "
          >
            <h3
              className="text-lg font-semibold text-left max-w-32 min-w-32 whitespace-wrap overflow-clip
            md:max-w-56 md:min-w-56 md:text-xl"
            >
              {gasto.concepto ? gasto.concepto : `Gasto en ${categoria}`}
            </h3>
            <h3
              className="text-lg font-medium text-center max-w-20 min-w-20
            md:text-xl md:max-w-28 md:min-w-28"
            >
              ${gasto.monto}
            </h3>
            <p
              className=" text-center 
            md:text-xl md:max-w-28 md:min-w-28"
            >
              {new Date(gasto.fecha).toISOString().split("T")[0]}
            </p>
          </div>
        );
      })}
    </>
  );
}
export default Categorias;
