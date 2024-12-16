import axios from "axios";

const url = "http://localhost:3001/api/user"

async function getUser(props) {
    try {
        const result = await axios.get(url, { params: props });
        return result.data
    }
    catch (error) {
        return error.response.data
    }
}

export default { getUser }