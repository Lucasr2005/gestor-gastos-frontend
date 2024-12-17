import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Error } from "../components/error";
import userServices from "../services/userServices";
import { useDispatch } from "react-redux";
import gastosServices from "../services/gastosServices.js";
import { GoogleLogin } from "../components/GoogleLogin.jsx";
import { BottomForm } from "../components/BottomForm.jsx";
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  function formSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const samePassword = e.target.samePassword.value;

    if (!email || !password) {
      setError("Datos incompletos");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else if (password.length < 8) {
      setError("Contraseña muy corta");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else if (password !== samePassword) {
      setError("Contraseñas diferentes");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    userServices
      .newUser({ email, password })
      .then((response) => {
        dispatch({
          type: "getUser",
          payload: response._id,
        });
        gastosServices.getGastos(response._id).then((response) => {
          dispatch({
            type: "GASTOS_BACKEND",
            payload: response,
          });
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  }
  return (
    <>
      <header className="  flex absolute left-0 right-0  justify-center bg-blue-700 py-2 rounded-b-3xl mx-3 ">
        <h1 className="text-2xl text-white font-semibold  ">Iniciar sesión</h1>
      </header>
      <section className="mx-auto h-screen absolute z-10 left-0 right-0 flex flex-col justify-center items-center ">
        <form
          onSubmit={formSubmit}
          className="flex flex-col  shadow    p-4  h-fit   rounded-xl"
        >
          <GoogleLogin />
          <input
            type="text"
            name="email"
            placeholder="Correo electronico"
            className="flex border-solid border-2 border-gray-500 items-center justify-center  h-fit p-3  rounded-xl mx-5 mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            minLength={8}
            className="flex border-solid border-2 border-gray-500  items-center justify-center  h-fit p-3  rounded-xl mx-5 mb-5"
          />
          <input
            type="password"
            name="samePassword"
            placeholder="Repite tu Contraseña"
            minLength={8}
            className="flex border-solid border-2 border-gray-500  items-center justify-center  h-fit p-3  rounded-xl mx-5 mb-5"
          />
          <BottomForm type="Registo" />
        </form>
      </section>
      {error ? <Error message={error} /> : ""}
    </>
  );
}
export default Register;
