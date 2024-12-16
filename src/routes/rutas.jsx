import { BrowserRouter, Route, Routes } from "react-router-dom";
import NuevoGasto from "../pages/NuevoGasto.jsx";
import Gastos from "../pages/Gastos.jsx";
import Categorias from "../pages/Categorias.jsx";
import Login from "../pages/Login.jsx";
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
      </Routes>
    </BrowserRouter>
  );
}
