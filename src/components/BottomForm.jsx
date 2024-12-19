import { Link } from "react-router-dom";

export function BottomForm({ type }) {
  return (
    <div
      className="flex row justify-between mx-2
    md:mb-5"
    >
      <p
        className="text-sm max-w-40 pl-3
      md:text-lg md:max-w-56 md:pl-5
      lg:max-w-56"
      >
        {type === "login" ? "No tengo una cuenta " : "Ya tengo una cuenta "}
        <Link
          to={type === "login" ? "/register" : "/login"}
          className="underline text-blue-700 "
        >
          {type === "login" ? "Registrarme" : "Iniciar sesion"}
        </Link>
      </p>
      <button
        type="submit"
        className="flex  items-center justify-center w-28 h-fit py-2 rounded-xl  bg-blue-700 text-white text-lg
        md:w-32 md:py-3 md:text-xl"
      >
        {type === "login" ? "Iniciar" : "Registro"}
      </button>
    </div>
  );
}
