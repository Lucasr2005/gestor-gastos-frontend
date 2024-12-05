// categorias: ["Restaurantes", "Supermercado", "Automóvil", "Salud"];
const initialState = [
];

export const gastosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AGREGAR_GASTO":
            return [...state, action.payload];
        case "GASTOS_BACKEND":
            return action.payload;
        case "ELIMINAR_GASTO":
            return state.filter((gasto) => gasto.id !== action.payload);
        // case "ACTUALIZAR_GASTO":
        //     return state.map((gasto) =>
        //         gasto.id === action.payload.id ? action.payload : gasto
        //     );
        default:
            return state;
    }
};