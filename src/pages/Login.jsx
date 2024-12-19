import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Error } from "../components/error";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "../components/GoogleLogin.jsx";
import { BottomForm } from "../components/BottomForm.jsx";
import { formSubmit } from "../functions/formSubmit.js";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        <form
          onSubmit={(e) => formSubmit(e, navigate, dispatch, setError)}
          className="flex flex-col  shadow p-4  rounded-xl sm:mt-10
          md:h-fit md:w-fit
          lg:w-fit"
        >
          <GoogleLogin />
          <input
            type="text"
            name="email"
            placeholder="Correo electronico"
            className="flex border-solid border-2 border-gray-500 items-center justify-center  h-fit p-3  rounded-xl mx-5 mb-3
            md:h-16 md:text-lg md:mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            minLength={8}
            className="flex border-solid border-2 border-gray-500  items-center justify-center  h-fit p-3  rounded-xl mx-5 mb-5
            md:h-16 md:text-lg md:mb-5
             "
          />
          <BottomForm type="login" />
        </form>
      </section>
      {error ? <Error message={error} /> : ""}
    </>
  );
}
export default Login;
