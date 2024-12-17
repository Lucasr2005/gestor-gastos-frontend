import axios from "axios";
import { useSelector } from "react-redux";

const url = "https://gestor-gastos-backend.vercel.app/api/gastos"
async function getGastos(user) {
    try {
        const result = await axios.get(`${url}/${user}`)
        return result.data
    }
    catch (error) {
        throw new Error(error.response.data.error)


    }
}
async function addGasto(gasto) {
    console.log(gasto)
    try {
        const result = await axios.post(url, gasto)
        return result.data
    }
    catch (error) {
        throw new Error(error.response.data.error)


    }
}

export default { getGastos, addGasto }