export function Header(type) {
  return (
    <header
      className="  flex absolute left-0 right-0  justify-center items-center bg-blue-700 py-2 rounded-b-3xl mx-3 
      md:h-20"
    >
      <h1
        className="text-2xl text-white font-semibold 
        md:text-3xl "
      >
        {type === "login" ? "Iniciar sesion" : "Registro"}
      </h1>
    </header>
  );
}
