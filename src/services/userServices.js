import axios from "axios";

const url = "https://gestor-gastos-backend.vercel.app/api/user"

async function getUser(props) {
    try {
        const result = await axios.get(url, { params: props });
        return result.data
    }
    catch (error) {
        throw new Error(error.response.data.error)

    }
}
async function newUser(props) {
    try {
        const result = await axios.post(url, props);

        return result.data
    }
    catch (error) {
        throw new Error(error.response.data.error)
    }
}
export default { getUser, newUser }