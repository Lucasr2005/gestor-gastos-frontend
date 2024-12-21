import { useState } from "react";
import { Error } from "../../generalComponents/error.jsx";
import { LoginForm } from "./components/LoginForm.jsx";
function Login() {
  const [error, setError] = useState("");

  return (
    <>
      <header
        className="  flex absolute left-0 right-0  justify-center items-center bg-blue-700 py-2 rounded-b-3xl mx-3 
      md:h-20"
      >
        <h1
          className="text-2xl text-white font-semibold 
        md:text-3xl "
        >
          Iniciar sesión
        </h1>
      </header>
      <section className="mx-auto h-screen absolute z-10 left-0 right-0 flex flex-col justify-center items-center ">
        <LoginForm setError={setError} />
      </section>
      {error ? <Error message={error} /> : ""}
    </>
  );
}
export default Login;
