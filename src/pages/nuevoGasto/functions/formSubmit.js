import gastosServices from "../../../services/gastosServices";
export function formSubmit(e, navigate, dispatch, setError, selected, setSelected, user) {
    e.preventDefault();
    const monto = Number(e.target.elements.monto.value);
    const concepto = e.target.elements.concepto.value;
    const fecha = e.target.elements.fecha.value
        ? e.target.elements.fecha.value
        : new Date().toISOString().split("T")[0];
    console.log(monto);
    if (!monto || !fecha) {
        setError("Datos incompletos");
        setTimeout(() => {
            setError("");
        }, 3000);
        return;
    }
    gastosServices
        .addGasto({
            monto,
            concepto: concepto.charAt(0).toUpperCase() + concepto.slice(1),
            fecha,
            categoria: selected,
            userID: user,
        })
        .then((response) => {
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            const fechaDate = new Date(fecha);

            if (fechaDate >= oneMonthAgo) {
                console.log(response);
                dispatch({
                    type: "AGREGAR_GASTO",
                    payload: response.response,
                });
            }
            navigate("/");
        });

    setSelected("Otros");
    e.target.reset();
}