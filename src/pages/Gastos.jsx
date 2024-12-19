import { useSelector } from "react-redux";
import "../Gastos.css";
import { Chart } from "react-google-charts";
import { TarjetaCategorias } from "../components/tarjetaCategorias.jsx";

import { Link } from "react-router-dom";
function Gastos() {
  // console.log(useSelector((state) => state));

  const colors = {
    Salud: "#109618",
    Supermercado: "#FF9900",
    Automovil: "#3366cc",
    Restaurantes: "#dc3912",
    Otros: "#990099",
  };
  // console.log(useSelector((state) => state.gastos));
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
  const data =
    balance > 0
      ? [
          ["Categoria", "Monto"],
          ["Restaurantes", Math.round(balancePorCategoria.Restaurantes)],
          ["Supermercado", Math.round(balancePorCategoria.Supermercado)],
          ["Automovil", Math.round(balancePorCategoria.Automovil)],
          ["Salud", Math.round(balancePorCategoria.Salud)],
          ["Otros", Math.round(balancePorCategoria.Otros)],
        ]
      : [["Categoria", "Monto"]];
  // console.log(data);
  const slicesOrder = data.slice(1).map((item) => {
    return colors[item[0]];
  });
  // console.log(slicesOrder);
  const datos = Object.entries(balancePorCategoria);
  datos.sort((a, b) => b[1] - a[1]);
  const fontSize = window.innerWidth < 760 ? 12 : 16;

  // console.log(datos);
  const options = {
    legend: "none",
    pieSliceText: "label",
    pieStartAngle: 100,
    backgroundColor: "none",
    chartArea: { width: "100%", height: "95%" },
    fontSize: fontSize,
    slices: {
      0: { color: slicesOrder[0] },
      1: { color: slicesOrder[1] },
      2: { color: slicesOrder[2] },
      3: { color: slicesOrder[3] },
      4: { color: slicesOrder[4] },
    },
  };
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
        <section
          className="flex justify-center  shadow   mx-10 my-4  h-72   rounded-xl
      md:mx-32 md:h-fit md:pb-2
      lg:w-2/5 lg:mx-0 lg:ml-10 lg:mt-5 "
        >
          <div className=" relative w-full">
            <Chart
              className=" flex justify-center items-center h-64
            md:h-80 md: text-3xl"
              chartType="PieChart"
              data={data}
              options={options}
              maxWidth="100%"
            />
            <Link
              className="absolute bottom-0 right-0 bg-blue-700 px-3 py-1 text-2xl text-white text-right mr-2 mb-1  rounded-full
            md:text-3xl md:px-4 md:py-2 md:mr-4 "
              to="/nuevoGasto"
            >
              +
            </Link>
          </div>
        </section>
        <section
          className="flex flex-col mx-10 
       md:mx-32
       lg:mx-0 lg: max-h-96 lg:overflow-y-auto lg:p-5"
        >
          {datos.map((categoria) =>
            categoria[1] > 0 ? (
              <TarjetaCategorias
                key={categoria[0]}
                categoria={categoria}
              />
            ) : (
              ""
            )
          )}
        </section>
      </main>
    </>
  );
}

export default Gastos;
