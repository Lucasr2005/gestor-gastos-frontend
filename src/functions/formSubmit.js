import userServices from "../services/userServices.js";
import gastosServices from "../services/gastosServices.js";

export function formSubmit(e, navigate, dispatch, setError) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
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
    }
    userServices
        .getUser({ email, password })
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