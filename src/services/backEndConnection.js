import axios from "axios";
const url = "http://localhost:3001/api/gastos"
async function getGastos() {
    try {
        const result = await axios.get(`${url}/674f3cc6c7ab2f3759b33257`)
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