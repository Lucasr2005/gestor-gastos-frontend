import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export function ListaGastos({ categoria }) {
  const navigate = useNavigate();

  const state = useSelector((state) => state.gastos);
  if (state.length === 0) {
    navigate("/");
  }
  const gastos = state.filter((gasto) => gasto.categoria === categoria);

  return (
    <>
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
