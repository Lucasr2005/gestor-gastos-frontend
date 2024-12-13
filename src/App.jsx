import { Rutas } from "./routes/rutas.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import services from "./services/backEndConnection.js";

export function App() {
  const gastosExistentes = useSelector((state) => state.gastos);

  const dispatch = useDispatch();
  useEffect(() => {
    if (gastosExistentes.length === 0) {
      services.getGastos().then((response) => {
        dispatch({
          type: "GASTOS_BACKEND",
          payload: response,
        });
      });
    }
  }, []);
  return <Rutas />;
}
