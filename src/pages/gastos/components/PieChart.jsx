import { Chart } from "react-google-charts";
import { colors } from "../../../const.js";
import { Link } from "react-router-dom";
export function PieChart({ balance, balancePorCategoria }) {
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
  );
}
