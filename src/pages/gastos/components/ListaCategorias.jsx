import { TarjetaCategorias } from "./tarjetaCategorias.jsx";

export function ListaCategorias({ balancePorCategoria }) {
  const datos = Object.entries(balancePorCategoria);
  datos.sort((a, b) => b[1] - a[1]);
  return (
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
  );
}
