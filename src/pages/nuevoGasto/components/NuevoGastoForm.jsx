import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SeleccionarCategoria } from "./SeleccionarCategoria";
import { formSubmit } from "../functions/formSubmit";
export function NuevoGastoForm({ setError }) {
  const [selected, setSelected] = useState("Otros");
  const user = useSelector((state) => state.userId);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <form
      className="flex flex-col mx-5
          md:mx-32"
      onSubmit={(e) => {
        formSubmit(e, navigate, dispatch, setError, selected, setSelected, user);
      }}
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
      <SeleccionarCategoria
        selected={selected}
        setSelected={setSelected}
      />
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
  );
}
