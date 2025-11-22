import axios from "axios";


const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
})

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        if (error.response && error.response.status === 401) {
            try {
                await api.post("auth/refresh/");
                return api(error.config);
            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export default api