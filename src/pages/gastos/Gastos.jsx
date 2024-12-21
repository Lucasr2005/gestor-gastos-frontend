import { useSelector } from "react-redux";
import "../../Gastos.css";
import { PieChart } from "./components/PieChart.jsx";
import { ListaCategorias } from "./components/ListaCategorias.jsx";
function Gastos() {
  const balance = useSelector((state) =>
    state.gastos.reduce((total = 0, gasto) => total + Number(gasto.monto), 0)
  );
  const gastos = useSelector((state) => {
    return state.gastos;
  });
  const balancePorCategoria = gastos.reduce((acc = [], gasto) => {
    const categoria = gasto.categoria;
    if (!acc[categoria]) {
      acc[categoria] = 0;
    }
    acc[categoria] += gasto.monto;

    return acc;
  }, {});

  return (
    <>
      <header
        className="flex flex-col items-center bg-blue-700 py-2 rounded-b-3xl mx-3
      md:py-4"
      >
        <h1
          className="text-3xl text-white font-semibold  
        md:text-4xl"
        >
          Mis gastos
        </h1>
        <h3
          className="text-white font-medium
        md:text-xl"
        >
          Balance <span className="font-black">${balance}</span>
        </h3>
      </header>
      <main className="max-w-full lg:flex lg:flex-row lg:mt-10 lg:justify-between lg:mx-24">
        <PieChart
          balancePorCategoria={balancePorCategoria}
          balance={balance}
        />
        <ListaCategorias balancePorCategoria={balancePorCategoria} />
      </main>
    </>
  );
}

export default Gastos;
