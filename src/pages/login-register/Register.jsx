import { useState } from "react";
import { Error } from "../../generalComponents/error.jsx";
import { Header } from "./components/Header.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";
function Register() {
  const [error, setError] = useState("");

  return (
    <>
      <Header type="register" />
      <main className="mx-auto h-screen absolute z-10 left-0 right-0 flex flex-col justify-center items-center ">
        <RegisterForm setError={setError} />
      </main>
      {error ? <Error message={error} /> : ""}
    </>
  );
}
export default Register;
