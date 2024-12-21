import { GoogleLogin } from "./GoogleLogin.jsx";
import { FooterForm } from "./FooterForm.jsx";
import { formSubmit } from "../functions/formSubmit.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export function LoginForm({ setError }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => formSubmit(e, navigate, dispatch, setError, "login")}
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
      <FooterForm type="login" />
    </form>
  );
}
