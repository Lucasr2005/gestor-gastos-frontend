import { useParams } from "react-router-dom";
import { ListaGastos } from "./components/ListaGastos.jsx";
import { Header } from "./components/Header.jsx";
function Categorias() {
  const params = useParams();
  const categoria = params.categoria;
  return (
    <>
      <Header categoria={categoria} />
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
      <ListaGastos categoria={categoria} />
    </>
  );
}
export default Categorias;
