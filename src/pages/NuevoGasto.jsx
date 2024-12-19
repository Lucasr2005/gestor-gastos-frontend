import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gastosServices from "../services/gastosServices.js";
import { useNavigate } from "react-router-dom";
import arrow from "../arrow.png";
import { Link } from "react-router-dom";
import { Error } from "../components/error.jsx";
import restaurantes from "../images/restaurantes.webp";
import supermercado from "../images/supermercado.webp";
import automovil from "../images/automovil.webp";
import salud from "../images/salud.webp";
import otros from "../images/otros.webp";
function NuevoGasto() {
  const user = useSelector((state) => state.userId);
  const colors = {
    Salud: "#109618",
    Supermercado: "#FF9900",
    Automovil: "#3366cc",
    Restaurantes: "#dc3912",
    Otros: "#990099",
  };
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("Otros");
  const categorias = ["Restaurantes", "Supermercado", "Automovil", "Salud", "Otros"];
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClick = (categoria) => {
    setSelected(categoria);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const monto = Number(e.target.elements.monto.value);
    const concepto = e.target.elements.concepto.value;
    const fecha = e.target.elements.fecha.value
      ? e.target.elements.fecha.value
      : new Date().toISOString().split("T")[0];
    console.log(monto);
    if (!monto || !fecha) {
      setError("Datos incompletos");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    gastosServices
      .addGasto({
        monto,
        concepto: concepto.charAt(0).toUpperCase() + concepto.slice(1),
        fecha,
        categoria: selected,
        userID: user,
      })
      .then((response) => {
        dispatch({
          type: "AGREGAR_GASTO",
          payload: response.response,
        });
        navigate("/");
      });

    setSelected("Otros");
    e.target.reset();
  };
  return (
    <>
      <header
        className="relative flex  justify-center bg-blue-700 py-2 rounded-b-3xl mx-3
      "
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
          Añadir nuevo gasto
        </h1>
      </header>

      <main className="w-full mb-5 ">
        <form
          className="flex flex-col mx-5
          md:mx-32"
          onSubmit={formSubmit}
        >
          <div className="mt-5 md:mt-10">
            <h3
              className="text-xl font-semibold
            md:text-3xl "
            >
              Monto
            </h3>
            <input
              className="w-5/6 border-b-2 border-b-gray-300 bg-white h-10 px-2 pr-16  text-sm focus:outline-none  ml-2
              md:h-16 md:text-lg"
              name="monto"
              type="Number"
              step="0.01"
              placeholder="Ingresa el importe a pagar...."
              required
            />
          </div>
          <section className="mt-5 ">
            <h3
              className="text-xl font-semibold 
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
          <section className="lg:flex lg:flex-row lg:justify-between lg:max-w-4xl lg:items-center lg:mt-5">
            <div className="mt-5">
              <h3
                className="text-xl font-semibold 
            md:text-3xl "
              >
                Concepto
              </h3>
              <input
                className="w-5/6 border-b-2 border-b-gray-300 bg-white h-10 px-2 pr-16  text-sm focus:outline-none ml-2
              md:h-16 md:text-lg lg:min-w-72"
                type="text"
                name="concepto"
                placeholder="Escribe un comentario..."
                maxLength="25"
              />
            </div>
            <div className="mt-5 ">
              <h3
                className="text-xl font-semibold 
            md:text-3xl"
              >
                Fecha
              </h3>
              <input
                type="date"
                name="fecha"
                className="bg-gray-300 p-3 rounded-lg mt-3 cursor-pointer ml-2
              md:text-xl md:py-4 "
              />
            </div>
          </section>
          <button
            className="bg-blue-700 py-2 px-8 text-white text-xl rounded-xl m-auto my-5
          md:text-3xl md:py-4 md:mt-10"
          >
            Añadir gasto
          </button>
        </form>
      </main>
      {error ? <Error message={error} /> : ""}
    </>
  );
}
export default NuevoGasto;
