import axios from "axios";
import { useSelector } from "react-redux";

const url = "http://localhost:3001/api/gastos"
async function getGastos(user) {
    try {
        const result = await axios.get(`${url}/${user}`)
        console.log(result)
        return result.data
    }
    catch (error) {
        return error.response.data

    }
}
async function addGasto(gasto) {
    console.log(gasto)
    try {
        const result = await axios.post(url, gasto)
        return result.data
    }
    catch (error) {
        return error.response.data

    }
}

export default { getGastos, addGasto }