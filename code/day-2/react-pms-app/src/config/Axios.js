import Axios from "axios";
const axiosInstance = Axios.create({
    baseURL: 'http://127.0.0.1:8081/products/',
    timeoutErrorMessage: 'request timed out'
})
export default axiosInstance