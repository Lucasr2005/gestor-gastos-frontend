import { useState } from "react";
import { useDispatch } from "react-redux";
import services from "../services/backEndConnection.js";
import { useNavigate } from "react-router-dom";
import arrow from "../arrow.png";
import { Link } from "react-router-dom";
function NuevoGasto() {
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
    services
      .addGasto({
        monto,
        concepto: concepto.charAt(0).toUpperCase() + concepto.slice(1),
        fecha,
        categoria: selected,
        userID: "674f3cc6c7ab2f3759b33257",
      })
      .then((response) => {
        dispatch({
          type: "AGREGAR_GASTO",
          payload: response.response,
        });
        navigate("/");
      });
    // console.log("Monto: ", monto);
    // console.log("Concepto: ", concepto.charAt(0).toUpperCase() + concepto.slice(1));
    // console.log("Categoría: ", selected);
    // console.log("Fecha: ", fecha ? fecha : new Date().toISOString().split("T")[0]);

    setSelected("Otros");
    e.target.reset();
  };
  return (
    <>
      <header className="relative flex  justify-center bg-blue-700 py-2 rounded-b-3xl mx-3">
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
        <h1 className="text-2xl text-white font-semibold  ">Añadir nuevo gasto</h1>
      </header>

      <main className="w-full mb-5 ">
        <form
          className="flex flex-col ml-5"
          onSubmit={formSubmit}
        >
          <div className="mt-5">
            <h3 className="text-xl font-semibold ">Monto</h3>
            <input
              className="w-5/6 border-b-2 border-b-gray-300 bg-white h-10 px-2 pr-16  text-sm focus:outline-none  ml-2"
              name="monto"
              type="Number"
              step="0.01"
              title="Currency"
              placeholder="Ingresa el importe a pagar...."
              required
            />
          </div>
          <section className="mt-5 ">
            <h3 className="text-xl font-semibold ">Categoría</h3>
            <div className="grid grid-cols-3 gap-2 mx-2">
              {categorias.map((categoria) => (
                <div
                  key={categoria}
                  className={`flex flex-col items-center justify-evenly ${
                    selected === categoria ? "bg-gray-300 bg-opacity-70 rounded-lg p-0" : ""
                  }`}
                  onClick={() => handleClick(categoria)}
                >
                  <img
                    className=" w-20 p-2 "
                    src="https://static.vecteezy.com/system/resources/thumbnails/010/674/548/small_2x/fork-and-knife-cartoon-icon-illustration-food-object-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
                    alt=""
                  />
                  <h4>{categoria}</h4>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-5">
            <h3 className="text-xl font-semibold ">Concepto</h3>
            <input
              className="w-5/6 border-b-2 border-b-gray-300 bg-white h-10 px-2 pr-16  text-sm focus:outline-none ml-2"
              type="text"
              name="concepto"
              placeholder="Escribe un comentario..."
              maxLength="25"
            />
          </div>
          <div className="mt-5 ">
            <h3 className="text-xl font-semibold ">Fecha</h3>
            <input
              type="date"
              name="fecha"
              className="bg-gray-300 p-3 rounded-lg mt-3 cursor-pointer ml-2 "
            />
          </div>
          <button className="bg-blue-700 py-2 px-8 text-white text-xl rounded-xl m-auto my-5">
            Añadir gasto
          </button>
        </form>
      </main>
      {error ? (
        <section className="absolute top-0 right-0">
          <div className="bg-red-600 text-white py-1 px-1  mt-12 rounded-lg flex items-center ">
            <img
              className=" w-14 p-2 "
              src="https://th.bing.com/th/id/R.2bed163f699df7f5d112342b436d1c51?rik=8cZb6k6hWZlOpw&pid=ImgRaw&r=0"
              alt=""
            />
            <p className="text-xl">{error}</p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
export default NuevoGasto;
