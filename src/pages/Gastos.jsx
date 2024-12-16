import { useDispatch, useSelector } from "react-redux";
import "../Gastos.css";
import { Chart } from "react-google-charts";
import { TarjetaCategorias } from "../components/tarjetaCategorias.jsx";
import { useEffect } from "react";
import gastosServices from "../services/gastosServices.js";
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
  const balancePorCategoria = useSelector((state) => {
    const gastos = state.gastos;
    const balancePorCategoria = gastos.reduce((acc = [], gasto) => {
      const categoria = gasto.categoria;
      if (!acc[categoria]) {
        acc[categoria] = 0;
      }
      acc[categoria] += gasto.monto;

      return acc;
    }, {});
    return balancePorCategoria;
  });
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

  // console.log(datos);
  const options = {
    legend: "none",
    pieSliceText: "label",
    pieStartAngle: 100,
    backgroundColor: "none",
    chartArea: { width: "100%", height: "95%" },
    fontSize: 12,
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
      <header className="flex flex-col items-center bg-blue-700 py-2 rounded-b-3xl mx-3">
        <h1 className="text-3xl text-white font-semibold  ">Mis gastos</h1>
        <h3 className="text-white font-medium">
          Balance <span className="font-black">${balance}</span>
        </h3>
      </header>
      <section className="flex justify-center  shadow   mx-10 my-4  h-72   rounded-xl">
        <div className=" relative w-full">
          <Chart
            className=" flex justify-center items-center h-64"
            chartType="PieChart"
            data={data}
            options={options}
            maxWidth="100%"
          />
          <Link
            className="absolute bottom-0 right-0 bg-blue-700 px-3 py-1 text-2xl text-white text-right mr-2 mb-1  rounded-3xl"
            to="/nuevoGasto"
          >
            +
          </Link>
        </div>
      </section>
      <section className="flex flex-col mx-10 ">
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
    </>
  );
}

export default Gastos;
