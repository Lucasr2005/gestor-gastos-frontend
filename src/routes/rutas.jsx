import { BrowserRouter, Route, Routes } from "react-router-dom";
import NuevoGasto from "../pages/nuevoGasto/NuevoGasto.jsx";
import Gastos from "../pages/gastos/Gastos.jsx";
import Categorias from "../pages/categorias/Categorias.jsx";
import Login from "../pages/login-register/Login.jsx";
import Register from "../pages/login-register/Register.jsx";
import { ProtectedRoute } from "../middleWare/protectedRoute.jsx";
export function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute />}
        >
          <Route
            path="/"
            element={<Gastos />}
          />
          <Route
            path="/nuevoGasto"
            element={<NuevoGasto />}
          />
          <Route
            path="/Categorias/:categoria"
            element={<Categorias />}
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}
