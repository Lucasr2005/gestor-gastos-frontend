import { Link } from "react-router-dom";

export function BottomForm({ type }) {
  return (
    <div className="flex row mx-2">
      <p className="text-sm max-w-40 pl-3">
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
        className="flex  items-center justify-center w-28 h-fit py-2 rounded-xl  bg-blue-700"
      >
        <p className="text-white text-lg">{type === "login" ? "Iniciar" : "Registro"}</p>
      </button>
    </div>
  );
}
