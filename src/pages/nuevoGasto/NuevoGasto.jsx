import { useState } from "react";
import { Link } from "react-router-dom";
import { Error } from "../../generalComponents/error.jsx";
import arrow from "../../arrow.png";
import { NuevoGastoForm } from "./components/NuevoGastoForm.jsx";
function NuevoGasto() {
  const [error, setError] = useState("");

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
        <NuevoGastoForm setError={setError} />
      </main>
      {error ? <Error message={error} /> : ""}
    </>
  );
}
export default NuevoGasto;
